import { Route, Switch, useLocation } from "react-router"
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes";
import MessengerCustomerChat from "react-messenger-customer-chat";



//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import CertificationsPage from './components/CertificationsPage';
import PortfolioPage from './components/PortfolioPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";


function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

    <SoundBar />

{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
<Switch  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/certifications" component={CertificationsPage}/>
      <Route exact path="/portfolio" component={PortfolioPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>

    </Switch>
</AnimatePresence>
    
    
    </ThemeProvider>


    <MessengerCustomerChat
    pageId="104840088482864"
    appId="523927899431492"
  />
    </>
    
}

export default App

