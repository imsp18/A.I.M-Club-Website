import image1 from '../assests/image-1.png';
import image2 from '../assests/image-2.png';

const ImageSection1 = () => {
    return (
        <div className="flex flex-col items-start justify-center">
            <img src={image1} alt='image1' className="w-[255px] h-[170px] rounded-xl max-sm:w-[152px] max-sm:h-[101px]" />
            <div className="flex flex-col font-outfit my-2">
                <h1 className="text-4xl font-extrabold text-primary">10 +</h1>
                <h2 className="text-2xl font-extrabold text-secondary">Events</h2>
            </div>
            <img src={image2} alt='image2' className="w-[255px] h-[384px] rounded-xl max-sm:w-[152px] max-sm:h-[229px]" />
        </div>
    );
}

export default ImageSection1;