import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import AboutUs from './components/Aboutus';
import Vision from './components/Vision';
import Learn from './components/Learn';
import './App.css';
import UpcomingEvents from './components/Upcomingevents';
import PreviousEvents from './components/Previousevents';
import TeamSection from './components/Teamsection';
import MembershipCard from './components/Membership';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <div className=" mx-[188px] max-sm:mx-[25px]">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Vision />
        <Learn />
        <UpcomingEvents />
        <PreviousEvents />
        <TeamSection />
        <MembershipCard />
        <Contact />
      </div>
      <Footer />
    </div>


  );
}

export default App;
