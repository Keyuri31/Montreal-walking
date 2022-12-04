import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//
const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    
    return (
        <Body>
            <Container>
                { isAuthenticated && 
                <Div>
                    <p>Are you sure you want to logout?</p>
                    {/* onclick logs user from the site */}
                    <Button onClick={() => logout({ returnTo: window.location.origin })}>YES</Button> 
                    {/* redirect to the UserType component */}
                    <Button onClick={()=> navigate('/')}>NO</Button>
                </Div>
                }
            </Container>
        </Body> 
    );
}
const Div = styled.div`
    color:white;

    img{
        width:80%;
        height:25vh;
        margin-left:50px;
    }
    p{
        font-size:20px;
        margin-left:25px;
        margin-top:20px;
    }
`;
const Body = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    justify-content: center; 
    height:100vh; 
`;
const Button = styled.button`
    background-color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 20%;
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
    width:40%;
    background-color: #400080; 
    border-radius:20px;

    &:hover{
        transition: all 0.5s ease;
        transform: scale(1.05);
    }
`;
export default Logout;