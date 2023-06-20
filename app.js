import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ejs from 'ejs';
import path from 'path'; 
import multer from 'multer';
import Teacher from './models/adminModel.js';
import {javaQuestions, cppQuestions,cQuestions,dbmsQuestions} from './info.js';

const upload = multer({dest : 'uploads', fileFilter (req,file,cb) {
    cb(undefined, true);
}})


const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://ujjutarika35:Test123@cluster0.ublufxm.mongodb.net/studentDB?retryWrites=true&w=majority')
.then(() => console.log('server connected')).catch((err) => console.log(err));


const studentSchema = new mongoose.Schema(
    {
        username : {type : String, required :true, max : 50},
        email : {type : String , required : true,},
        password : {type : String , min : 6}
    }
);
const formSchema = new mongoose.Schema(
 {
     name : {type : String},
     email : {type :String},
     clgName : {type : String},
     number : {type : String},
     subject : {type : String}
 }   
)
const Student = new mongoose.model('Student', studentSchema);
const FormDetails = new mongoose.model('formDetails' , formSchema);

app.route('/')
    .get((req,res) => {
        const file = path.resolve() + '/public/files/signup.html';
        res.sendFile(file);
    }).post((req,res) => {
        const newStudent = new Student({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })
        newStudent.save();
        res.send("<h1>Signup Successfull <a href = '/login.html' >Click here to login!</a> </h1>");
    })

app.route('/login.html')
    .get((req,res) => {
        const file = path.resolve() + '/public/files/login.html';
        res.sendFile(file);
    }).post( (req,res) => {
        const user = req.body.username;
        Student.findOne({username : user}).then((foundUser) => {
            if(req.body.password === foundUser.password) res.sendFile(path.resolve() + '/public/files/index.html');
            else res.send("<h1>Invalid password! <a href = '/login.html' >Try again</a> </h1>")
        }).catch((err) => console.log(err));
    })
app.route('/index.html')
    .get((req,res) => res.sendFile(path.resolve() + '/public/files/index.html'));

app.route('/questions')
    .post((req,res)=> {
        const newformDetails =  new FormDetails({
            name : req.body.name,
            email : req.body.email,
            clgName : req.body.clgName,
            number : req.body.number,
            subject : req.body.subject
        })
        newformDetails.save();
        FormDetails.findOne({name : req.body.name}).then((found) => {
            if(req.body.subject === 'java') {
                res.render('question.ejs', {subject : javaQuestions , title : "java",id : found._id });
            }else if(req.body.subject === 'c++') {
                res.render('question.ejs', {subject : cppQuestions , title : "cpp" ,id : found._id});
            }
            else if(req.body.subject === 'c') {
                res.render('question.ejs', {subject : cQuestions , title : "c" ,id : found._id});
            }else {
                res.render('question.ejs', {subject : dbmsQuestions ,id : found._id });
            }
        }).catch((err) => console.log(err));

       
    })

app.route('/questions/:id')
.post((req,res) => {
        let solution = [];
        if(req.params.title === 'java') {
            solution = javaQuestions;
        }else if(req.params.title === 'c++') {
            solution = cppQuestions;
        }
        else if(req.params.title === 'c') {
            solution = cQuestions;
        }else {
            solution = dbmsQuestions;
        }
        let result = calculateResult(req.body,solution);
        // FormDetails.findByIdAndUpdate(req.params.id, {marks : result}).then((foundUser) => console.log("marks update" + foundUser.marks)).catch((err) => console.log(err));
        FormDetails.findById(req.params.id).then((found) => console.log(found)).catch((err) => console.log(err));
        res.render('result', {title : req.params.title , marks : result});
    })

app.route('/admin')
    .get((req,res) => {
        res.sendFile(path.resolve() + '/public/files/adminSignup.html');
    })
    .post((req,res) => {
        console.log(req.body);
        const newTeacher = new Teacher({
       id : req.body.id,
       email : req.body.email,
       password  : req.body.password
   }) 
   newTeacher.save();

   res.sendFile("<h1>Signup Successfull for Teacher <a href = '/adminLogin' >Click here to login!</a> </h1>");
    })

app.route('/adminLogin')
    .get((req,res) => {
    res.sendFile(path.resolve() + '/public/files/adminLogin.html')
})
.post((req,res) => {
        const teacherId = req.body.id;
        Teacher.findOne({id : teacherId}).then((foundTeacher) => {
            if(req.body.password === foundTeacher.password) {
                res.redirect('/adminUser');
            }else {
                res.send("<h1>Invalid password! <a href = '/adminLogin' >Try again</a> </h1>");
            }
        })
})

app.route(('/adminUser'))
    .get((req,res) => {
        res.sendFile(path.resolve() + '/public/files/admin.html');
    })
    .post(upload.single('file') , (req,res) => {
      console.log(req.body);
      console.log(req.file.originalname);
      res.send('hi');
    })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server running'));


function calculateResult(userSol, solution) {
    
    let userSolArr = Object.values(userSol);
    let count =0;
    for(let i =0;i<solution.length;i++) {
        let userAns = String.fromCharCode(97 + parseInt(userSolArr[i])-1);
        
        if(userAns == solution[i].answer) count++;
    }
    return count;
}