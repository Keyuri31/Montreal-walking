import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

//display social media icons and links
const SocialMediaIcon = () => {
    return (
        <Div class="social-container">
      <a href="https://www.youtube.com"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://github.com/Keyuri31/Montreal-walking"
        className="facebook social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/keyuripatel31/"
        className="instagram social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
</Div>
    );
}
 const Div = styled.div`
 display:flex;
 flex-direction:row;
 padding-top:80px;
 .social-container {
    background: #eee;
    padding: 25px 50px;
  }
  a.social {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
  }
  a.social:hover {
    transform: translateY(-2px);
  }
  a.youtube {
    color: #eb3223;
  }
  
  a.facebook {
    color: #3965f1;
  }
  
  a.twitter {
    color: #49a1eb;
  }
  
  a.instagram {
    color: lightblue;
  }
 `;
export default SocialMediaIcon;