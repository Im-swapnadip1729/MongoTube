const mongoose = require ('mongoose'); // imporet mpngoose

const Schema = mongoose.Schema; // creating schema obj.

// defaining schema 
const StudentSchema = new Schema({ 
    name: String
});

// defaining document model name and obj.
const Student = mongoose.model("student", StudentSchema);

//export
module.exports = Student;
