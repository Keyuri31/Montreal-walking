import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import ScrollButton from "./ScrollButton";

//function to display the details of the job when clicked from the AllJobs component or the TodaysJobs component
const JobDetail = () => {
    const {_id}  = useParams();
    const [state, setState] = useState(null);
     
    //fetch job with specified id and display its detail in the component
    useEffect(()=>{
        fetch (`/api/userjob/${_id}`)
          .then(res=> res.json())
          .then(data=> {
            if(data.status === 400 || DataTransfer.status === 500){
                throw new Error(data.message);
            }   
            else{
            setState(data); 
            }}
            )
            .catch((error) =>{
                window.alert(error);
             })
      },[])

    return (
        <div>
            <Header/>
            {state &&
            <div>
            <Body>
                <Wrapper>   
                    <div>
                            <Title>Company Details</Title>
                            <p><span>Company Name:</span> {state.data.companyName}</p>
                            <p><span>Address:</span> {state.data.address}</p>
                            <p><span>Email:</span> <a href="">{state.data.email}</a></p>
                            <p><span>Contact No.:</span> <a href={`tel:${state.data.number}`}>{state.data.number}</a></p>
                            {/* <button onClick={e => handleSubmit(e, state)}>LIKE</button> */}
                            </div>
                            <div> 
                                <Title>Job Details:</Title>
                            <p><span>Job Title:</span> {state.data.jobTitle}</p>
                            <p><span>Description:</span> {state.data.description}</p>
                            <p><span>Salary:</span> {state.data.salary}</p>
                            <span>Job Type: </span>
                                <p>{state.data.jobType.fulltime}</p>
                                <p>{state.data.jobType.parttime}</p>
                                <p>{state.data.jobType.permanent}</p>
                                <p>{state.data.jobType.temporary}</p>
                                
                            <span>Benefits: </span>
                                <p>{state.data.benefits.weekend}</p>
                                <p>{state.data.benefits.overtime}</p>
                                <p>{state.data.benefits.extrahours}</p>

                            <p><span>How to Apply:</span> {state.data.howToApply}</p>

                    </div> 
                </Wrapper>          
            </Body>
             </div>               
            }
            <ScrollButton/>
            <Footer/>
                        </div>
    );
}
const Title = styled.h3`
    font-size:25px;
    text-align:center;
    font-weight:bold;
    text-decoration:underline;
`;
const Wrapper = styled.div`
display: flex;
flex-direction:column;
box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius: 20px;
padding:25px 40px;
background:white;
margin:20px 0 20px 0;
text-align:justify;
line-height:30px;

    span{
        font-size:18px;
        font-weight:600;
    }
    p{
        font-size:16px;
        font-weight:500;

        a{
            text-decoration:underline;
        }
    }
`;

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    width:70%;
    margin:20px 250px;
    // height:80vh;
`;
export default JobDetail;