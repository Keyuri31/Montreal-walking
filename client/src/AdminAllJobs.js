import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import ScrollButton from "./ScrollButton";
import Header1 from "./Header1";
import Footer1 from "./Footer1";

const AdminAllJobs = () => {
    const [alljobs, setAlljobs] = useState(null);
    const {isAuthenticated} = useAuth0();

     //fetch all jobs
     useEffect(()=>{
        fetch (`/api/jobs`)
          .then(res=> res.json())
          .then(data=> {
            if(data.status === 400 || data.status === 500){
              throw new Error(data.message);
          }   
          else{
            setAlljobs(data.data); 
          }  
          })
      }, [])

    return (
        <>
        <Header1 />
        {isAuthenticated && (
      <Div>
            <Title>All jobs posted on Montreal Walking</Title>
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
        
        {!alljobs ? 
        <Spinner/>
        // <h1>Loading...</h1> 
        : 
          alljobs && alljobs.map((item,index) => {
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
              </tr>
            </>
            )
          })
        }
        </table>
        
        </Div>
    )}
    <ScrollButton />
    <Footer1 />
        </>
    );
}
const Div = styled.div`
    table{
        background-color:white;
    }
`;
const Title = styled.h2`
font-size:38px;
font-family:Times New Roman;
text-align:center;
color:#480987;
border:5px solid #ff8000;
width:50%;
margin:0 25%;;
`;
export default AdminAllJobs;