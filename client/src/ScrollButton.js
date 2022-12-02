import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import styled from "styled-components";

//scroll button to directly go to top of the page
const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);

     //scroll button visibility
     useEffect(() => {
        const handleScrollButtonVisibility = () => {
          window.pageYOffset > 250 ? setShowButton(true) : setShowButton(false);
        };
        window.addEventListener("scroll", handleScrollButtonVisibility);
    
        return () => {
          window.removeEventListener("scroll", handleScrollButtonVisibility);
        };
      }, []);
    
      //function for scroll button
      const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (
        <>
        {showButton && (
            <Div className={`scrollToTop`}>
                <button onClick={handleScrollToTop}>
                    <BsFillArrowUpCircleFill />
                </button>
            </Div>
        )}
        </>
    );
}
const Div = styled.div`
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
 
export default ScrollButton;