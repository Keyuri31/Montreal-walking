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
// const{getTodayJobs} = require('./handler/getTodayJobs');
const{getUserJobById} = require('./handler/getUserJobById');
// console.log("usernme", process.env.USERNAME)
// console.log("password", process.env.PASSWORD)

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.USERNAME,
//     pass: process.env.PASSWORD,
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// })
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

//user endpoints
.get('/api/jobs', getAllUserJobs)
// .get('/api/todayjobs', getTodayJobs)
.get('/api/userjob/:_id', getUserJobById)



// .post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message; 
//   const mail = {
//     from: name,
//     to: "***************@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// })

.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}); 

