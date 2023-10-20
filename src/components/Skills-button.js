const SkillsButton = ({ title, logo }) => {


    return (
        <div className="cursor-pointer hover:scale-105 ease-in-out duration-100">
            <div className="flex flex-row justify-center items-center w-[255px] h-[74px] absolute bg-white rounded-xl gap-2 outline outline-primary outline-2">
                <img src={logo} alt="logo" className="w-9 h-9" />
                <div className="font-outfit text-primaryLight text-3xl font-medium">{title}</div>
            </div>
            <div className="bg-primary ml-2 mt-2 w-[255px] h-[74px] rounded-xl"> </div>
        </div>
    );
}

export default SkillsButton;