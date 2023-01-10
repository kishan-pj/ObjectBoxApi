const mongoose =  require("mongoose")


const BatchSchema =  mongoose.Schema({
    batchname  : {
        type : String,
        required : [true,"Batch Name is Required"]
    }
})

module.exports = mongoose.model("Batch",BatchSchema)