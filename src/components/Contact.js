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
        <div className="flex flex-row justify-between items-start mt-20">
            {/* Logo & Description */}
            <div className="flex flex-col gap-5 items-start">
                <div className="font-outfit text-black text-2xl font-bold ">AIM CLUB</div>
                <div className="font-outfit text-black text-xl font-normal">Empowering Education, Driving Innovation</div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="font-outfit text-primary text-xl font-medium">Contact Us</div>
                    <div className="flex max-w-md gap-x-2">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-adress" name="email" type="email" autoComplete="email" required className="font-outfit text-black text-lg font-normal border border-black rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your email" />
                        <button type="submit" className="font-outfit text-white text-lg font-medium bg-primary hover:bg-primaryLight rounded-md px-4 py-2">Send</button>
                    </div>
                </div>
            </div>
            {/* Links */}
            {Links.map((link, index) => (
                <div key={index} className="flex flex-col gap-5 items-start">
                    <div className="font-outfit text-primary text-xl font-medium">{link.title}</div>
                    <div className="flex flex-col gap-2">
                        {link.links.map((link, index) => (
                            <div key={index} className="font-outfit text-black text-lg font-normal hover:underline duration-150 cursor-pointer  ">{link}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Contact;