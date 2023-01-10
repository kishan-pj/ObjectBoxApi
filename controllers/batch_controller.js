const Batch = require("../models/Batch")

const getallbatch = ((req,res,next)=>{
    Batch.find().then((batch)=>{
        res.json(batch)
    })
    .catch(
        next
    )

} )

const postnewbatch = ((req,res,next)=>{
    
    Batch.findOne({batchname : req.body.batchname})
    .then((batch)=>{

        if(batch != null){

            let err =  new Error(`this ${req.body.batchname}batch already exists`)
            res.status(400)
            return next(err)
        }
        else{
            batch =  new Batch(req.body)
            batch.save().then((batch)=>{
             res.json(batch)
            })
            .catch(next)
         }

    })
    .catch(next)

})

const deleteallbatch =((req,res,next)=>{
    Batch.deleteMany().then((reply)=>{
        res.json(reply)
    }).catch(next)

})

const getbatchbyId =((req,res,next)=>{
    Batch.findById(req.params.batchid).then((batch)=>{
        res.json(batch)
    }).catch(next)

})

const editbatchbyId =((req,res,next)=>{
    Batch.findByIdAndUpdate(req.params.batchid,{$set:req.body},{new:true}).then((batch)=>{
        res.json(batch)
    }).catch(next)

})

const deletebyId = ((req,res,next)=>{
    Batch.findByIdAndRemove(req.params.batchid).then((reply)=>{
        res.json(reply)
    }).catch(next)
})

module.exports = {getallbatch,postnewbatch,deleteallbatch,getbatchbyId,editbatchbyId,deletebyId}