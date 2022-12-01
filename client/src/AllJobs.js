import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Map from "./Map";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Loader from "./Loader";
import Spinner from "./Spinner";
import { Wrapper } from "@googlemaps/react-wrapper";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const api_key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
// console.log(api_key)   

const AllJobs = () => {
    const [alljobs, setAlljobs] = useState(null);
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();
    const center = { lat: 45.508888, lng: -73.561668 };
  const zoom = 4;
    
    useEffect(()=>{
        fetch (`/api/jobs`)
          .then(res=> res.json())
          .then(data=> {
            if(data.status === 400 || data.status === 500){
            //   navigate('/error');
              throw new Error(data.message);
          }   
          else{
            // console.log(data)
            setAlljobs(data.data); 
          }  
          }
          )
      
      }, [])
{console.log("alljobs", alljobs)}
      useEffect(() => {
        const handleScrollButtonVisibility = () => {
          window.pageYOffset > 250 ? setShowButton(true) : setShowButton(false);
        };
        window.addEventListener("scroll", handleScrollButtonVisibility);
    
        return () => {
          window.removeEventListener("scroll", handleScrollButtonVisibility);
        };
      }, []);
    
      const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      const render = (status) => {
        return <h1>{status}</h1>;
      };

      const handleClick1 = (e,id)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate(`/userjob/${id}`);
        
    }
    return (
        <>
        {!alljobs ? 
        <Spinner/>
        : 
        <StyledDiv>
                    <Header/>
                    <Sidebar />
                    <Main>
                        <Container>
                    {alljobs.map((item,index) => {
                        {console.log("itemmmmm",item)}
                        return(
                        <Div key={index+1} onClick={(e)=>{handleClick1(e,item._id)}}>
                            <p>Company Name: {item.companyName}</p>
                            <p>Address: {item.address}</p>
                            {/* <p>{item.postalCode}</p> */}
                            <p>{item.email}</p>
                            <hr></hr>
                            <p>{item.jobTitle}</p>
                            <p>{item.description}</p>
                            <p>Salary: {item.salary}</p>
                            {/* <button onClick={(e)=>{handleClick1(e,item._id)}}>More Info</button> */}
                        </Div>
                        )
                        })}
                        </Container>
                        <Container>
                            <Div>
                              <Wrapper apiKey={api_key} render={render} >
                                <Map zoom={zoom} center={center} alljobs={alljobs} setAlljobs={setAlljobs}/>
                            </Wrapper>
                            
                            </Div>
                        </Container>
                        
                        {showButton && (
                            <div className={`scrollToTop`}>
                            <button onClick={handleScrollToTop}>
                                {/* <img src="/icons/new-up-arrow.png" /> */}
                                <BsFillArrowUpCircleFill />
                            </button>
                            </div>
                        )}
                    </Main>
                    <Footer/>
        </StyledDiv>
        }
        </>
    );
}
const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
`;
const Main= styled.div`
    display:flex;
    flex-direction:row;
    width:100%;

    button {
        background-color: transparent;
        border: none;
        font-size: 1.7rem;
        color: #ff8000;
        position: fixed;
        right: 7px;
        bottom: 3%;
        z-index: 50;
        cursor: pointer;
        padding: 4px;
      }
`;
const StyledDiv = styled.div`
    width:100%;
    // overflow-y: scroll;
`;
 const Div= styled.div`
    border:2px solid black;
    display:flex;
    flex-direction:column;
    // width:48%;
    justify-content:center;
    align-content:center;
 `;
export default AllJobs;