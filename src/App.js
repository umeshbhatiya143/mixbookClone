
import './App.css';
import Brand from './components/Brand/Brand';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/navbar/navbar';
import Story from './components/Story/Story';
import TimeDiv from './components/Timediv/TimeDiv';
import Work from './components/work/Work';

function App() {
  return(
    <div className='App'>
    <Navbar/>
    <TimeDiv/>
    <Intro/>
    <Brand/>
    <Story/>
    <Work/>
    <Footer/>
  </div>
  )
  
  
  
  
   
  
}

export default App;
