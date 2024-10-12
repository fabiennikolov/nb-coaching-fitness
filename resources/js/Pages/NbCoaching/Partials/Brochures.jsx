import React from "react";
import NbCoachingCard from "@/CustomComponents/NbCoachingCard";

import { brochures } from "@/Constants/StaticData";

const Brochures = ({ blur, userPermissions, setBlur }) => {
    return (
        <div
            className={`${  
                blur
                    ? ""
                    : "overflow-hidden max-h-screen blur-lg pointer-events-none select-none z-[1000]"
            } flex-col-5`}
        >
            <h1 className="text-2xl font-bold">Наръчници</h1>
            <div className=" p-5 rounded-lg border border-neutral-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                {brochures.map((brochure, id) => (
                    <NbCoachingCard
                        blur={blur}
                        setBlur={setBlur}
                        userPermissions={userPermissions}
                        {...brochure}
                        key={id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Brochures;
