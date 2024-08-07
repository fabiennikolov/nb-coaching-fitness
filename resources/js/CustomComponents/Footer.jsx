import { footerLinks } from "@/Constants/StaticData";
import React from "react";

const Footer = () => {
    return (
        <div className="flex-col-3 bg-[var(--mainDarkenLightColor)] min-h-[40vh] overflow-hidden">
            <div className="larger-max-w-wrapper w-full flex flex-col lg:flex-row items-start justify-start gap-5 lg:gap-56 py-10 relative">
                <div className="flex-col-3">
                    <img src="/assets/logo.png" alt="footer_logo" />
                    <p>Build a better body with SB Coacing.</p>
                    <button className="fill-button">Register</button>
                    <h1 className="hidden lg:flex absolute special-footer-outline-text text-[10em] -right-[30%] font-bold leading-[70px] mt-20 uppercase bottom-0">
                        SB Coaching
                    </h1>
                </div>
                {footerLinks.map((link, index) => (
                    <div className="flex-col-4" key={index}>
                        <h1 className="text-xl font-bold">{link.name}</h1>
                        <ul className="flex-col-3">
                            {link.links.map((subLink, index) => (
                                <li key={index}>
                                    <a href={subLink.path}>{subLink.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <span className="bg-[var(--mainDarkLightColor)] w-full h-[0.5px]"></span>
            <div className="larger-max-w-wrapper w-full">
                <p className="w-full">
                    © {new Date().getFullYear()} Copywrite NB Coaching. All
                    rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
