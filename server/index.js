const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const{login} = require('./handler/login'); 
const{getAllLoginUser} = require('./handler/getAllLoginUser');
const{updateLogin} = require('./handler/updateLogin');
const{postJob} = require('./handler/postJob');
const{getJobs} = require('./handler/getJobs');
const{deleteJob} = require('./handler/deleteJob');
const{updateJob} = require('./handler/updateJob');
const{getJobById} = require('./handler/getJobById');
const{getAllUserJobs} = require('./handler/getAllUserJobs');
const{getUserJobById} = require('./handler/getUserJobById');
const{getTotalCount} = require('./handler/getTotalCount');
const{getCountOfJobByUser} = require('./handler/getCountOfJobByUser');

const port = 8000;
express()
.use(express.json())
.use(helmet())
.use(morgan('tiny'))
.use(cors())
.use("/", router)



.get('/hello', (req, res) => {
  res.status(200).json({status:200, message:"Hello World..."})
})
// login endpoints
.post('/api/login', login) 
.get('/api/login', getAllLoginUser)
.patch('/api/login', updateLogin)

// job post endpoints(admin)
.post('/api/jobpost', postJob)
.get('/api/jobs/:loginemail', getJobs)
.delete('/api/jobs/:_id', deleteJob)
.patch('/api/job/:_id', updateJob)
.get('/api/job/:_id', getJobById)
.get('/api/totalcount',getTotalCount)
.get('/api/countbyuser',getCountOfJobByUser)

//user endpoints
.get('/api/jobs', getAllUserJobs)
.get('/api/userjob/:_id', getUserJobById)



.listen(port, () => {
}); 

