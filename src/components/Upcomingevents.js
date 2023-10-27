import EventCard from "./Eventcard";
import event1 from "../assests/event-image.png";

const UpcomingEvents = () => {
    const events = [
        { eventImage: event1, location: "Aeronautical Auditorium", time: "10:00 AM", eventName: "Robotics Workshop" },
        { eventImage: event1, location: "Aeronautical Auditorium", time: "10:00 AM", eventName: "Robotics Workshop" },
        { eventImage: event1, location: "Aeronautical Auditorium", time: "10:00 AM", eventName: "Robotics Workshop" }
    ];

    const maxEventsToShowOnSmallScreen = 1;

    return (
        <div className="flex flex-col items-center mt-20 max-sm:mt-10">
            <div className="font-outfit text-4xl text-primary font-bold max-sm:text-2xl">Upcoming <span className="text-secondary">Events</span></div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2.5 mt-10">
                {events.slice(0, maxEventsToShowOnSmallScreen).map((event, index) => (
                    <EventCard key={index} eventImage={event.eventImage} location={event.location} time={event.time} eventName={event.eventName} />
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;
