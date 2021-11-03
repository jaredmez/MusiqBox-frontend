
import styled from "styled-components";
import Navbar from "./styled/Navbar";
import backImg from "../images/main-bak.jpg"


const Pagecontent = styled.div`
  background-color: black;

  background: url(${backImg});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`;

const Background = styled.img`
/* Set rules to fill background */
min-height: 100%;
min-width: 1920px;
  
/* Set up proportionate scaling */
width: 100%;
height: 100%;
  
/* Set up positioning */
position: fixed;
top: 0;
left: 0;

filter: grayscale(85%);

@media screen and (max-width: 1920px) { /* Specific to this particular image */
    left: 50%;
    margin-left: -960px;   /* 50% */
  
}

`;

Background.defaultProps = {
  src: backImg,
}

export default function Landing() {
    return(
          <>
          <Navbar />
          <Background />
          </>
    )
}