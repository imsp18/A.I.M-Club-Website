import ArrowUpRight from "../assests/arrow-up-right1.svg"

const Footer = (socials, socialIcon) => {

    const socialLink = [
        { social: 'WhatsApp', socialIcon: ArrowUpRight },
        { social: 'X', socialIcon: ArrowUpRight },
        { social: 'LinkedIn', socialIcon: ArrowUpRight },
        { social: 'Instagram', socialIcon: ArrowUpRight }
    ]
    // Getting current year
    console.log(new Date().getFullYear());
    return (
        <div className="flex flex-row max-sm:flex-col justify-between items-center px-[90px] max-sm:px-[27px] bg-secondary h-[90px] mt-20 rounded-t-3xl max-sm:rounded-t-2xl max-sm:mt-10 max-sm:justify-center max-sm:gap-4">
            {/* Copyright */}
            <div className="text-center font-outfit text-lg font-medium text-[#263238] max-sm:text-sm">
                <p>A.I.M. Club © {new Date().getFullYear()}</p>
            </div>
            {/* Social Links */}
            <div className="flex gap-6">
                {socialLink.map((social, index) => (
                    <div key={index} className="flex gap-0 items-center hover:underline duration-100 ease-in cursor-pointer">
                        <p className="font-outfit text-lg text-[#263238] max-sm:text-sm">{social.social}</p>
                        <img src={social.socialIcon} alt="social-icon" className=" ml-2 max-sm:ml-1" />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Footer;