import Navbar from './components/Navbar';  
import HeroSection from './components/Herosection';
import AboutUs from './components/Aboutus';
import Vision from './components/Vision';
import Learn from './components/Learn';
import './App.css';
import UpcomingEvents from './components/Upcomingevents';

function App() {
  return (
    <div className=" mx-[188px]">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Vision />
      <Learn />
      <UpcomingEvents />
    </div>
  );
}

export default App;
