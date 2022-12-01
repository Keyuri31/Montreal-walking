
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
  
const login = async(req, res) => {
    console.log(req.body)
    const {user,type} = req.body;
    console.log(user.email)
    console.log(type)
    const query = {"user.email":user.email};
    console.log("query",query)
    const newVlaues = { $set: {"type":type}}
    console.log("new",newVlaues)
    
    try{
      await client.connect();
      const db = client.db("final-project");
    
            const findone = await db.collection("login").findOne({"user.email":user.email});
            console.log(findone)
            if(findone != null){
              const update = await db.collection("login").updateOne(query, newVlaues); 
            return res.status(200).json({ status: 200, data:update})
            }

            if(findone === null){
              const loginDetails = await db.collection("login").insertOne(req.body); 
             return res.status(200).json({ status: 200, data:  loginDetails})
            }
              return res.status(400).json({status:404, message:"user already exist"})

  } catch(err){
      res.status(400).json({status:404, message:"Something went wrong!!!"})
      console.log("catch error",err.stack);
  }
  finally {
      client.close();
  } 
};

module.exports = { login };