import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import {motion} from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import DocumentMeta  from 'react-document-meta'

import { Portfolio } from "../data/PortfolioData";
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitlte from '../subComponents/BigTitlte';

const Box = styled.div`
background-color: ${props => props.theme.body};

height:1700vh;
position: relative;
display: flex;
align-items: center;


`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
top: 1rem;
width: 80px;
height: 80px;
z-index:1;
`


// Framer-motion Configuration
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const PortfolioPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);



    useEffect(() => {
        let element = ref.current;
       
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
      
         
          return (yinyang.current.style.transform =
            'rotate(' + -window.pageYOffset + 'deg)')
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])



      const meta = {
        title: 'HF - Portfolio',
        description: "Hi, There! This is Haniya Fahim's Portfolio Where You Could Find All Her Previous Work...",
      
        }
    
      return (     
         <DocumentMeta {...meta}>
                   <ThemeProvider theme={DarkTheme}>
<Box>     

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>

<PowerButton />
     <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
     
     <h3>Scroll Up And Down For More...</h3>
         {
            Portfolio.map( d => 
            <Card key={d.id} data={d} />
            )
         }<h3>Scroll Up And Down For More...</h3>
     </Main>
<Rotate ref={yinyang}>
    <YinYang width={80} height={80} fill={DarkTheme.text} />
</Rotate>

<BigTitlte text="PORTFOLIO" top='10%' right="20%" />

        </Box>

        </ThemeProvider>
        </DocumentMeta>
    )
}

export default PortfolioPage
