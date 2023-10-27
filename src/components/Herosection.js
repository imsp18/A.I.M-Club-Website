import HeroImage from '../assests/hero-image.svg';
import chevronRight from '../assests/chevron-right.svg';
import Button from './Button';

const HeroSection = () => {
    const buttonInfo = [
        {title: 'Upcoming Events', logo: chevronRight}   
      ];
    return (
        <div className="flex flex-row mt-20 max-sm:mt-10 justify-center items-center max-sm:gap-10 max-sm:flex-col">
            {/* Text Part */}
            <div className="flex flex-col items-start gap-2 max-sm:gap-4 w-[525px] max-sm:w-[310px]" >
                <h2 className="font-outfit text-primary text-4xl font-bold underline max-sm:text-2xl"> Empowering minds in Automation, Invention & Manufacturing </h2>
                <p className="font-outfit text-black text-lg max-sm:text-sm">Unlocking Creativity, Inspiring Innovation, and Engineering the Future</p>
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