import X from "../assests/X-logo.svg";
import Linkedin from "../assests/linkedIn-logo.svg";

const TeamCard = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="h-[169px] w-[169px] bg-white absolute z-10 mb-60 border-primaryLight border rounded-full"></div>
            <div className="flex flex-col px-8 justify-center items-center w-[345px] h-[233px] absolute border border-primaryLight bg-white rounded-2xl">
                {/* Name */}
                <div className="font-outfit text-lg text-primaryLight font-semibold mt-12 uppercase">name</div>
                {/* Description */}
                <div className="font-outfit text-justify text-sm text-black font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>
                {/* Social Media */}
                <div className="flex flex-row gap-4 mt-4">
                    <img src={Linkedin} alt="X logo" className="h-5 w-5 hover:scale-110 cursor-pointer hover:co" />
                    <img src={X} alt="X logo" className="h-5 w-5 hover:scale-110 cursor-pointer" />
                </div>
            </div>
            <div className="w-[345px] h-[233px]  ml-4 mt-4 bg-primaryLight rounded-2xl"></div>


        </div>
    );
}

export default TeamCard;