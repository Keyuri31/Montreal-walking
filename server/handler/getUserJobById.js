
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
  //get the user with the specified id
const getUserJobById = async(req, res) => {
    const {_id} = req.params;
 
    try{
      await client.connect();
      const db = client.db("final-project");
 
            const onejob = await db.collection("jobs").findOne({_id:_id});
            res.status(200).json({ status: 200, data:onejob})
       

  } catch(err){
      res.status(400).json({status:404, message:"Something went wrong!!!"})
      console.log("catch error",err.stack);
  }
  finally {
      client.close();
  } 
};

module.exports = { getUserJobById };