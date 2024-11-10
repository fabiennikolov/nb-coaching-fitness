import React from "react";

import { ArrowRight, Download } from "lucide-react";

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
        <div onClick={checkPermission} className="group rounded-sm transition-all">
            <img
                className={'w-full h-[200px] object-cover rounded-t-sm'}
                src={img}
            />
            <div className="flex-between p-6 bg-neutral-300 group-hover:bg-white">
                <div className="flex-col-1">
                    <h1 className="font-bold text-black text-lg">Наръчник за хранене</h1>
                    <p className="text-black flex items-center gap-3">Прочети наръчника <ArrowRight/></p>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingCard;
