import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import DocumentMeta  from 'react-document-meta'


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:120vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 80vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    
  const meta = {
    title: 'HF - About',
    description: "About Haniya Fahim: I'm a Full-Stack Developer located in Pakistan. I AM A 14-YEAR-OLD STUDENT OF CLASS 9 FROM THE ORCHID SCHOOL...",
  
    }
    return (
     <DocumentMeta {...meta}>

        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        About Haniya Fahim: I'm a Full-Stack Developer located in Pakistan. I AM A 14-YEAR-OLD STUDENT OF CLASS 9 FROM THE ORCHID SCHOOL . I love to create simple yet beautiful websites with great user experience.<br /> <br/>
I'm interested in the whole fUll stack, Like trying new things and building great projects. I'm an independent freelancer As Well. I love to Sell and Create Websites, Videos, And Logos.
<br/> <br/>
BEING LEO I AM A STRONG, BRAVE ,PASSIONATE AND A CHEERFUL PERSON ALONG WITH MY DOMINATING BUT LEADING CHARACTERISTICS PEOPLE ALSO FOUND ME LOYAL ,PLAYFUL AND GENEROUS AND IRRESISTIBLE, BUT A LITTLE LAZY PERSON .
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        </DocumentMeta>
    )
}

export default AboutPage
