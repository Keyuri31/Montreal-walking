import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./images/montreal-walking-logo.png";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer1 = () => {
    return (
        <Div>
            <div>
                <h3>About Us</h3>
                <p>This website has been created by Keyuri Patel as a part of final project for here Full Stack Web Development Bootcamp at Concordia University.</p>
                <span>&copy; 2022 Copyright</span>
            </div>
            <div>
                <SocialMediaIcon/>
            </div>
            <div>
            <Ul>
                    <Link1 to={"/recuiter"}><img src ={logo} alt="Logo not found"/></Link1>
                    <Link1 to={"/adminalljobs"}>All Jobs</Link1>
                    <Link1 to={"/form"}>Add jobs</Link1>
                    <Link1 to={"/profile"}>Profile</Link1>
                    <Link1 to={"/logout"}>Logout</Link1>
                    {/* <Link1 to={"/contact"}>Contact Us</Link1> */}
                </Ul>
            </div>
            
        </Div>
    );
}
const Ul = styled.ul`
    width:70%;
    float:right;
    line-height:25px;
    margin-top:-20px;
`;
const Link1 = styled(Link)`
    display:flex;
    text-decoration:none;
    color:white;
    margin-left:-50px;

    img{
    margin-left:-20px;
        width:50%;
        height:25%;
    }
    &:hover{
        color:#ff8000;
    }
`;
 const Div = styled.div`
    width:100%;
    height:30vh;
    border-top:5px solid #ff8000;
    background-color: #480987;
    display:flex;
    flex-direction:row;

    div{
        width:30%;
        margin:20px 50px;
        
        h3{
            color:white;
            text-align:center;
            font-weight:bold;
            padding-bottom:10px;
        }
        p{
            color:white;
            text-align:justify;
            margin-bottom:50px;
        }
        span{
            color:white;
        }
    }
 `;
export default Footer1;