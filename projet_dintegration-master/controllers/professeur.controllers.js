const Professeur = require("../models/Professeur");

exports.postProfesseur = async (req,res)=>{
    try{ 
    const newProfesseur = new Professeur({...req.body});
    const response = await newProfesseur.save();
    res.send({response: response, message: 'Professeur is saved' });
    }catch(error){
    console.log(error)
    res.status(500).send({message: "can not save it"})
    }
}

exports.GetAllProfesseur = async (req,res)=>{
    try{
    const result= await Professeur.find();
    res.send({response: result, message: `getting Professeur successfully `})
    } catch(error){
    res.status(500).send({message: `can not get Professeur `})
    }
}


exports.GetProfesseurById = async (req,res)=>{
    try {
    const result= await Professeur.findOne({_id:req.params.id});
    res.send({response: result, message: 'getting Professeur successfully'})
    } catch (error) {
    res.status(500).send({message: `can not get Professeur with id ${req.params.id} `})
    }
}

exports.deleteProfesseur = async (req,res)=>{
    try {
    const result= await Professeur.deleteOne({_id:req.params.id});
    result.n
    ? res.send({response:"user delete"})
    : res.send({message: `there is no Professeur with id: ${req.params.id} `})
    } catch (error) {
    res.status(500).send({message: `there is no id`})
    }
}

exports.updateProfesseur = async (req,res)=>{
    try {
    const result= await Professeur.updateOne(
    {_id:req.params.id},
    {$set:{...req.body}}
    );
    // console.log(result) ;
    result.nModified
    ? res.send({message:"Professeur updated"})
    : res.send({message:"Professeur already updated"})
    console.log(result.nModified);  
    } catch (error) {
    res.status(500).send({message: `not updated : id ${req.params.id} not  found`})
    }
}