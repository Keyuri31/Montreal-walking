const { MongoClient } = require("mongodb");

//access the database
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(MONGO_URI, options);
  
const deleteJob = async(req, res) => {
    const {_id} = req.params;
  
    try{
      await client.connect(); //connect to db
      const db = client.db("final-project"); //connect to my project
    
      const findone = await db.collection("jobs").findOne({_id:_id}); //finding the jobs with id 
      
        const deleteone = await db.collection("jobs").deleteOne({_id:_id}) // deleting the job with specified id
            res.status(200).json({ status: 200, data:deleteone})
       

  } catch(err){
      res.status(400).json({status:404, message:"Something went wrong!!!"})
      console.log("catch error",err.stack);
  }
  finally {
      client.close();
  } 
};

module.exports = { deleteJob };