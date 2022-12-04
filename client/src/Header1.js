import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link} from "react-router-dom";
import logo from "./images/montreal-walking-logo.png";

//header bar for recuiter side which conatins logo and the links to navigate to different pages
const Header1 = () => {
    const {isAuthenticated} = useAuth0();
    return (
        
        <>
            <Header2>
                <Link1 to="/recuiter"><img src ={logo} alt="Logo not found"/></Link1>
                {isAuthenticated &&
                <Div>
                    <Link2 to={"/adminalljobs"}>All jobs</Link2>
                    <Link2 to={"/form"}>Add Job</Link2>
                    <Link2 to={"/profile"}>Profile</Link2>
                    <Link2 to="/logout">Logout</Link2>
                    </Div>
                    }
            </Header2>
        </>
    );
}
const Div = styled.div`
    // height:100vh;
`;
const Header2 = styled.header`
height: 100px;
background-color: #480987;
color:white;
border-bottom:4px solid #ff8000;

div{
    margin-top:-70px;
    margin-left:750px;
}
`;
const Link1 = styled(Link)`
color:white;
font-size: 25px;
text-decoration:none;
margin-left:20px;

img{
    width:15%;
    height:90px;
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
export default Header1;