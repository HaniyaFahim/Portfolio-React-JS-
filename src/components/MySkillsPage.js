import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';
import DocumentMeta  from 'react-document-meta'


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:200vh;
position: absolute;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1rem;
width: 40vw;
height: 100vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    const meta = {
      title: 'HF - My Skills',
      description: "Hi There, I Am Multi-Skilled Which Is Why I'd Like To Share My Skills With You...",
    
      }
  
    return (     
       <DocumentMeta {...meta}>
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />


           
           
            <Main>
<Title>
    <Develope width={40} height={40} /> Full Stack Developer
</Title>
<Description>
I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>My Skills</strong>
<p>
Html, Css, Js, React, Bootstrap, Firebase etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, Codepen, Firebase etc.
</p>
</Description>

            </Main>
<br />
            <Main>
<Title>
    <Develope width={40} height={40} /> Freelancer
</Title>
<Description>
I Cope-Up With The Requirements Given By My Client for whom I'm creating, thus I enjoy Helping Others Using My Skills For a Reasonable Price.
</Description>
<Description>
<strong>My Skills</strong>
<p>
Web Development, Graphic Designer etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
Fiverr, Upwork, Freelancer etc.
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider></DocumentMeta>
        
    )
}

export default MySkillsPage
