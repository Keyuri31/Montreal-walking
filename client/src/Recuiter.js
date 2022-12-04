import { useAuth0 } from "@auth0/auth0-react";
import Header1 from "./Header1";
import styled from "styled-components";
import Footer1 from "./Footer1";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollButton from "./ScrollButton";

const Recuiter = () => {
    const { user, isAuthenticated} = useAuth0();
    const [state, setState] = useState("");
    const [state1, setState1] = useState("");
    const navigate=useNavigate();

    useEffect(()=>{
      fetch (`/api/totalcount`)
        .then(res=> res.json())
        .then((data)=>{
          setState(data.data)
        })
    },[])
  
    useEffect(()=>{
      isAuthenticated && 
      fetch (`/api/jobs/${user.email}`)
        .then(res=> res.json())
        .then((data)=>{
          setState1(data.data.length)
        })
    },[isAuthenticated])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/adminalljobs')
  }

  const handleSubmit1 = (e) => {
    e.preventDefault();
    navigate('/profile')
}
  return (
    <Div1>
        <Header1 />
        <Container>
        {isAuthenticated && (
            <Div>
              <Title>Welcome <Name>{user.given_name}</Name> to Montreal Walking 
              </Title>
              <Detail>Admin Panel</Detail>
              <ButtonDiv>
                <Button onClick={e=>handleSubmit(e)}>Total Jobs Posted: <Number>{state}</Number></Button>
                <Button onClick={e=>handleSubmit1(e)}>Total Jobs Posted By Current User: <Number>{state1}</Number></Button>
              </ButtonDiv>
            </Div>
          )}
          </Container>
          <ScrollButton/>
          <Footer1/>
          </Div1>
  );
}
const Name = styled.span`
  font-size:40px;
  color:#ff8000;

`;
const Number = styled.span`
  font-size:60px;
  color:white;
  text-align:center;

`;
const ButtonDiv = styled.div`
  display:flex;
  flex-direction:row;
  // margin:10px;
`;
const Button = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
background-color: #ff8000;
border: none;
padding: 10px;
border-radius: 5px;
width: 150px;
color: white;
font-weight:bold;
font-size:15px;
width:30%;
font-family: 'Times New Roman', Times, serif;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
letter-spacing: 5px;
margin: 20px 40px 10px 50px;
&:hover:enabled {
    cursor: pointer;
    transition: all 0.5s ease;
    transform: scale(1.05);
    background-color: white;
    color:#400080;
    font-weignt:bold;
}

`;
const Detail = styled.p`
  font-size:25px;
  padding:10px 50px;
  text-align:center;
  line-height:20px;
`;
const Container= styled.div`
box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius: 20px;
padding:35px;
background:white;
margin:20px 300px 20px 300px;
`;
const Title = styled.h2`
    font-size:38px;
    font-family:Times New Roman;

    img{
      height:20%;
      width:100%;
      margin-bottom:-100px;
      padding-bottom:-100px;
    }
`;
const Div1 = styled.div`
  
`;
const Div = styled.div`
height:48vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:justify;
padding:50px;
`;
export default Recuiter;