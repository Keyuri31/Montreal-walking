
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
    console.log(req.body)
    const query = {"user.email":user.email};
            console.log("query",query)
            const newVlaues = { $set: {"type":type}}
            console.log("new",newVlaues)
    try{
      await client.connect();
      const db = client.db("final-project");
    
       
            const findone = await db.collection("login").findOne({"user.email":user.email});
            // console.log(findone)

            if(findone === null){
                res.status(400).json({status:404, message:"email doesn't match"})
            }
          else{
            
            const update = await db.collection("login").updateOne(query, newVlaues); 
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