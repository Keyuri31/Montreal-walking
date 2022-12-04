import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link} from "react-router-dom";
import logo from "./images/montreal-walking-logo.png";

//header bar for job seeker side which conatins logo and the links to navigate to different pages
const Header = () => {
    const {isAuthenticated} = useAuth0();
    return (
        
        <>
            <Header1>
                <Link1 to="/user"><img src ={logo} alt="Logo not found"/></Link1>
                {isAuthenticated &&
                <div>
                    <Link2 to={"/alljobs"}>All Jobs</Link2>
                    <Link2 to={"/todayjobs"}>Today's Jobs</Link2>
                    <Link2 to={"/faq"}>FAQ</Link2>
                    <Link2 to={"/contact"}>Contact Us</Link2>
                    <Link2 to="/logout">Logout</Link2>
                    </div>
                    }
            </Header1>
        </>
    );
}

const Header1 = styled.header`
height: 120px;
background-color: #480987;
color:white;
border-bottom:4px solid #ff8000;

div{
    margin-top:-70px;
    margin-left:600px;
}
`;
const Link1 = styled(Link)`
color:white;
font-size: 25px;
text-decoration:none;
margin-left:20px;

img{
    width:15%;
    height:100px;
    margin-left:40px;
}
`;
const Link2 = styled(Link)`
margin-top:-50px;
color:white;
padding:10px;
font-size: 20px;
// margin-top:40px;
margin-right:50px;
text-decoration:none;

&:hover{
    color:#ff8000;
    background:white;
    padding:10px;
    border-radius:10px;
    // font-weight:800;
}
`;
export default Header;