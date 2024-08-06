import React from "react";
import Navbar from "@/CustomComponents/Navbar";

const Welcome = () => {
    return (
        <div className="relative">
            <Navbar />
            <header className="relative min-h-[60vh] flex-center">
                <div className="max-w-wrapper text-center flex-col-5">
                    <h1 className="text-3xl md:text-6xl font-bold">
                        <span className="text-underline">
                            Lorem ipsum dolor{" "}
                        </span>
                        sit, amet consectetur adipisicing elit. Omnis eaque
                        temporibus.
                    </h1>
                    <p className="max-w-[1000px] mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem repudiandae saepe nostrum voluptates illo quisquam
                        ut iusto deleniti quis voluptas iste, magni laboriosam!
                        Amet nulla facere dolorem dolore sequi unde rem
                        voluptates delectus incidunt. Eos provident explicabo
                        illum rem temporibus. Aliquam ad consectetur commodi
                        odio incidunt laborum labore doloremque harum!
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 items-center flex-center w-full">
                        <button className="outline-button">Login</button>
                        <button className="fill-button">Learn More</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Welcome;
