const mongoose = require('mongoose');

const connectDB = async() =>{
  try{
    const conn = await mongoose.connect(process.env.DB_URI,{
      useUnifiedTopology:true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false 
    })
    console.log(`mongo database is connected!!! ${conn.connection.host} `)
  }catch(err){
      console.error(`Error: ${err} `)
  }
};

module.exports = connectDB