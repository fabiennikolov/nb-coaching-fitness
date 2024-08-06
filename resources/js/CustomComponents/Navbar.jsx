import { navbarLinks } from "@/Constants/StaticData";
import { useRef, useState } from "react";

import { Menu, X } from "lucide-react";

const Navbar = () => {
    const sidebarRef = useRef();

    const [toggleIcon, setToggleIcon] = useState(true);

    const toggleSidebar = () => {
        sidebarRef.current.classList.toggle("active");
        setToggleIcon((prev) => !prev);
    };

    return (
        <div className="flex-between max-w-wrapper h-[80px]">
            <div className="p-3">
                <img src="/img/logo.png" alt="logo" />
            </div>
            <ul className="hidden sm:flex gap-3 items-center">
                {navbarLinks.map((link, index) => (
                    <li key={index}>
                        <a
                            className="hover:text-white transition-all cursor-pointer"
                            href={link.href}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flex gap-3">
                <button className="outline-button">Login</button>
                <button className="fill-button">Learn More</button>
            </div>
            <Menu
                className="flex sm:hidden text-white cursor-pointer"
                size={30}
                onClick={toggleSidebar}
            />

            <div className="sidebar" ref={sidebarRef}>
                <X
                    className="absolute right-5 top-5 flex lg:hidden text-red-600 cursor-pointer"
                    size={30}
                    onClick={toggleSidebar}
                />
                <img src="/img/logo.png" alt="logo" />
                <ul className="flex-col-3">
                    {navbarLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                className="hover:text-white transition-all cursor-pointer"
                                href={link.href}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
