import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import image from "./images/newimage.png";
import styled from "styled-components";

const UserType = () => {
    const { user} = useAuth0();
    const [type, setType]= useState("");
    const navigate = useNavigate();

    const handleChange = (value) => {
        setType(value);
}

    const handleSubmit = (e) => {
            e.preventDefault();
            
                fetch("/api/login", {
                      method: "POST",
                      headers: {
                          "Accept": "application/json",
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({user,type})
                  })
                  .then(res => res.json())
                  .then((data) => {
                      console.log("type",type)
                      if(type === "usertype"){
                            navigate('/user');
                        }else{
                            navigate('/recuiter');
                        }
                  })
                  .catch((error) => {
                      window.alert(error);
                  })
                }
 
    return (
        <Body>
            <Container>
            <Div>
                <h3>Want to a EMPLOYER or EMPLOYEE?</h3>
            <form onSubmit={e=>handleSubmit(e)}>
                <First>
                    <Second>
                        <input type="radio" name="usertype" value={type} onChange={(e)=>{handleChange(e.target.name)}}/>
                        <label htmlFor="name">Job Seeker</label>
                    </Second>
                    <Second>
                        <input type="radio" name="recuitertype" value={type} onChange={(e)=>{handleChange(e.target.name)}}/>
                        <label htmlFor="name">Recuiter</label>
                    </Second>
                </First>
                <First>
                <Button type="submit">Submit</Button>
                </First>
            </form>
        </Div>
            </Container>
        </Body>
        
    );
}
const First = styled.div`
display:flex;
flex-direction:row;
`;
const Second = styled.div`
display:flex;
flex-direction:row;
margin:0 20px;
input{
    margin:0 7px;
}
`;
const Div = styled.div`
color:white;
font-family:"Times New Roman";
text-align:center;
form{
    // display:flex;
    // flex-direction:row;

}
h3{
    margin-top:20px;
    font-size:25px;
    font-weight:200;
    font-style:italic;
}

label{
    font-size:20px;
    font-weight:200;
    font-style:italic;
}
`;
const Body = styled.div`
display: flex;
align-items: center;
justify-content: center; 
height:100vh; 
`;
const Button = styled.button`
background-color: white;
border: none;
padding: 10px;
border-radius: 5px;
width: 60%;
color:  #400080;
font-family: 'Times New Roman';
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
letter-spacing: 5px;
margin-top: 30px;
margin-bottom:20px;
margin-left:20px;
font-weight:bold;
font-size:15px;

&:hover:enabled {
    cursor: pointer;
    transition: all 0.5s ease;
    transform: scale(1.05);
    background-color: #ff8000;
    color:white;
    font-weight:bold;
    font-size:15px;
}
&:disabled {
    opacity: 30%;
    cursor: not-allowed;
}
&:active:enabled {
    transition: all 0.5s ease;
    transform: scale(1);
}
`;

const Container = styled.div`
display:flex;
justify-content:center;
align-content:center;
width:50%;
background-color: #400080; 
border-radius:20px;

&:hover{
    transition: all 0.5s ease;
    transform: scale(1.05);
}
`;
export default UserType;