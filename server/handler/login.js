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
    const {user,type} = req.body;
    const query = {"user.email":user.email};
    const newVlaues = { $set: {"type":type}}
    
    try{
      await client.connect();
      const db = client.db("final-project");
          // find the login user
            const findone = await db.collection("login").findOne({"user.email":user.email});
            if(findone != null){
              const update = await db.collection("login").updateOne(query, newVlaues); // if the user is already exist just update its type
            return res.status(200).json({ status: 200, data:update})
            }

            if(findone === null){
              const loginDetails = await db.collection("login").insertOne(req.body); //if the user does not exist then add the user
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