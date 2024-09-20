import React from "react";

import { Download } from "lucide-react";

const NbCoachingCard = ({ img, brochureLink, }) => {
    return (
        <div className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all">
            <img
                className="w-full h-[200px] object-cover rounded-md"
                src={img}
            />
            <div className="flex-between">
                <div className="flex-col-1">
                    <h1 className="font-bold text-white text-lg">
                        Nb Coaching
                    </h1>
                </div>
                <Download className="text-white cursor-pointer text-xl" />
            </div>
            <a className="w-full text-black" href={brochureLink}>
                <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                    Brochure
                </button>
            </a>
        </div>
    );
};

export default NbCoachingCard;
