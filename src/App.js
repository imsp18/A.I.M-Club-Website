import Navbar from './components/Navbar';  
import HeroSection from './components/Herosection';
import AboutUs from './components/Aboutus';
import Vision from './components/Vision';
import './App.css';

function App() {
  return (
    <div className=" mx-[188px]">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Vision />
    </div>
  );
}

export default App;
