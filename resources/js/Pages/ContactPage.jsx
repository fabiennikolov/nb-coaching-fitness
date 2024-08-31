import {
    contactFormGridThree,
    contactFormInputs,
} from "@/Constants/StaticData";
import Navbar from "@/CustomComponents/Navbar";
import { Send } from "lucide-react";
import React, { useState } from "react";

const ContactPage = () => {
    const [data, setData] = useState({
        firstName: "",
        secondName: "",
        phone: "",
        email: "",
        additional_info: "",
    });

    const contactFormInput = contactFormInputs(data);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="relative overflow-hidden">
            <Navbar/>
            <img src="/assets/white-dots.png" className="absolute opacity-5 -right-[20%]"/>
            <div className="bg-[#191919] top-1/2 w-[1000px] h-[600px] absolute z-[-1]"/>
            <div className="flex-col-3 max-w-wrapper min-h-screen flex-center w-full ">
                <div className="flex-col-5 w-full py-5 mt-20 lg:mt-0">
                    <div className="w-full lg:text-center">
                        <h1 className="font-bold text-4xl">Contact me</h1>
                        <p className="max-w-[600px] mx-auto">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Excepturi tempora mollitia vitae, accusantium
                            porro in consequatur ab praesentium maiores
                            nesciunt.
                        </p>
                    </div>

                    <div className="grid-3 gap-10 items-center">
                        <form
                            onSubmit={onSubmit}
                            className="flex-col-10    col-span-2"
                        >
                            <div className="grid-2 gap-10">
                                <div className="input-container">
                                    <input
                                        id={data.firstName}
                                        name="First Name"
                                        autoComplete="name"
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>First Name</label>
                                </div>
                                <div className="input-container">
                                    <input
                                        id={data.secondName}
                                        name="First Name"
                                        autoComplete="name"
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Last Name</label>
                                </div>
                            </div>
                            {contactFormInput.map((data, index) => (
                                <div className="input-container" key={index}>
                                    <input
                                        id={data.value}
                                        name="name"
                                        // value={data.name}
                                        autoComplete="name"
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>{data.name}</label>
                                </div>
                            ))}
                            <button className="flex-3 bg-white p-3 text-center flex items-center justify-center rounded-md w-full">
                                <Send />
                                Submit Message
                            </button>
                        </form>
                        <div className="flex-col-5">
                            {contactFormGridThree.map((data, id) => (
                                <div className="flex-col-3" key={id}>
                                    <h1 className="font-bold text-2xl">
                                        {data.heading}
                                    </h1>
                                    <p>{data.p}</p>
                                    {data.add.map((item, id) => (
                                        <div className="flex-3" key={id}>
                                            <i className="text-white">
                                                {item.icon}
                                            </i>
                                            <span className="text-white underline">
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
