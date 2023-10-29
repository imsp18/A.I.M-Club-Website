import Button from "./Button";
import MenuOpen from "../assests/menu-open.svg";
import ArrowRightUp from "../assests/arrow-up-right.svg";

const Navbar = () => {
    const buttonInfo = [
        { title: 'Enroll Now', logo: ArrowRightUp }
    ];
    return (
        <div className="flex flex-row justify-center sticky z-20 top-0 max-sm:px-4 mt-6 max-sm:mt-2 h-20 bg-primary rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <div className="flex flex-row gap-28 items-center max-sm:gap-40">
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
                <img src={MenuOpen} alt="Hamburger Menu" className="max-sm:block hidden cursor-pointer" />
            </div>
        </div>
    );
}

export default Navbar;