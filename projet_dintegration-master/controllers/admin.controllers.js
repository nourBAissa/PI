const Admin = require("../models/Admin");

exports.postAdmin = async (req,res)=>{
    try{ 
    const newAdmin = new Admin({...req.body});
    const response = await newAdmin.save();
    res.send({response: response, message: 'Admin is saved' });
    }catch(error){
    console.log(error)
    res.status(500).send({message: "can not save it"})
    }
}

exports.GetAllAdmin = async (req,res)=>{
    try{
    const result= await Admin.find();
    res.send({response: result, message: `getting Admin successfully `})
    } catch(error){
    res.status(500).send({message: `can not get Admin `})
    }
}


exports.GetAdminById = async (req,res)=>{
    try {
    const result= await Admin.findOne({_id:req.params.id});
    res.send({response: result, message: 'getting Admin successfully'})
    } catch (error) {
    res.status(500).send({message: `can not get Admin with id ${req.params.id} `})
    }
}