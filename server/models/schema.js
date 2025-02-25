import mongoose from "mongoose"


// Question schema
 const questionSchema =  new mongoose.Schema({
    course:{ type: String, required: true, trim: true,  },
    question:{ type: String, required: true, trim: true,  },
    option1:{ type: String, required: true, trim: true,  },
    option2:{ type: String, required: true, trim: true,  },
    option3:{ type: String, required: true, trim: true,  },
    option4:{ type: String, required: true, trim: true,  },
    answer :{ type: Number, required: true }
 })

 const Question =mongoose.models.Question ||  mongoose.model("Question", questionSchema)



// Student Schema
 const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    rollNumber: { type: String, required: true, trim: true , unique:true, index:true},
    image: { type: String, required: true, trim: true },
    certificate: { type: String, default: '', trim: true },
    course: { type: String, required: true, trim: true },
    isExamComplate: { type:Boolean , required:false , default: false},
    examStatus:{ type: String, default: ''},
    result: { type: Array, default: [], required: false},
    certificateIssueDate: { type:Date, default: null},
 })


 const Student = mongoose.models.Student ||  mongoose.model("Student", studentSchema)

 export {Question, Student}