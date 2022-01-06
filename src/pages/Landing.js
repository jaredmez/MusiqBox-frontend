import styled from "styled-components";
import Navbar from "../components/styled/Navbar";
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

  filter: grayscale(100%);

  @media screen and (max-width: 1920px) { /* Specific to this particular image */
      left: 50%;
      margin-left: -960px;   /* 50% */
    
  }
  `;

Background.defaultProps = {
  src: backImg,
}

const ContentCtn = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 150px 75px 120px 75px;
  position: relative;
  color: black;
  z-index: 3;

  > h1 {
    font-size: 3em;
  }

  @media screen and (max-width:550px){
    padding: 80px 25px;
  }
`

export default function Landing() {
    return(
          <>
          <Navbar />
          <Background />
          <ContentCtn>
            <h1 style={{marginBottom:"20px"}}>Explore New Music</h1>
            <h3>Start listening, watching, and sharing your musical world.</h3>
           
            
          </ContentCtn>
          <p>ahfdafdafdaf dafdafdafdafda</p>
          </>
    )
}