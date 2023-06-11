import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ejs from 'ejs';
import path from 'path';

import {javaQuestions, cppQuestions,cQuestions,dbmsQuestions} from './info.js';


const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://ujjutarika35:Test123@cluster0.ublufxm.mongodb.net/studentDB?retryWrites=true&w=majority');


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
        if(req.body.subject === 'java') {
            res.render('question.ejs', {subject : javaQuestions , title : "java"});
        }else if(req.body.subject === 'c++') {
            res.render('question.ejs', {subject : cppQuestions , title : "cpp"});
        }
        else if(req.body.subject === 'c') {
            res.render('question.ejs', {subject : cQuestions , title : "c"});
        }else {
            res.render('question.ejs', {subject : dbmsQuestions , title : "dbms"});
        }
    })

app.route('/questions/:title')
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
    
        res.render('result', {title : req.params.title , marks : result});
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