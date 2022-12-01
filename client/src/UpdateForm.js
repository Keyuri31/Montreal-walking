import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const UpdateForm = () => {
    const {_id} = useParams();
    const [updatejob, setUpdateJob] = useState(null);
    const navigate = useNavigate();
    console.log("updateform id", _id)
    
    useEffect (()=>{
        console.log("test")
    fetch (`/api/job/${_id}`)
        .then(res=> res.json())
        .then(data=> {
          if(data.status === 400 || data.status === 500){
            // navigate('/error');
            throw new Error(data.message);
        }   
        else{
          console.log("uodate datataaaa",data.data)
          setUpdateJob(data.data)
          // setProfile(data.data); 
        }  }
        )
    },[])

    const handleChange = (value, key) => {
        console.log("value of form",value)
        setUpdateJob({
            ...updatejob,
            [key]: value
        })
    }

//function to handle submitting the form 
    const handleSubmit = (e) => {
        console.log("form data", updatejob)
        e.preventDefault();
        fetch(`/api/job/${_id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatejob)
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

    return (<>
    <h1>Helooo...</h1>
    <div>
        {/* {updatejob.length != 0  && */}
        {console.log("update job", updatejob)}
        {updatejob &&
            <Form onSubmit={(e) => {handleSubmit(e)}}>
            <InputDiv>
                <Label htmlFor="loginemail">Login Email: </Label>
                <Input required id="loginemail" type="email" value={updatejob.loginemail} onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="companyName">Company Name: </Label>
                <Input required id="companyName" type="text" value={updatejob.companyName} onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="address">Address: </Label>
                <textarea required rols="2" cols="24" id="address" value={updatejob.address} placeholder="Enter street and apartment no." onChange={(e) => handleChange(e.target.value, e.target.id)}></textarea>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="postalCode">Postal Code: </Label>
                <Input required id="postalCode" type="text" value={updatejob.postalCode}  onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="number">Phone: </Label>
                <Input required id="number" type="number" value={updatejob.number}  onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="email">Company Email: </Label>
                <Input required id="email" type="email" value={updatejob.email} onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="jobtitle">Job Title: </Label>
                <Input required id="jobTitle" type="text" value={updatejob.jobTitle} onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="description">Description: </Label>
                <textarea required rols="5" cols="24" id="description" value={updatejob.description} placeholder="Enter all details related to job" onChange={(e) => handleChange(e.target.value, e.target.id)}></textarea>
                </InputDiv>

                <InputDiv>
                <Label htmlFor="jobtype">Job Type: </Label>
                <input id="parttime" name="parttime" type="checkbox" checked={updatejob.jobType.parttime === null ? false : true} onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Part-time</Label>
                <input id="fulltime" name="fulltime" type="checkbox" checked={updatejob.jobType.fulltime === null ? false : true} onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Full-time</Label>
                <input id="temporary" name="temporary" type="checkbox" checked={updatejob.jobType.temporary === null ? false : true} onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Temporary</Label>
                <input id="permanent" name="permanent" type="checkbox" checked={updatejob.jobType.permanent === null ? false : true}  onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Permanent</Label>

                
                </InputDiv>
                <InputDiv>
                <Label htmlFor="salary">Salary (between 8 and 25): </Label>
                <Input required id="salary" type="range" min="8" max="25" value={updatejob.salary} onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="benefit">Benefits: </Label>
                <input id="weekend" type="checkbox" checked={updatejob.benefits.weekend === null ? false : true} name="weekend" onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Weekend</Label>
                <input id="overtime" type="checkbox" name="overtime" checked={updatejob.benefits.overtime === null ? false : true} onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Over-time</Label>
                <input id="extrahours" type="checkbox" name="extrahours" checked={updatejob.benefits.extrahours === null ? false : true} onChange={(e) => handleChange(e.target.name, e.target.id)} className="inputSelect"></input>
                <Label>Extra-hours</Label>
                
                </InputDiv>
                <InputDiv>
                <Label htmlFor="date">Date to post: </Label>
                <Input required id="date" type="date" value={updatejob.date} onChange={(e) => handleChange(e.target.value, e.target.id)} className="inputSelect"></Input>
                </InputDiv>
                <InputDiv>
                <Label htmlFor="apply">How to Apply: </Label>
                <textarea rols="2" cols="24" id="howToApply" value={updatejob.howToApply} onChange={(e) => handleChange(e.target.value, e.target.id)}></textarea>
                </InputDiv>
                <div className="buttonDiv">
                <Add type="submit">Add</Add>
                </div>
            </Form>
}

            </div>
    </>);
}
 
const Add = styled.button`
background-color: black;
border: none;
padding: 10px;
border-radius: 5px;
width: 150px;
color: white;
font-family: 'Times New Roman', Times, serif;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
letter-spacing: 5px;
margin-top: 30px;
&:hover:enabled {
    cursor: pointer;
    transition: all 0.5s ease;
    transform: scale(1.05);
    background-color: purple;
}
&:disabled {
    opacity: 30%;
    cursor: not-allowed;
}
&:active:enabled {
    transition: all 0.5s ease;
    transform: scale(1);
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
export default UpdateForm;