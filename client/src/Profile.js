import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Footer1 from "./Footer1";
import Header1 from "./Header1";
import ScrollButton from "./ScrollButton";
import Spinner from "./Spinner";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated} = useAuth0();
  const[state, setState] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    isAuthenticated && 
    fetch (`/api/jobs/${user.email}`)
      .then(res=> res.json())
      .then((data)=>{
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
  const handleSubmit1 = ((e,id) => {
    e.preventDefault();
    navigate(`/updateform/${id}`);
  })
  return (
     <>
     <Header1/>
    {isAuthenticated && (
      <Div>
        <User>
          <img src={user.picture} alt={user.name} />
          <Title>Username: <Span>{user.name}</Span></Title>
          <Title>Email: <Span>{user.email}</Span></Title>
        </User>
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
        : 
          state && state.map((item,index) => {
            return(
            <>
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
                <td>{item.salary}</td>
                <td><span>{item.benefits.weekend}</span><br></br><span>{item.benefits.overtime}</span><br></br><span>{item.benefits.extrahours}</span></td>
                <td>{item.date}</td>
                <td>{item.howToApply}</td>
                <td><button onClick={e=>handleSubmit1(e,item._id)}>UPDATE</button></td>
                <td><button onClick={e=>handleSubmit(e,item._id)}>DELETE</button></td>
              </tr>
            </>
            )
          })
        }
        </table>
        
        </Div>
    )}
    <ScrollButton/>
    <Footer1/>
    </>
  )
}
const Div = styled.div`
button{
  display:flex;
  justify-content: center;
  background-color: #ff8000;
  border: none;
  padding: 5px;
  border-radius: 5px;
  width: 70px;
  color: white;
  font-weight:bold;
  font-size:15px;
  font-family: 'Times New Roman';
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 1px 0px;
  // letter-spacing: 5px;
  margin-top: 40px;
  margin-bottom:10px;
  &:hover:enabled {
      cursor: pointer;
      background-color: white;
      color:#400080;
      font-weight:bold;
  } 
}
`;
const Title = styled.p`
  font-size:20px;
`;
const Span = styled.span`
  font-style:italic;
`;
const User = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;
export default Profile;