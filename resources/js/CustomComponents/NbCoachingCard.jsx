import React from "react";

import { Download } from "lucide-react";

const NbCoachingCard = ({ img, link, userPermissions, setBlur, blur }) => {
    
    let readBrochurePermission = false;

    if(userPermissions){
        readBrochurePermission = userPermissions.includes("read brochure");
    }

    const checkPermission = () => {
        if (!userPermissions || !userPermissions.includes("read brochure")) {
            setBlur(false);
            return;
        }
        window.location.href = link;
    };
    
    return (
        <div className="flex-col-3 p-3 border bg-neutral-800 border-neutral-700 group hover:border-red-600 rounded-md transition-all">
            <img
                className={'w-full h-[200px] object-cover rounded-md'}
                style={{ filter: (readBrochurePermission ? '': 'blur(3px)') }}
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
                className={`bg-red-600 hover:hover:bg-red-700 p-3 rounded-md flex-center w-full gap-3 text-white hover:bg-neutral-300 transition-all}`}
            >
                Brochure
            </button>
        </div>
    );
};

export default NbCoachingCard;
