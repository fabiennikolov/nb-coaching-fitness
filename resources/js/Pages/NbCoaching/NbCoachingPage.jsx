import React from "react";
import Navbar from "@/CustomComponents/Navbar";

import { Download } from "lucide-react";

const NbCoachingPage = (props) => {

    console.log(props)

    return (
        <div>
            <Navbar />
            <div className="max-w-wrapper">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 min-h-[50vh] justify-center items-center py-20">
                    <div className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all">
                        <img
                            className="w-full h-[200px] object-cotain rounded-md"
                            src="https://cdn.discordapp.com/attachments/1270095587718725632/1279771157515735121/image.png?ex=66d5a744&is=66d455c4&hm=e8e5461d2e4b7ed60f178f81694387f337f673de41eb46d344dcedd6f3e13f5f&"
                        />
                        <div className="flex-between">
                            <div className="flex-col-1">
                                <p>2x6.08.2024 – 01.09.2024</p>
                                <h1 className="font-bold text-white text-lg">
                                    Nb Coaching
                                </h1>
                            </div>
                            <Download className="text-white cursor-pointer text-xl" />
                        </div>
                        <a className="w-full text-black" href="/nb-coaching/brochure">
                            <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                                Brochure
                            </button>
                        </a>
                    </div>
                    <div className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all">
                        <img
                            className="w-full h-[200px] object-cotain rounded-md"
                            src="https://cdn.discordapp.com/attachments/1270095587718725632/1279771157515735121/image.png?ex=66d5a744&is=66d455c4&hm=e8e5461d2e4b7ed60f178f81694387f337f673de41eb46d344dcedd6f3e13f5f&"
                        />
                        <div className="flex-between">
                            <div className="flex-col-1">
                                <p>2x6.08.2024 – 01.09.2024</p>
                                <h1 className="font-bold text-white text-lg">
                                    Nb Coaching
                                </h1>
                            </div>
                            <Download className="text-white cursor-pointer text-xl" />
                        </div>
                        <a className="w-full text-black" href="/nb-coaching/brochure">
                            <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                                Brochure
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingPage;
