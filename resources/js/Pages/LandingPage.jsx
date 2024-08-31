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
            <header className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <div className="flex-col-5 mb-14 mt-10">
                            <h1 className="text-3xl md:text-4xl font-semibold dark:text-white">
                                {title} <br />
                                <span className="text-4xl md:text-6xl lg:text-[6rem] font-bold mt-1 leading-none">
                                    {subtitle}
                                </span>
                            </h1>
                            <p className="m-3">{description}</p>
                            <div className="flex flex-col md:flex-row gap-3 items-center flex-center w-full">
                                <a
                                    className="text-white w-full md:w-max"
                                    href={auth.user ? "/profile" : "/login"}
                                >
                                    <button className="outline-button">
                                        {auth.user ? "Профил" : "Вход"}
                                    </button>
                                </a>
                                <button className="fill-button">
                                    Научи повече
                                </button>
                            </div>
                        </div>
                    }
                >
                    <img
                        src={`/assets/panel.png`}
                        alt="hero"
                        height={720}
                        width={1000}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </header>

            <section className="flex-col-5 flex-center min-h-[80vh] my-10">
                <div className="flex-col-3 text-center">
                    <h1 className="font-bold text-3xl lg:text-6xl">
                        It's time to trust yourself
                    </h1>
                    <p className="max-w-[800px] mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt recusandae saepe accusamus quo consequatur quia
                        nam quis aspernatur esse. Accusamus!
                    </p>
                </div>
                <div className="max-w-wrapper grid-3 gap-3">
                    {aboutCards.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-col-3 bg-[var(--mainDarkenLightColor)] p-5 rounded-md overflow-hidden"
                        >
                            <i
                                className="absolute -right-[20%] z-1 -top-10 text-orange-600 opacity-[0.5]"
                                size={200}
                            >
                                {item.icon}
                            </i>
                            <h1 className="text-xl font-bold">
                                {item.heading}
                            </h1>
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-20 flex-center min-h-[80vh] relative overflow-hidden my-10">
                <img
                    className="absolute opacity-[0.02] lg:opacity-30 right-[-12%] top-[40%] z-[-1]"
                    src="/assets/white-dots.png"
                />
                <div className="flex-col-3 text-center">
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
                <div className="max-w-wrapper grid-2 gap-10 ">
                    <div className="relative flex-center">
                        <div className="bg-neutral-900 p-3 rounded-lg">
                            <img
                                className={`${
                                    !auth.user && "blur-lg"
                                } rounded-lg`}
                                src="/assets/panel.png"
                                alt="panel"
                            />
                        </div>
                        {!auth.user && (
                            <div className="absolute text-center mx-auto flex-center flex-col">
                                <h1 className="text-3xl font-bold">
                                    Doesnt have an account?
                                </h1>
                                <p>Create an account to see the full data</p>
                                <a className="text-black" href="/login">
                                    <button className="fill-button mt-3">
                                        Login
                                    </button>
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="flex-col-5">
                        <div>
                            <p>За мен</p>
                            <h1 className="text-2xl md:text-4xl font-bold">
                                Никола Бугов (Фитнес Инструктор)
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
                        <button className="fill-button">Контакт</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Welcome;
