import TeamCard from "./Teamcard";
import Member1 from "../assests/member-1.png";
const TeamSection = () => {
    const memberInfo = [
        { memberImage: Member1, memberName: "Name", memberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod." },
        { memberImage: Member1, memberName: "Name", memberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod." },
        { memberImage: Member1, memberName: "Name", memberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod." }  
    ];
    const maxMemberToShowOnSmallScreen = 1;
    return (
        <div className="flex flex-col items-center justify-center mt-20 max-sm:mt-10">
            <div className="font-outfit text-4xl text-primary font-bold max-sm:text-2xl">Meet the<span className="text-secondary"> Team</span></div>
            <div className="flex flex-row flex-wrap justify-between items-center mt-32">
                {memberInfo.slice(0, maxMemberToShowOnSmallScreen).map((member, index) => (
                    <TeamCard key={index} memberImage={member.memberImage} memberName={member.memberName} memberDescription={member.memberDescription} />
                ))}
            </div>
        </div>
    );
}

export default TeamSection;