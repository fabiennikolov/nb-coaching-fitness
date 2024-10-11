import React from "react";

import { Download } from "lucide-react";

const NbCoachingCard = ({ img, link, userPermissions, setBlur, blur }) => {
    
    console.log(userPermissions)

    const checkPermission = () => {
        if (!userPermissions || !userPermissions.includes("read brochure")) {
            console.log('sadsa')
            setBlur(false);
            return;
        }
        window.location.href = link;
    };
    
    return (
        <div className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all">
            <img
                className={`opacity-20 w-full h-[200px] object-cover rounded-md`}
                style={{ filter: 'blur(3px)' }}
                src={img}
            />
            <div className="flex-between">
                <div className="flex-col-1">
                    <h1 className="font-bold text-white text-lg">NBcoaching</h1>
                </div>
                <Download className="text-white cursor-pointer text-xl" />
            </div>
            <button
                onClick={checkPermission}
                className={`bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all ${blur ? "" : "opacity-20"}`}
            >
                Brochure
            </button>
        </div>
    );
};

export default NbCoachingCard;
