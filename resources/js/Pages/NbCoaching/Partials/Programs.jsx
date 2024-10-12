import React from "react";
import { ProgrammCard } from "@/CustomComponents/Cards";

const Programs = ({ tables }) => {
    return (
        <div className="flex-col-3">
            <div className="flex-between">
                <h1 className="text-2xl font-bold">Програми</h1>
            </div>
            <div className="p-5 rounded-lg border border-neutral-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {tables?.length > 0 ? (
                    tables.map((table, id) => (
                       <ProgrammCard {...table} key={id} />
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full h-[200px] border border-neutral-800 rounded-md p-5 text-white col-span-1 sm:col-span-2 lg:col-span-4">
                        Моля изчакайте добавяне на програми.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Programs;
