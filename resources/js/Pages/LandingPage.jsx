import React from "react";
import Navbar from "@/CustomComponents/Navbar";

import { usePage } from "@inertiajs/react";
import { ContainerScroll } from "@/CustomComponents/ui/container-scroll-animation";
import { aboutCards, headerDataText } from "@/Constants/StaticData";

import Footer from "@/CustomComponents/Footer";

const Welcome = (props) => {
    const { title, subtitle, description } = headerDataText;

    const { auth, permissions } = props;

    return (
        <div className="relative">
            <img
                className="absolute opacity-[0.02] lg:opacity-30 left-[-12%] top-[10%] z-[-1]"
                src="/assets/white-dots.png"
            />
            <Navbar />
            <header className="flex flex-col overflow-hidden px-5">
                <ContainerScroll
                    titleComponent={
                        <div className="flex-col-5 mb-14 mt-10">
                            <div className="flex flex-col items-center justify-center font-bold">
                                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold dark:text-white">
                                    Добре дошли в
                                </h1>
                                <span className="text-5xl sm:text-7xl lg:text-9xl gradient-text font-bold ml-2">
                                    NBcoaching
                                </span>
                            </div>

                            <p className="m-3">{description}</p>
                            <div className="flex flex-col md:flex-row gap-3 items-center flex-center w-full">
                                <a
                                    className="text-black w-full md:w-max"
                                    href={auth.user ? "/profile" : "/login"}
                                >
                                    <button className="fill-button">
                                        {auth.user ? "Профил" : "Вход"}
                                    </button>
                                </a>
                                <a
                                    href="#научи-повече"
                                    className="outline-button text-black"
                                >
                                    Научи повече
                                </a>
                            </div>
                        </div>
                    }
                >
                    <img
                        src={`/assets/panel.jpg`}
                        alt="hero"
                        height={420}
                        width={700}
                        className="mx-auto w-full object-contain rounded-2xl h-auto"
                        draggable={false}
                    />
                </ContainerScroll>
            </header>

            <section
                id="научи-повече"
                className="flex-col-5 flex-center min-h-[80vh] my-10"
            >
                <div className="flex-col-3 text-center px-5">
                    <h1 className="font-bold text-3xl lg:text-6xl">
                        Какво включва NBcoaching?
                    </h1>
                </div>
                <div className="max-w-wrapper grid-3 gap-3">
                    {aboutCards.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-col-3 bg-neutral-900 border border-neutral-800 p-5 rounded-md overflow-hidden"
                        >
                            <i
                                className="absolute -right-[20%] z-0 -top-10 text-orange-600 opacity-[0.25]"
                                size={200}
                            >
                                {item.icon}
                            </i>
                            <div className="flex-col-1 z-10">
                                <h1 className="text-xl font-bold">
                                    {item.heading}
                                </h1>
                                <p>{item.p}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-20 flex-center min-h-[80vh] relative overflow-hidden my-10">
                <img
                    className="absolute opacity-[0.02] lg:opacity-30 right-[-12%] top-[40%] z-[-1]"
                    src="/assets/white-dots.png"
                />
                <div className="flex-col-3 lg:text-center px-5">
                    <h1 className="font-bold text-3xl lg:text-6xl">
                        За кого е подходяща услугата?
                    </h1>
                    <p className="max-w-[800px] mx-auto">
                        Услугата е насочена към хора, които имат минимум 6
                        месеца опит в тренировките и искат да напреднат и да
                        достигнат нови висоти във фитнеса. Ако сте готови да
                        направите сериозна промяна и да работите усилено за
                        постигане на Вашите цели, аз съм тук, за да Ви помогна.
                    </p>
                </div>
                <div className="max-w-2xl px-5 2xl:px-0 grid-3 gap-10 items-center justify-center">
                    <div className="w-full flex items-center lg:justify-end">
                        <img
                            src="/assets/coach.JPG"
                            className="w-[150px] h-[150px] object-cover object-top rounded-full border-2 border-neutral-100"
                        />
                    </div>

                    <div className="flex-col-5 col-span-2">
                        <div>
                            <p>За мен</p>
                            <h1 className="text-2xl md:text-4xl font-bold">
                                Никола Бугов
                            </h1>
                        </div>

                        <p>
                            Аз съм Никола Бугов, сертифициран фитнес треньор с
                            повече от 2 години опит в работата с клиенти от
                            различни нива на физическа подготовка. През това
                            време съм помогнал на много хора да постигнат своите
                            фитнес цели, независимо дали става въпрос за
                            отслабване, изграждане на мускулна маса или просто
                            за подобряване на общото им здравословно състояние.
                        </p>
                        <p>
                            Запишете се за безплатна консултация и започнете
                            своята трансформация. С NBcoaching имате всичко
                            необходимо, за да реализирате амбициите си.
                        </p>

                        <div className="relative flex-col-3 bg-[var(--mainDarkenLightColor)] p-5 mt-10 rounded-md overflow-hidden border-2  border-neutral-800">
                            <i
                                className="absolute -right-[20%] z-0 -top-10 text-orange-600 opacity-[0.25]"
                                size={200}
                            ></i>
                            <div className="flex-col-1 z-10">
                                <h1 className="text-xl font-bold ">
                                    Интересувате се от персонални тренировки?
                                </h1>
                                <p>
                                    Предлагам индивидуален подход, съобразен с
                                    вашите цели и нужди. За повече информация,
                                    свържете се с мен.
                                </p>
                            </div>
                            <a href="/contact" className="text-black">
                                <button className="fill-button ">Контакт</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Welcome;
