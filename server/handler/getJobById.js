
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
  
const getJobById = async(req, res) => {
    const {_id} = req.params;
  console.log("id", _id)
    try{
      await client.connect();
      const db = client.db("final-project");
    
    //   const findone = await db.collection("jobs").findOne({loginemail:loginemail});
    //   console.log(findone)


            const onejob = await db.collection("jobs").findOne({_id:_id});
            // console.log(alljobs)
            res.status(200).json({ status: 200, data:onejob})
       

  } catch(err){
      res.status(400).json({status:404, message:"Something went wrong!!!"})
      console.log("catch error",err.stack);
  }
  finally {
      client.close();
  } 
};

module.exports = { getJobById };