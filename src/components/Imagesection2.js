import image3 from '../assests/image-3.png';
import image4 from '../assests/image-4.png';

const ImageSection2 = () => {
    return (
        <div className="flex flex-col-reverse items-start justify-center">
            <img src={image3} alt='image1' className="w-[255px] h-[170px] rounded-xl max-sm:w-[152px] max-sm:h-[101px] " />
            <div className="flex flex-col font-outfit my-2">
                <h1 className="text-4xl font-extrabold text-primary max-sm:text-2xl">200 +</h1>
                <h2 className="text-2xl font-extrabold text-secondary max-sm:text-xl">Registrations</h2>
            </div>
            <img src={image4} alt='image2' className="w-[255px] h-[384px] rounded-xl max-sm:w-[152px] max-sm:h-[229px]" />
        </div>
    );
}

export default ImageSection2;