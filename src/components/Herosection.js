import HeroImage from '../assests/hero-image.svg';
import chevronRight from '../assests/chevron-right.svg';
import Button from './Button';

const HeroSection = () => {
    const buttonInfo = [
        {title: 'Enroll Now', logo: chevronRight}   
      ];
    return (
        <div className="flex flex-row mt-20 justify-center items-center">
            {/* Text Part */}
            <div className="flex flex-col items-start gap-4 w-[525px]" >
                <h className="font-outfit text-primary text-4xl font-bold underline"> Empowering minds in Automation, Invention & Manufacturing </h>
                <p className="font-outfit text-black text-lg">Unlocking Creativity, Inspiring Innovation, and Engineering the Future</p>
                {buttonInfo.map((buttonInfo, index) => (
                    <Button key={index} title={buttonInfo.title} logo={buttonInfo.logo} />
                ))}
            </div>
            {/* Image Part */}
            <div className="flex flex-col items-center">
                <img src={HeroImage} alt="hero" />
            </div>
        </div>
    );
}

export default HeroSection;