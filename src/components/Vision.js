import VisionImage from '../assests/vision-image.svg';
const Vision = () => {
    return (
        <div className="flex flex-row justify-center items-center mt-20">
            {/* Text Part */}
            <div className="flex flex-col items-start gap-2 w-[525px]" >
                <h1 className="font-outfit text-primaryLight text-lg font-bold">VISION</h1>
                <p className="font-outfit text-black text-lg">Empowering Students with Free Practical Knowledge and Opportunities</p>
                <h2 className="font-outfit text-primary text-4xl font-bold">Shaping a <span className="text-secondary"> Brighter Future</span> in Education and Innovation</h2>
                <h1 className="font-outfit text-primaryLight text-lg font-bold">MISSION</h1>
                <p className="font-outfit text-black text-lg">Delivering Industry-Based and Core Technical Education to Every Student</p>
            </div>
            {/* Image Part */}
            <div className="flex flex-col items-center">
                <img src={VisionImage} alt="vision" />
            </div>
        </div>
    );
}

export default Vision;