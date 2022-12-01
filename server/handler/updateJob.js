const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(MONGO_URI, options);

const updateJob = async (req, res) => {
  const {_id} = req.params;
  console.log(_id);
  console.log(req.body);
  const {parttime,fulltime,temporary,permanent,weekend,overtime,extrahours,...rest} = req.body
  const newjob = {
   jobType:{fulltime,parttime,temporary,permanent},
   benefits:{weekend,overtime,extrahours},
    ...rest,
 };
 console.log("newJob",newjob)
  try {
    await client.connect();
    const db = client.db("final-project");

    const findone = await db.collection("jobs").findOne({ _id });
    //  res.status(200).json({status: 200, message: "Successful", dbResponse: findone});
    const query = {"_id":_id};
    console.log("query",query)
    const newValues = { $set: newjob}
    console.log("new",newValues)
    const updatedJob = await db.collection("jobs").updateOne(query, newValues);
    console.log(updatedJob)
    return res.status(200).json({status: 200, message: "Update Successful", dbResponse: updatedJob});

  } catch (err) {
    client.close();
    console.log(err);
    return res.status(500).json({status: 500,message: "Error",bodyReceived: req.body,paramsReceived: req.params,
    });
  }
};

module.exports = { updateJob };