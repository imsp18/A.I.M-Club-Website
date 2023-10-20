import Button from "./Button";
import ArrowRightUp from "../assests/arrow-up-right.svg";

const Navbar = () => {
    const buttonInfo = [
        {title: 'Enroll Now', logo: ArrowRightUp}   
      ];
    return (
        <div className="flex flex-row justify-center sticky z-20 top-0 mt-6 h-20 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <div className="flex flex-row gap-[103px] items-center ">
                <div className="font-outfit text-2xl font-bold">AIM CLUB</div>
                <div className="flex flex-row font-outfit font-normal text-xl gap-[50px]">
                    <a>About</a>
                    <a>Events</a>
                    <a>Team</a>
                    <a>Membership</a>
                </div>
                {buttonInfo.map((buttonInfo, index) => (
                    <Button key={index} title={buttonInfo.title} logo={buttonInfo.logo} />
                ))} 
            </div>
        </div>
    );
}

export default Navbar;