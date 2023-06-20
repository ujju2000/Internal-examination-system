import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema(
    {
        id : {type : String, required :true, max : 50},
        email : {type : String , required : true,},
        password : {type : String , min : 6}
    }
);
const Teacher = new mongoose.model('teacher' , teacherSchema);
export default Teacher;