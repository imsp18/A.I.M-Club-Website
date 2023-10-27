const Contact = (title, links) => {

    const Links = [
        {
            title: "About",
            links: [
                "Our Vision",
                "Our Mission",
                "Learn About"
            ]
        },
        {
            title: "Events",
            links: [
                "Upcoming Events",
                "Previous Events"
            ]
        },
        {
            title: "Team",
            links: [
                "Our Team",
                "Become a Member"
            ]
        },
        {
            title: "Membership",
            links: [
                "Become a member",
                "Membership Benefits"
            ]
        }

    ];
    return (
        <div className="flex flex-row justify-between items-start mt-20 max-sm:mt-10 max-sm:flex-wrap max-sm:gap-4">
            {/* Logo & Description */}
            <div className="flex flex-col gap-5 items-start max-sm:gap-2">
                <div className="font-outfit text-black text-2xl font-bold max-sm:text-lg">AIM CLUB</div>
                <div className="font-outfit text-black text-xl font-normal max-sm:text-sm">Empowering Education, Driving Innovation</div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="font-outfit text-primary text-xl font-medium max-sm:text-lg">Contact Us</div>
                    <div className="flex max-w-md gap-x-2">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-adress" name="email" type="email" autoComplete="email" required className="font-outfit text-black text-lg font-normal border border-black rounded-md w-full max-sm:text-sm max-sm:px-2 max-sm:py-1 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your email" />
                        <button type="submit" className="font-outfit text-white text-lg font-medium bg-primary hover:bg-primaryLight rounded-md px-4 py-2 max-sm:text-sm">Send</button>
                    </div>
                </div>
            </div>
            {/* Links */}
            <div className="flex flex-row items-start justify-between gap-12 max-sm:gap-10 max-sm:flex-wrap">
                {Links.map((link, index) => (
                    <div key={index} className="flex flex-col gap-5 items-start max-sm:gap-2">
                        <div className="flex flex-col font-outfit text-primary text-xl font-medium max-sm:text-lg ">{link.title}</div>
                        <div className="flex flex-col items-start gap-2 max-sm:gap-1">
                            {link.links.map((link, index) => (
                                <div key={index} className="font-outfit text-black text-lg font-normal hover:underline duration-150 cursor-pointer max-sm:text-sm">{link}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;