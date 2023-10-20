import EventCard from "./Eventcard";

const UpcomingEvents = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <div className="font-outfit text-4xl text-primary font-bold">Upcoming <span className="text-secondary">Events</span></div>
            <div className="flex flex-row justify-between items-center gap-2.5 mt-10">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    );
}

export default UpcomingEvents;