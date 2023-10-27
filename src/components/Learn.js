import SkillsButton from "./Skills-button"
import skill1 from "../assests/skill-1.svg"
import skill2 from "../assests/skill-2.svg"
import skill3 from "../assests/skill-3.svg"
import skill4 from "../assests/skill-4.svg"
import skill5 from "../assests/skill-5.svg"
import skill6 from "../assests/skill-6.svg"


const Learn = () => {
    const skills = [    
        {title: '2D Desgining', logo:skill1},
        {title: '3D Desgining', logo:skill2},
        {title: '3D Printing', logo:skill3},
        {title: 'Profile Building', logo:skill4},
        {title: 'Tech Skills', logo:skill5},
        {title: 'Robotics', logo:skill6},
    ];
    return (
        <div className="flex flex-col items-center mt-20 max-sm:mt-10">
            <div className="font-outfit text-4xl text-primary font-bold max-sm:text-2xl">Learn<span className="text-secondary"> More</span> About</div>
            <div className="flex flex-row flex-wrap max-sm:flex-wrap justify-between max-sm:justify-center items-center max-sm:gap-2 gap-10 mt-10">
                {skills.map((skills, index) => (
                    <SkillsButton key={index} title={skills.title} logo={skills.logo} />
                ))}
            </div>
        </div>
    );
}

export default Learn;