import image3 from '../assests/image-3.png';
import image4 from '../assests/image-4.png';

const ImageSection2 = () => {
    return (
        <div className="flex flex-col-reverse items-start justify-center">
            <img src={image3} alt='image1' className="w-[255px] h-[170px] rounded-xl" />
            <div className="flex flex-col font-outfit my-2">
                <h1 className="text-4xl font-extrabold text-primary">200 +</h1>
                <h2 className="text-2xl font-extrabold text-secondary">Registrations</h2>
            </div>
            <img src={image4} alt='image2' className="w-[255px] h-[384px] rounded-xl" />
        </div>
    );
}

export default ImageSection2;