import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <>
            <Nav>
                <ul>
                    <Link1 to={"/user"}>Montreal Walking</Link1>
                    <Link1 to={"/alljobs"}>All Jobs</Link1>
                    <Link1 to={"/todayjobs"}>Today's Jobs</Link1>
                    <Link1 to={"/faq"}>FAQ</Link1>
                    <Link1 to={"/contact"}>Contact Us</Link1>
                </ul>
            </Nav>
        </>
    );
}
 
const Nav = styled.nav`
    width:100%;
    height:5vh;
    border-bottom:3px solid #ff8000;
    margin-bottom:5px;

    ul{
        width:100%;
        display:flex;
        align-content: space-between;
    justify-content: space-around;
    }
`;
const Link1 = styled(Link)`
    display:flex;
    justify-content:space-between;
    text-decoration:none;

    .active{
        text-decoration:underline;
    }
`;
export default Sidebar;