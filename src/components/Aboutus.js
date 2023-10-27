import aboutImage from '../assests/about-image.svg'

const AboutUs = () => {
    return (
        <div className="flex flex-row mt-20 max-sm:mt-10 justify-center items-center max-sm:flex-col-reverse">
            {/* Image Part */}
            <div className="flex flex-col items-center">
                <img src={aboutImage} alt="about" />
            </div>
            {/* Text Part */}
            <div className="flex flex-col items-start gap-2 w-[525px] max-sm:w-[310px] max-sm:gap-10" >
                <h1 className="font-outfit text-primaryLight text-lg font-bold max-sm:text-sm">ABOUT US</h1>
                <h2 className="font-outfit text-primary text-4xl font-bold max-sm:text-2xl">Embark on a Journey of Innovation: Unleashing Potential with
                    <span className="text-secondary"> A.I.M. Club</span></h2>
                <p className="font-outfit text-black text-lg text-justify max-sm:text-sm">The A.I.M. Club, short for Automation, Invention, and Manufacturing Club, is a student-led organization in the Multidisciplinary Engineering Department of SVIT Vasad. The club's primary focus is to provide education and promote learning opportunities for students in the areas of automation, invention, and manufacturing.</p>

            </div>
        </div>
    );
}

export default AboutUs;