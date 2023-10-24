import Button from "./Button";
import chevronRight from "../assests/chevron-right.svg";

const MembershipCard = () => {
    const buttonInfo = [
        { title: 'Start Your Membership', logo: chevronRight }
    ];
    return (
        <div className="flex flex-col h-[316px] bg-gradient-to-r from-primary to-secondary rounded-3xl justify-center mt-20">
            <div className="flex flex-col mx-[90px] my">
                <div className="flex flex-col gap-6 items-center mb-12">
                    {/* Topic */}
                    <div className="font-outfit text-xl uppercase text-background font-semibold">Get Enrolled</div>
                    {/* Description */}
                    <div className="font-outfit text-4xl text-white font-bold ">Unlock a World of Opportunities with Our Membership: Join for Just 50 Rupees a Month !</div>
                </div>
                <div className="flex items-start">
                {buttonInfo.map((buttonInfo, index) => (
                    <Button key={index} title={buttonInfo.title} logo={buttonInfo.logo} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default MembershipCard;