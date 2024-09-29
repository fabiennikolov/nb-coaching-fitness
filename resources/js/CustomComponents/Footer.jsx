import { footerLinks } from "@/Constants/StaticData";
import { usePage } from "@inertiajs/react";
import React from "react";

const Footer = () => {
    const { auth } = usePage().props;

    return (
        <div className="flex-col-3 mt-5 lg:mt-0 bg-[var(--mainDarkenLightColor)] min-h-[40vh] overflow-hidden z-1">
            <div className="larger-max-w-wrapper w-full grid-4 gap-5 lg:gap-56 py-10 relative">
                <div className="flex-col-3">
                    <img
                        className="h-auto w-[200px]"
                        src="/assets/logo.png"
                        alt="footer_logo"
                    />
                    <div className="px-5">
                        <h1 className="z-0 hidden xl:flex absolute special-footer-outline-text text-[10em] -right-[30%] font-bold leading-[70px] mt-20 uppercase bottom-0">
                            NBCoaching
                        </h1>
                    </div>
                </div>
                {footerLinks.map((link, index) => (
                    <div className="flex-col-4 z-[10000]" key={index}>
                        <h1 className="text-xl font-bold">{link.name}</h1>
                        <ul className="flex-col-3 px-5">
                            {link.links.map((subLink, index) => (
                                <li key={index} className="list-disc ">
                                    <a
                                        className="hover:text-white transition-all"
                                        href={subLink.path}
                                    >
                                        {subLink.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <span className="bg-[var(--mainDarkLightColor)] w-full h-[0.5px]"></span>
            <div className="larger-max-w-wrapper w-full">
                <p className="w-full p-5">
                    ©{new Date().getFullYear()} Nbcoaching Всички права са
                    запазени
                </p>
            </div>
        </div>
    );
};

export default Footer;
