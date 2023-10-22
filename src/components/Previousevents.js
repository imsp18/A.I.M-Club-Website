import ImageSection1 from "./Imagesection1";
import ImageSection2 from "./Imagesection2";

const PreviousEvents = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="font-outfit text-4xl text-primary font-bold"><span className="text-secondary">Previous</span> Events</div>
            <div className="flex flex-row justify-between items-center gap-[15px] mt-10">
                <ImageSection1 />
                <ImageSection2 />
                <ImageSection1 />
                <ImageSection2 />
            </div>
        </div>
    );
}

export default PreviousEvents;