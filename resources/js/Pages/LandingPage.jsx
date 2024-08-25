import React from "react";
import Navbar from "@/CustomComponents/Navbar";
import { ContainerScroll } from "@/CustomComponents/ui/container-scroll-animation";
import { headerDataText } from "@/Constants/StaticData";
import { Dumbbell } from "lucide-react";
import Footer from "@/CustomComponents/Footer";

const Welcome = () => {
    const { title, subtitle, description } = headerDataText;

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
                        <div className="flex-col-5 mb-10">
                            <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
                                {title} <br />
                                <span className="text-underline text-4xl md:text-6xl lg:text-[6rem] font-bold mt-1 leading-none">
                                    {subtitle}
                                </span>
                            </h1>
                            <p className="m-3">{description}</p>
                            <div className="flex flex-col md:flex-row gap-3 items-center flex-center w-full">
                                <button className="outline-button">
                                    <a className="text-white" href="/login">
                                        Login
                                    </a>
                                </button>
                                <button className="fill-button">
                                    Learn More
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

            <section className="flex-col-5 flex-center min-h-[80vh]">
                <div className="flex-col-3 text-center">
                    <h1 className="font-bold text-3xl lg:text-6xl">
                        It's time to trust{" "}
                        <span className="text-underline">yourself</span>
                    </h1>
                    <p className="max-w-[800px] mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt recusandae saepe accusamus quo consequatur quia
                        nam quis aspernatur esse. Accusamus!
                    </p>
                </div>
                <div className="max-w-wrapper grid-3 gap-10">
                    {[1, 2, 3].map((_, index) => (
                        <div className="relative flex-col-3 bg-[var(--mainDarkenLightColor)] p-5 rounded-md overflow-hidden">
                            <Dumbbell
                                className="absolute -right-[20%] z-1 -top-10 text-orange-600 opacity-[0.5]"
                                size={200}
                            />
                            <h1>Heading, {index}</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Libero ipsam quae, et eum
                                consequuntur perspiciatis explicabo temporibus
                                unde velit similique quas, mollitia saepe
                                reprehenderit totam dicta! Laudantium ex numquam
                                dolorum.
                            </p>
                            <button className="fill-button">Learn More</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-20 flex-center min-h-[80vh] relative overflow-hidden">
                <img
                    className="absolute opacity-[0.02] lg:opacity-30 right-[-12%] top-[40%] z-[-1]"
                    src="/assets/white-dots.png"
                />
                <div className="flex-col-3 text-center">
                    <h1 className="font-bold text-3xl lg:text-6xl">
                        It's time to trust{" "}
                        <span className="text-underline">yourself</span>
                    </h1>
                    <p className="max-w-[800px] mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt recusandae saepe accusamus quo consequatur quia
                        nam quis aspernatur esse. Accusamus!
                    </p>
                </div>
                <div className="max-w-wrapper grid-2 gap-10">
                    <div className="relative flex-center">
                        <img
                            className="blur-lg"
                            src="/assets/panel.png"
                            alt="panel"
                        />
                        <div className="absolute text-center mx-auto flex-center flex-col">
                            <h1 className="text-3xl font-bold">
                                Doesnt have an account?
                            </h1>
                            <p>Create an account to see the full data</p>
                            <button className="fill-button mt-3">
                                <a className="text-black" href="/login">
                                    Login
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="flex-col-5">
                        <div>
                            <p>Lorem ipsum dolor sit.</p>
                            <h1 className="text-2xl md:text-4xl font-bold">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing
                            </h1>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio ipsum sint provident, non possimus
                            voluptates recusandae cumque autem aliquid
                            laudantium ab? Magnam harum dolorum deserunt
                            pariatur voluptatum, quam vero saepe!
                        </p>
                        <button className="outline-button">Learn More</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Welcome;
