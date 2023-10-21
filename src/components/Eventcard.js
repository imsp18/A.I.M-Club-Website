import LocationIcon from "../assests/location.svg";
import ClockIcon from "../assests/clock.svg";
import ArrowRight from "../assests/arrow-right.svg";

const EventCard = ({eventImage, location, time, eventName}) => {
    return (
        <div >
            <div className="flex flex-col w-[345px] h-[345px] p-4 rounded-3xl outline absolute bg-white outline-secondary outline-2">
                {/* Event Image */}
                <img src={eventImage} alt="event" className="rounded-t-lg" />
                {/* Event Info */}
                <div className="flex flex-row gap-2 items-center w-full mt-1">
                    {/* Location */}
                    <div className="flex flex-row items-center gap-0.5">
                        <img src={LocationIcon} alt="location" className="h-6 w-6" />
                        <div className="font-outfit text-center text-black text-sm font-normal">{location}</div>
                    </div>
                    <div className="flex flex-row items-center gap-0.5">
                        <img src={ClockIcon} alt="location" className="h-6 w-6" />
                        <div className="font-outfit text-center text-black text-sm font-normal">{time}</div>
                    </div>
                </div>
                {/* Event Title */}
                <div className="font-outfit items-start text-primary text-lg font-bold mt-2">{eventName}</div>
                {/* Event Registration */}
                <div className="flex flex-row justify-center items-center mt-3 rounded-xl hover:bg-slate-200 p-1 duration-100 ease-out w-36     hover:scale-105 cursor-pointer">
                    <div className="font-outfit text-black text-md font-semibold">Register Now</div>
                    <img src={ArrowRight} alt="arrow" className="h-4 w-4 ml-1" />
                </div>
            </div>
            <div className="w-[345px] h-[345px] ml-2 mt-2 bg-secondary rounded-3xl "></div>
        </div>
    );
}

export default EventCard;