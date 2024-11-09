import React from "react";

import { usePage } from "@inertiajs/react";
import { footerLinks } from "@/Constants/StaticData";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
    const { auth } = usePage().props;

    return (
        <div className="flex-col-3 mt-5 lg:mt-0 bg-[var(--mainDarkenLightColor)] min-h-[40vh] overflow-hidden z-1 lg:px-10">
            <div className="larger-max-w-wrapper w-full grid-3 justify-between gap-5 lg:gap-56 py-10 relative">
                <div className="flex-col-3">
                    <img
                        className="h-auto w-[200px]"
                        src="/assets/logo.png"
                        alt="footer_logo"
                    />
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-neutral-800 rounded-full">
                            <MessageCircle className="text-white" />
                        </div>
                        <div className="p-2 bg-neutral-800 rounded-full">
                            <Instagram className="text-white" />
                        </div>
                    </div>
                </div>
                {footerLinks.map((link, index) => (
                    <div className="flex-col-4 z-[10000]" key={index}>
                        <h1 className="text-xl text-stone-400">{link.name}</h1>
                        <ul className="flex-col-3 px-5">
                            {link.links.map((subLink, index) => (
                                <li
                                    className="flex items-center gap-3 -ml-5"
                                    key={index}
                                >
                                    <i className="text-white">{subLink.icon}</i>
                                    <a
                                        className="text-white"
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
            <div className=" w-full flex flex-col lg:flex-row justify-center lg:items-center gap-3 p-5">
                <p>Настройки за бисквитките</p>
                <p>Условия и правила за ползване</p>
                <p>Защити и сигурност</p>
                <p>Всички права запазени ©{new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer;
