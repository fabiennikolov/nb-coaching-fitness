import React from "react";
import { ProgrammCard } from "@/CustomComponents/Cards";
import { ArrowRight } from "lucide-react";

const Programs = ({ tables, user }) => {
    return (
        <div className="flex-col-3">
            <div className="flex-between">
                <h1 className="text-2xl font-bold">Програми</h1>
            </div>
            {user ? (
                <div className="p-5 rounded-lg border border-red-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
            ) : (
                <div className="relative h-[300px] p-5 rounded-lg border border-red-600 pointer-events-none select-none">
                    <div className="absolute flex flex-col lg:flex-row items-center  gap-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]">
                        <a href="/quiz" className="text-white">
                            <button className="fill-red-button">
                                Take the quiz
                            </button>
                        </a>
                        <a className="text-black" href="#learnMore">
                            <button className="border-red-600 bg-neutral-300 p-2 px-4 rounded-lg text-black">
                                Свържете се с мен
                            </button>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 blur-lg">
                        {Array.from({ length: 1 }).map((_, index) => (
                            <a
                                key={index}
                                className="w-full h-[300px]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="group rounded-sm transition-all">
                                    <img
                                        className="w-[170px] h-auto"
                                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww"
                                    />
                                    <div className="flex-between p-6 bg-neutral-300 group-hover:bg-white">
                                        <div className="flex-col-1">
                                            <h1 className="font-bold text-black text-lg">
                                                blablavlab bla
                                            </h1>
                                            <p> Няма описание</p>
                                            <p className="text-black flex items-center gap-3">
                                                Виж програмата <ArrowRight />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Programs;
