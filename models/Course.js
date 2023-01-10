const mongoose = require("mongoose")


const CourseSchema = mongoose.Schema({
    coursename : {
        type : String,
        required : [true,"Course Name is required"]
    }
})

module.exports =mongoose.model("Course",CourseSchema)