import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link} from "react-router-dom";
import logo from "./images/montreal-walking-logo.png";

const Header = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        
        <>
            <Header1>
                <Link1 to="/user"><img src ={logo} alt="Logo not found"/></Link1>
                
                {isAuthenticated && <>
                    {/* <Link2 to="">Welcome, {user.nickname}</Link2><br></br> */}
                    <Link2 to="/logout">Logout</Link2></> }
            </Header1>
        </>
    );
}
const Header1 = styled.header`
height: 120px;
background-color: #480987;
color:white;
border-bottom:3px solid #ff8000;
`;
const Link1 = styled(Link)`
color:white;
font-size: 25px;
text-decoration:none;
margin-left:20px;

img{
    width:20%;
    height:120px;
}
`;
const Link2 = styled(Link)`
color:white;
font-size: 20px;
float:right;
margin-top:40px;
margin-right:50px;
text-decoration:none;
`;
export default Header;