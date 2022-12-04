
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
  
const updateLogin = async(req, res) => {
    const {user,type} = req.body;
    const query = {"user.email":user.email};
            const newVlaues = { $set: {"type":type}}
    try{
      await client.connect();
      const db = client.db("final-project");
    
       
            const findone = await db.collection("login").findOne({"user.email":user.email});//find the user with loginemail 
            if(findone === null){
                res.status(400).json({status:404, message:"email doesn't match"}) //user does not exist
            }
          else{
            
            const update = await db.collection("login").updateOne(query, newVlaues); // if user exist then update its type
            res.status(200).json({ status: 200, data:update})
          }

  } catch(err){
      res.status(400).json({status:404, message:"Something went wrong!!!"})
      console.log("catch error",err.stack);
  }
  finally {
      client.close();
  } 
};

module.exports = { updateLogin };