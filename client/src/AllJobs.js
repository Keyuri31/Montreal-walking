import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Map from "./Map";
import Footer from "./Footer";
import Spinner from "./Spinner";
import { Wrapper } from "@googlemaps/react-wrapper";
import ScrollButton from "./ScrollButton";

//get API key of google map
const api_key = process.env.REACT_APP_GOOGLE_MAP_API_KEY; 

//returns all jobs from database
const AllJobs = () => {
    const [alljobs, setAlljobs] = useState(null);
    const navigate = useNavigate();
    const center = { lat: 45.508888, lng: -73.561668 }; //coordinates of Montreal to view map
    const zoom = 4;
    
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

      //function to render google map
      const render = (status) => {
        return <h1>{status}</h1>;
      };

      //function to navigate to job details page
      const handleClick1 = (e,id)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate(`/userjob/${id}`);
        
    }
    return (
        <>
        {!alljobs ?  <Spinner/>
        : <StyledDiv>
                    <Header/>
                    <Main>
                        <Container>
                        {alljobs.map((item,index) => {
                        return(
                        <Div key={index+1} >
                            <p><span>Company Name:</span> {item.companyName}</p>
                            <p><span>Address:</span> {item.address}</p>
                            <p>
                                <span>Email:</span> 
                                <a href={`mailto:${item.email}`}> {item.email}</a>
                            </p>
                            <hr></hr>
                            <p><span>Job Title:</span> {item.jobTitle}</p>
                            {/* <p><span>Detail:</span> {item.description}</p> */}
                            <p><span>Salary:</span> {item.salary}</p>
                            <button onClick={(e)=>{handleClick1(e,item._id)}}>More Info</button>
                        </Div>
                        )})}
                        </Container>
                        {/* display map */}
                        <Container>  
                            <Div1>
                              <Wrapper apiKey={api_key} render={render} >
                                <Map zoom={zoom} center={center} alljobs={alljobs} setAlljobs={setAlljobs}/>
                            </Wrapper>
                            
                            </Div1>
                        </Container>
                        <ScrollButton/>
                    </Main>
                    <Footer/>
        </StyledDiv>
        }
        </>
    );
}
const Div1 = styled.div`
    border-radius:12px;
    background:white;
    padding:2px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
 `;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    padding:20px;
`;
const Main= styled.div`
    display:flex;
    flex-direction:row;
    width:100%;

    
`;
const StyledDiv = styled.div`
    width:100%;
    // overflow-y: scroll;
`;
 const Div= styled.div`
 background:white;
 padding:20px;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-content:center;
 border-radius:12px;
 margin:5px 0;

    span{
      font-size:15px;
      font-weight:600;
  }
  p{
      font-size:15px;
      font-weight:500;
  }
  hr{
      margin:5px 0;
      background-color:#ff8000;
  }

  button{
    display:flex;
    justify-content: center;
    background-color: #ff8000;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 150px;
    color: white;
    font-weight:bold;
    font-size:15px;
    font-family: 'Times New Roman', Times, serif;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    letter-spacing: 5px;
    margin-top: 20px;
    margin-bottom:10px;
    &:hover:enabled {
        cursor: pointer;
        transition: all 0.5s ease;
        transform: scale(1.05);
        background-color: white;
        color:#400080;
        font-weignt:bold;
    }
    
  }
 `;
export default AllJobs;