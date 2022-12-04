
"use strict";

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const opencage = require('opencage-api-client');
//access the database
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(MONGO_URI, options);
  
const postJob = async(req, res) => {
    const {email, loginemail, address} = req.body;
    const {parttime,fulltime,temporary,permanent,weekend,overtime,extrahours,...rest} = req.body
    const requestObj = {
     key: process.env.OPENCAGE_API_KEY,
     q: address,
   };

    const newjob = {
     _id: uuidv4(),
     jobType:{fulltime,parttime,temporary,permanent},
     benefits:{weekend,overtime,extrahours},

     geometry: await opencage
     .geocode(requestObj)
     .then((data) => {
     return data.results[0].geometry;
     } ),
     ...rest
   };
   
    try{
      await client.connect();
      const db = client.db("final-project");
    
        if(!email.includes("@"))
             return res.status(400).json({status:400, message: "Invalid email address@"})

        if(!email.includes("."))
             return res.status(400).json({status:400, message: "Invalid email address."})

        if(!loginemail.includes("@"))
             return res.status(400).json({status:400, message: "Invalid email address@"})

        if(!loginemail.includes("."))
             return res.status(400).json({status:400, message: "Invalid email address."})


             
            const jobpost = await db.collection("jobs").insertOne(newjob); 
             return res.status(200).json({ status: 200, data:  jobpost})
            
  } catch(err){
      res.status(400).json({status:404, message:"Something went wrong!!!"})
      console.log("catch error",err.stack);
  }
  finally {
      client.close();
  } 
};

module.exports = { postJob };