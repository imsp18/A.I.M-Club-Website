import TeamCard from "./Teamcard";
const TeamSection = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="font-outfit text-4xl text-primary font-bold">Meet the<span className="text-secondary"> Team</span></div>
            <div className="flex flex-row flex-wrap justify-between items-center mt-32">
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </div>
    );
}

export default TeamSection;