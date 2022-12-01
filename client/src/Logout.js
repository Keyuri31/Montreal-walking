import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    
    return ( isAuthenticated && 
        <div>
            <p>Are you sure you want to logout?</p>
            <Button onClick={() => logout({ returnTo: window.location.origin })}>YES</Button>
            <Button onClick={()=> navigate('/')}>NO</Button>
        </div>
    );
}
const Button = styled.button`
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
`;
export default Logout;