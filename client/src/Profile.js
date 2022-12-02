import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Logout from "./Logout";
import UpdateForm from "./UpdateForm";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const[state, setState] = useState("");
  // const userEmail = user.email;
  // const currentloginemail = user.email;
  const{updateId} = useParams();
  const navigate = useNavigate();
console.log("user", user)
console.log("authne", isAuthenticated)

  useEffect(()=>{
    isAuthenticated && 
    console.log("userEmail",user.email)
    fetch (`/api/jobs/${user.email}`)
      .then(res=> res.json())
      .then((data)=>{
        console.log(data.data);
        setState(data.data)
      })
  },[isAuthenticated])

  const handleSubmit = ((e,id) =>{
    e.preventDefault();
    fetch (`/api/jobs/${id}`,{
      method: 'DELETE',
      body: id,
  })
      .then(res=> res.json())
      .then((data)=>{
            window.alert("Successfully deleted")
      })
  })

  const handleSubmit1 = ((e,id,data) =>{
    e.preventDefault();
    console.log("updateid", id)
    console.log("updatedata", data)

      // 

    // navigate('/form');
    // fetch(`/api/job/${updateId}`, {
    //   method: "PATCH",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //       console.log("datattaaa",data)
    //   })
    //   .catch((err) => console.log(err));
  
  })
  // console.log("state", state)
  return (
     <>
    {isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <table border="2">
          <tr>
            <th>Sr No.</th>
            <th>ID</th>
            <th>Company Name</th>
            <th>Address</th>
            <th>Postal Code</th>
            <th>Contact Number</th>
            <th>Company Email</th>
            <th>Job Title</th>
            <th>Job Description</th>
            <th>Job Type</th>
            <th>Salary</th>
            <th>Benefits</th>
            <th>Date</th>
            <th>How to apply</th>
            <th></th>
            <th></th>
          </tr>
        
        {!state ? 
        <Spinner/>
        // <h1>Loading...</h1> 
        : 
          state && state.map((item,index) => {
            return(
            <>
            {console.log("item", item)}
             {/* {console.log("company",item.companyName)} */}
              {/* <p>Company name: {item.companyName}</p> */}
              <tr>
                <td key={index+1}>{index+1}</td>
                <td>{item._id}</td>
                <td>{item.companyName}</td>
                <td>{item.address}</td>
                <td>{item.postalCode}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td>{item.jobTitle}</td>
                <td>{item.description}</td>
                <td><span>{item.jobType.fulltime}</span><br></br><span>{item.jobType.permanent}</span><br></br><span>{item.jobType.parttime}</span><br></br><span>{item.jobType.temporary}</span></td>
                {/* <td>{if(item.fulltime === item.fulltime){return item.fulltime}}</td> */}
                <td>{item.salary}</td>
                <td><span>{item.benefits.weekend}</span><br></br><span>{item.benefits.overtime}</span><br></br><span>{item.benefits.extrahours}</span></td>
                <td>{item.date}</td>
                <td>{item.howToApply}</td>
                <td><Link to={`/updateform/${item._id}`}>UPDATE</Link></td>
                {/* <td><button onClick={<UpdateForm id={item._id} data={item}/>}>UPDATE</button></td> */}
                {/* <td><button onClick={e=>handleSubmit1(e,item._id,item)}>UPDATE</button></td> */}
                {/* <td>DELETE</td> */}
                <td><button onClick={e=>handleSubmit(e,item._id)}>DELETE</button></td>
              </tr>
            </>
            )
          })
        }
        </table>
        
        </div>
    )}
    </>
  )
}

export default Profile;