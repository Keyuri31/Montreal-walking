import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import logo from "./images/logo.png";

//takes to the login and signin page from Auth0
const Login = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    return (
        <Body>
            <Container>
                {!isAuthenticated ?
                <Div>
                    <img src ={logo} alt="Logo not found"/>
                    <h1>Welcome to Montreal Walking...</h1>
                    <h3>Live Your Dream by finding a perfect Job!!</h3>
                    <br></br>
                    <br></br>
                    <p>It's Free free free!!! <span>Come join us !!!</span></p>
                    <p>Create your own account </p>
                <Button onClick={() => loginWithRedirect()}>CLICK HERE</Button>
                </Div>
                : <Logout />}
            </Container>
        </Body>
    );
}
const Div = styled.div`
    color:white;
    font-family:"Times New Roman";
    text-align:center;
   
    h1{
        font-size:35px;
        font-weight:bold;
        font-style:italic;
    }
    h3{
        font-size:25px;
        font-weight:200;
        font-style:italic;
    }
    p{
        font-size:20px;
        font-weight:200;
    }
    img{
        width:80%;
        height:25vh;
        margin-left:50px;
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


export default Login;