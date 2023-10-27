import Button from "./Button";
import chevronRight from "../assests/chevron-right.svg";

const MembershipCard = () => {
    const buttonInfo = [
        { title: 'Start Your Membership', logo: chevronRight }
    ];
    return (
        <div className="flex flex-col h-[316px] bg-gradient-to-r from-secondary to-primary rounded-3xl max-sm:rounded-[18px] justify-center mt-20 max-sm:mt-10 max-sm:h-[165px]">
            <div className="flex flex-col mx-[90px] gap-10 max-sm:gap-3 max-sm:mx-[26px] justify-center">
                <div className="flex flex-col gap-6 items-center  max-sm:gap-1">
                    {/* Topic */}
                    <div className="font-outfit text-xl uppercase text-background font-semibold max-sm:text-xs">Get Enrolled</div>
                    {/* Description */}
                    <div className="font-outfit text-4xl text-white font-bold max-sm:text-lg">Unlock a World of Opportunities with Our Membership: Join for Just 50 Rupees a Month !</div>
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