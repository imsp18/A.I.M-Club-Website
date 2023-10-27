const SkillsButton = ({ title, logo }) => {


    return (
        <div className="cursor-pointer hover:scale-105 ease-in-out duration-100">
            <div className="flex flex-row justify-center items-center max-sm:w-[154px] max-sm:h-[47px] w-[255px] h-[74px] absolute bg-white rounded-xl gap-2 max-sm:gap-1 outline outline-primary outline-2">
                <img src={logo} alt="logo" className="w-9 h-9 max-sm:w-5 max-sm:h-5" />
                <div className="font-outfit text-primaryLight text-3xl max-sm:text-lg font-medium">{title}</div>
            </div>
            <div className="bg-primary max-sm:ml-1 max-sm:mt-1 ml-2 mt-2 w-[255px] h-[74px] max-sm:w-[154px] max-sm:h-[47px] rounded-xl"> </div>
        </div>
    );
}

export default SkillsButton;