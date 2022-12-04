
"use strict";

const { MongoClient } = require("mongodb");

//access the database
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(MONGO_URI, options);
  
const getAllLoginUser = async(req, res) => {
  
    try{
      await client.connect();
      const db = client.db("final-project");
    
       
            const allUser = await db.collection("login").find().toArray();
            
            res.status(200).json({ status: 200, data:allUser})
       

  } catch(err){
      res.status(400).json({status:404, message:"Something went wrong!!!"})
      console.log("catch error",err.stack);
  }
  finally {
      client.close();
  } 
};

module.exports = { getAllLoginUser };