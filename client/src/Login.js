import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import logo from "./images/logo.png";

const Login = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
console.log(user)
console.log(isAuthenticated)

    return (
        <Body>
            <Container>
                {!isAuthenticated ?
                <Div>
                    <img src ={logo} alt="Logo not found"/>
                    <h1>Welcome to Montreal Walking</h1>
                    <h3>Want to be a EMPLOYER or EMPLOYEE???</h3>
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
    // display:flex;
    color:white;

    img{
        width:80%;
        height:25vh;
        margin-left:50px;
    }
`;
const Body = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    justify-content: center;  
`;
const Button = styled.button`
    background-color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 150px;
    color:  #400080;
    font-family: 'Times New Roman', Times, serif;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    letter-spacing: 5px;
    margin-top: 30px;
    margin-bottom:20px;
    &:hover:enabled {
        cursor: pointer;
        transition: all 0.5s ease;
        transform: scale(1.05);
        background-color: #ff8000;
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
    
`;


export default Login;