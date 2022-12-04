
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
  
const getJobs = async(req, res) => {
    const {loginemail} = req.params;

    try{
      await client.connect();
      const db = client.db("final-project");
    
            const alljobs = await db.collection("jobs").find({loginemail:loginemail}).toArray();
            const total = await db.collection("jobs").find({loginemail:loginemail}).count();
            res.status(200).json({ status: 200, data:alljobs,total})
       

  } catch(err){
      res.status(400).json({status:404, message:"Something went wrong!!!"})
      console.log("catch error",err.stack);
  }
  finally {
      client.close();
  } 
};

module.exports = { getJobs };