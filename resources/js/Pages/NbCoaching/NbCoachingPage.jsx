import React, { useState } from "react";
import Navbar from "@/CustomComponents/Navbar";
import NbCoachingCard from "@/CustomComponents/NbCoachingCard";
import BrochureCotroller from "@/Controllers/BorchureController";

import { brochures } from "@/Constants/StaticData";

const NbCoachingPage = (props) => {
    const [blur, setBlur] = useState(true);

    const { tables, userPermissions } = props;

    const {
        confirmUserDeletion,
        closeModal,
        confirmingUserDeletion,
        handleChange,
        auth,
    } = BrochureCotroller();

    return (
        <div>
            {!blur && (
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex-col-1 z-[100000] w-full">
                    <h1 className="text-2xl font-bold">
                        {auth
                            ? "Регистрацията е успешна!"
                            : "Не си регистриран!"}
                    </h1>
                    <p className="max-w-sm text-stone-300 mx-auto">
                        {auth
                            ? "Регистриран сте, но нямате достъп до таблиците. Изчакайте одобрение, за да видите информацията."
                            : "Свържи се с мен за да повече информация"}
                    </p>
                    {auth ? (
                        ""
                    ) : (
                        <div className="flex-2 justify-center">
                            <a
                                href="/contact"
                                className="text-black mt-2 border-none"
                            >
                                <button className="fill-button">Контакт</button>
                            </a>
                            <a href="/login" className="text-black mt-2">
                                <button className="fill-button">Вход</button>
                            </a>
                        </div>
                    )}
                </div>
            )}
            <div className={blur ? "" : "overflow-hidden max-h-screen"}>
                <Navbar />
                <div className="flex-col-3 max-w-wrapper py-28">
                    <div
                        className={`${
                            blur
                                ? ""
                                : "overflow-hidden max-h-screen blur-lg pointer-events-none select-none z-[1000]"
                        } flex-col-2`}
                    >
                        <h1 className="text-2xl font-bold">Наръчници</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[50vh] justify-center items-center">
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
                    <div
                        className={`${
                            blur
                                ? ""
                                : "overflow-hidden max-h-screen blur-lg pointer-events-none select-none"
                        } flex-col-2`}
                    >
                        <div className="flex-between">
                            <h1 className="text-2xl font-bold">Програми</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {blur ? (
                                tables.map((table, id) => (
                                    <div
                                        key={id}
                                        className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all"
                                    >
                                        <iframe
                                            className="h-[200px] w-full pointer-events-none blur-sm"
                                            src={table.url}
                                        />
                                        <div className="flex-between">
                                            <div className="flex-col-1">
                                                <h1 className="font-bold text-white text-lg">
                                                    {table.name}
                                                </h1>
                                            </div>
                                        </div>
                                        <a
                                            className="w-full text-black"
                                            href={table.url}
                                        >
                                            <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                                                See
                                            </button>
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <NbCoachingCard />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingPage;
