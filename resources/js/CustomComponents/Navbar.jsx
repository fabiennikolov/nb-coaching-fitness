import { navbarLinks } from "@/Constants/StaticData";
import { useEffect, useRef, useState } from "react";

import { Menu, X } from "lucide-react";

const Navbar = () => {
    const sidebarRef = useRef();
    const navbarRef = useRef();

    const [toggleIcon, setToggleIcon] = useState(true);

    const toggleSidebar = () => {
        sidebarRef.current.classList.toggle("active");
        setToggleIcon((prev) => !prev);
    };

    useEffect(() => {
        window.onscroll = function () {
            scrollFucntion();
        };

        const scrollFucntion = () => {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                navbarRef.current.classList.add("shadow-xl");
                navbarRef.current.classList.add(
                    "bg-[var(--mainDarkenLightColor)]"
                );
            } else {
                navbarRef.current.classList.remove("shadow-xl");
                navbarRef.current.classList.remove(
                    "bg-[var(--mainDarkenLightColor)]"
                );
            }
        };
    }, []);

    return (
        <div
            ref={navbarRef}
            className="w-full fixed  left-1/2 -translate-x-1/2  z-[10000] transition-all"
        >
            <div className="w-full  flex-between max-w-wrapper h-[80px]">
                <div className="p-3">
                    <img
                        className="h-auto w-[150px]"
                        src="/assets/logo.png"
                        alt="logo"
                    />
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
                    <button className="outline-button">
                        <a className="text-white" href="/login">
                            Login
                        </a>
                    </button>
                </div>
                <Menu
                    className="flex sm:hidden text-white cursor-pointer"
                    size={30}
                    onClick={toggleSidebar}
                />

                <div className="sidebar" ref={sidebarRef}>
                    <X
                        className="absolute right-5 top-5 flex lg:hidden text-[#dc2626] cursor-pointer"
                        size={30}
                        onClick={toggleSidebar}
                    />
                    <img
                        src="/assets/logo.png"
                        className="h-auto w-[150px]"
                        alt="logo"
                    />
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
        </div>
    );
};

export default Navbar;
