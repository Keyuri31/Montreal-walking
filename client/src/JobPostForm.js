import styled from "styled-components";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Header1 from "./Header1";
import ScrollButton from "./ScrollButton";
import Footer1 from "./Footer1";

const JobPostForm = () => {
    const [formData, setFormData] = useState("");
    const navigate = useNavigate();
    //function to update form state with user input
    const handleChange = (value, key) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

//function to handle submitting the form 
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/jobpost", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((data) => {
            console.log("data from form",data)
        })
        .catch((error) => {
            window.alert(error);
        })
        navigate('/profile')
    }
    return (
        <>
        <Header1 />
        <Main>
            <Div>
                <Title>Add new job details</Title>
            <Form onSubmit={(e) => {handleSubmit(e)}}>
            <InputDiv>
                <Label htmlFor="loginemail">Login Email: </Label>
                <Input required id="loginemail" type="email" onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="companyName">Company Name: </Label>
                <Input required id="companyName" type="text" onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="address">Address: </Label>
                <textarea required rols="2" cols="24" id="address" placeholder="Enter street and apartment no." onChange={(e) => handleChange(e.target.value, e.target.id)}></textarea>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="postalCode">Postal Code: </Label>
                <Input required id="postalCode" type="text" onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="number">Phone: </Label>
                <Input required id="number" type="number" onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="email">Company Email: </Label>
                <Input required id="email" type="email" onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="jobtitle">Job Title: </Label>
                <Input required id="jobTitle" type="text" onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="description">Description: </Label>
                <textarea required rols="5" cols="24" id="description" placeholder="Enter all details related to job" onChange={(e) => handleChange(e.target.value, e.target.id)}></textarea>
                </InputDiv>

                <InputDiv>
                <Label htmlFor="jobtype">Job Type: </Label>
                <input id="parttime" name="parttime" type="checkbox" onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Part-time</Label>
                <input id="fulltime" name="fulltime" type="checkbox" onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Full-time</Label>
                <input id="temporary" name="temporary" type="checkbox" onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Temporary</Label>
                <input id="permanent" name="permanent" type="checkbox" onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Permanent</Label>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="salary">Salary (between 8 and 25): </Label>
                <Input required id="salary" type="range" min="8" max="25" onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="benefit">Benefits: </Label>
                <input id="weekend" type="checkbox" name="weekend" onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Weekend</Label>
                <input id="overtime" type="checkbox" name="overtime" onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Over-time</Label>
                <input id="extrahours" type="checkbox" name="extrahours" onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Extra-hours</Label>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="date">Date to post: </Label>
                <Input required id="date" type="date" onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="apply">How to Apply: </Label>
                <textarea rols="2" cols="24" id="howToApply" onChange={(e) => handleChange(e.target.value, e.target.id)}></textarea>
                </InputDiv>
                <div className="buttonDiv">
                <Add type="submit">ADD JOB</Add>
                </div>
            </Form>
            </Div>
        </Main>
        <ScrollButton/>
        <Footer1 />
        </>
    );
}
const Title = styled.h2`
font-size:38px;
font-family:Times New Roman;
text-align:center;
color:#480987;
border:5px solid #ff8000;
width:50%;
margin:0 25%;;
`;
const Main = styled.div`

`;
const Div = styled.div`
height:82vh;
    width:60%;
    margin:0 20%;
    border:1px solid black;
    background:white;
    padding:20px;
    padding-bottom:20px;
`;
const Add = styled.button`
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
`

const Wrapper = styled.div``

const InputDiv = styled.div`
    margin-top:10px;
`

const Form = styled.form`
display: flex;
flex-direction: column;

.buttonDiv {
    width: 400px;
    display: flex;
    justify-content: center;
}
`

const Label = styled.label`
letter-spacing: 2px;
`

const Input = styled.input`
border-radius: 5px;
width: 200px;
`

export default JobPostForm;