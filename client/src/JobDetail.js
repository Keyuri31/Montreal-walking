import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const JobDetail = () => {
    const {_id}  = useParams();
    console.log("params id", _id)
    const [state, setState] = useState(null);
     
    useEffect(()=>{
        fetch (`/api/userjob/${_id}`)
          .then(res=> res.json())
          .then(data=> {
            if(data.status === 400 || DataTransfer.status === 500){
            //   navigate('/error');
                throw new Error(data.message);
            }   
            else{
            console.log(data)
            setState(data); 
            }
        }
            )
            .catch((error) =>{
                window.alert(error);
            //    navigate('/error');
             })
         
      }, [])

      const handleSubmit = ((e, state) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("handlesubmit state data", state)
        // fetch("/api/myjob", {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(state)
        // })
        // .then(res => res.json())
        // .then((data) => {
        //     console.log("data from state",data)
        // })
        // .catch((error) => {
        //     window.alert(error);
        // })

      })

    return (
        <div>
            {console.log("state", state)}
            <Header/>
            <Sidebar/>
            {state &&
            <Body>
                <Wrapper>   
                    <div>
                            <h3>Company Details</h3>
                            <p>Company Name: {state.data.companyName}</p>
                            <p>Address: {state.data.address}</p>
                            <p>Postal Code: {state.data.postalCode}</p>
                            <p>Email: {state.data.email}</p>
                            <p>Contact No.: {state.data.number}</p>
                            <button onClick={e => handleSubmit(e, state)}>LIKE</button>
                            </div>
                            <div> 
                                <h3>Job Details:</h3>
                            <p>Job Title: {state.data.jobTitle}</p>
                            <p>Description: {state.data.description}</p>
                            <p>Salary: {state.data.salary}</p>
                            <p>Job Type:</p> 
                                <span>{state.data.jobType.fulltime}
                                    {/* {if(state.data.jobType.fulltime === "fulltime") return "Fulltime"}   */}
                                    </span>
                                <span> {state.data.jobType.parttime}</span>
                                <span>{state.data.jobType.temporary}</span>
                                <span>{state.data.jobType.permanent}</span>
                                
                            <p>Benefits: </p>
                                <span>{state.data.benefits.weekend}</span>
                                <span>{state.data.benefits.overtime}</span>
                                <span>{state.data.benefits.extrahours}</span>

                            <p>How to Apply: {state.data.howToApply}</p>
                            </div> 
                            </Wrapper>
                            </Body>
                        }
            <Footer/>
                        </div>
    );
}
const Wrapper = styled.div`
display: flex;
flex-direction:column;
box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius: 20px;
padding:15px;
background:white;
margin:20px 0 20px 0;
`;

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
   
`;
export default JobDetail;