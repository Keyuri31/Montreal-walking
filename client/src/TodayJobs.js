import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import TodayMap from "./TodayMap";
import Footer from "./Footer";
import Spinner from "./Spinner";
import { Wrapper } from "@googlemaps/react-wrapper";
import ScrollButton from "./ScrollButton";

const api_key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;  //get google map API key from .env

//display only the jobs that are posted on the current day
const TodayJobs = () => {
    const myArray = [];
    const [today, setToday] = useState(null);
    const navigate = useNavigate();
    const center = { lat: 45.508888, lng: -73.561668 };
    const zoom = 4;
    let todaydata; // to collect all data
    const date = new Date();
    const year = date.getFullYear(); //2022
    const month = String(date.getMonth() + 1).padStart(2, '0'); //12
    const day = String(date.getDate()).padStart(2, '0'); //05
    const currentdate = [year,month,day].join('-'); //2022-12-05

    //fetch all jobs from db
    useEffect(()=>{
        fetch (`/api/jobs`)
          .then(res=> res.json())
          .then(data=> {
            if(data.status === 400 || data.status === 500){
              throw new Error(data.message);
          }   
          else{
            todaydata= data.data;
            todaydata.map((item) => {
                if(item.date === currentdate){ // match the date of the job with the current day
                    myArray.push(item); //push the jobs that contains today's date
                }
            })
            setToday([myArray]);
          }})
      }, [])

      const render = (status) => {
        return <h1>{status}</h1>;
      };

      //function to navigate to the job detail page
      const handleClick1 = (e,id)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate(`/userjob/${id}`);
        
    }
    return (
        <>
        {!today ? <Spinner/>
        : <StyledDiv>
                    <Header/>
                    <Main>
                        <Container>
                        {today.map((item,index) => {
                        return(
                        <Div key={index+1}>
                            <p><span>Company Name:</span> {item.companyName}</p>
                            <p><span>Address:</span> {item.address}</p>
                            <hr></hr>
                            <p><span>Job Title:</span> {item.jobTitle}</p>
                            <p><span>Salary:</span> {item.salary}</p>
                            <button onClick={(e)=>{handleClick1(e,item._id)}}>More Info</button>
                        </Div>
                        )
                        })}
                        </Container>
                        <Container>
                            <Div1> 
                              <Wrapper apiKey={api_key} render={render} >
                                <TodayMap zoom={zoom} center={center} today={today} setToday={setToday}/>
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
 `;
 const Div1 = styled.div`
    border-radius:12px;
    background:white;
    padding:2px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
 `;
export default TodayJobs;