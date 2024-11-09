
import React, { useState } from "react";
import Navbar from "@/CustomComponents/Navbar";
import BrochureCotroller from "@/Controllers/BorchureController";

import Programs from "./Partials/Programs";
import Brochures from "./Partials/Brochures";
import Progres from "./Partials/Progres";

const NbCoachingPage = (props) => {
    const { user, images, tables, userPermissions } = props;
    const { auth } = BrochureCotroller();

    const [ isModalTwoOpen, setIsModalTwoOpen ] = useState(false)

    const [blur, setBlur] = useState(true);
    return (
        <div>
            {!blur && (
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex-col-1 z-[100000] w-fit">
                    <h1 className="text-2xl font-bold">
                        {auth.user
                            ? "Регистрацията ви е приета!"
                            : "Влезте в профила си!"}
                    </h1>
                    <p className="max-w-sm text-stone-300 mx-auto">
                        {auth.user
                            ? "Вашата информация ще бъде прегледана, за да потвърдя акаунта ви. Ще се свържа с вас възможно най-скоро с допълнителна информация на посочения от вас имейл."
                            : "Тази услуга е достъпна само за регистрирани потребители. Ако нямате профил, моля, регистрирайте се или се свържете с мен."}
                    </p>
                    {auth.user ? (
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
                <div className="max-w-wrapper py-28">
                    <div
                        className={`${
                            blur
                                ? ""
                                : "overflow-hidden max-h-screen blur-lg pointer-events-none select-none"
                        } flex-col-10`}
                    >
                        <Brochures
                            userPermissions={userPermissions}
                            setBlur={setBlur}
                            blur={blur}
                        />
                        <Programs tables={tables}/>
                        <Progres
                            user={user}
                            images={images}
                            auth={auth}
                            setIsModalTwoOpen={setIsModalTwoOpen}
                            isModalTwoOpen={isModalTwoOpen}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingPage;
