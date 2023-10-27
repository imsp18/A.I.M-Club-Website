import Button from "./Button";
import ArrowRightUp from "../assests/arrow-up-right.svg";

const Navbar = () => {
    const buttonInfo = [
        { title: 'Enroll Now', logo: ArrowRightUp }
    ];
    return (
        <div className="flex flex-row justify-center max-sm:justify-between max-sm:px-4 sticky z-20 top-0 mt-6 h-20 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <div className="flex flex-row gap-[103px] items-center">
                <div className="font-outfit text-2xl font-bold text-secondary max-sm:text-lg">AIM CLUB</div>
                <div className="flex flex-row font-outfit font-normal text-xl gap-[50px] list-none max-sm:hidden">
                    <li className=" hover:text-primary cursor-pointer hover:underline duration-100">About</li>
                    <li className=" hover:text-primary cursor-pointer hover:underline duration-100">Events</li>
                    <li className=" hover:text-primary cursor-pointer hover:underline duration-100">Team</li>
                    <li className=" hover:text-primary cursor-pointer hover:underline duration-100">Membership</li>
                </div>
                <div className="max-sm:hidden">
                    {buttonInfo.map((buttonInfo, index) => (
                        <Button key={index} title={buttonInfo.title} logo={buttonInfo.logo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;