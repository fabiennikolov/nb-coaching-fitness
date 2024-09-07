import { Download, Plus } from "lucide-react";

import React from "react";
import Navbar from "@/CustomComponents/Navbar";
import CreateTableModal from "@/CustomComponents/CreateTableModal";
import BrochureCotroller from "@/Controllers/BorchureController";

import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

const NbCoachingPage = (props) => {
    const { tables } = props;

    const {
        confirmUserDeletion,
        closeModal,
        confirmingUserDeletion,
        handleChange,
        inputs,
    } = BrochureCotroller();

    return (
        <div>
            <Navbar />
            <div className="flex-col-3 max-w-wrapper py-28">
                <div className="flex-col-2">
                    <h1 className="text-2xl font-bold">Наръчници</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[50vh] justify-center items-center">
                        <div className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all">
                            <img
                                className="w-full h-[200px] object-cotain rounded-md"
                                src="https://cdn.discordapp.com/attachments/1270095587718725632/1279771157515735121/image.png?ex=66d5a744&is=66d455c4&hm=e8e5461d2e4b7ed60f178f81694387f337f673de41eb46d344dcedd6f3e13f5f&"
                            />
                            <div className="flex-between">
                                <div className="flex-col-1">
                                    <p>2x6.08.2024 – 01.09.2024</p>
                                    <h1 className="font-bold text-white text-lg">
                                        Nb Coaching
                                    </h1>
                                </div>
                                <Download className="text-white cursor-pointer text-xl" />
                            </div>
                            <a
                                className="w-full text-black"
                                href="/nb-coaching/brochure"
                            >
                                <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                                    Brochure
                                </button>
                            </a>
                        </div>
                        <div className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all">
                            <img
                                className="w-full h-[200px] object-cotain rounded-md"
                                src="https://cdn.discordapp.com/attachments/1270095587718725632/1279771157515735121/image.png?ex=66d5a744&is=66d455c4&hm=e8e5461d2e4b7ed60f178f81694387f337f673de41eb46d344dcedd6f3e13f5f&"
                            />
                            <div className="flex-between">
                                <div className="flex-col-1">
                                    <p>2x6.08.2024 – 01.09.2024</p>
                                    <h1 className="font-bold text-white text-lg">
                                        Nb Coaching
                                    </h1>
                                </div>
                                <Download className="text-white cursor-pointer text-xl" />
                            </div>
                            <a
                                className="w-full text-black"
                                href="/nb-coaching/brochure"
                            >
                                <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                                    Brochure
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-col-2">
                    <div className="flex-between">
                        <h1 className="text-2xl font-bold">Програми</h1>
                        <button
                            className="flex-3 bg-white rounded-md p-3"
                            onClick={confirmUserDeletion}
                        >
                            <Plus />
                            Create Table
                        </button>
                        <Modal
                            show={confirmingUserDeletion}
                            onClose={closeModal}
                        >
                            <form className="p-6">
                                <h2 className="text-2xl font-bold">
                                  Create a thingy
                                </h2>

                                <p className="mt-1 text-sm">
                                    Once your account is deleted, all of its
                                    resources and data will be permanently
                                    deleted. Please enter your password to
                                    confirm you would like to permanently delete
                                    your account.
                                </p>

                                <div className="mt-6 flex-col-2">
                                    {inputs.map((input, index) => (
                                        <div key={index} className="flex-col-1">
                                            <label className="text-white">
                                                {input.name}
                                            </label>
                                            <TextInput
                                                name={input.value}
                                                onChange={handleChange}
                                                className="w-full"
                                                type="text"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex gap-3 justify-end">
                                    <SecondaryButton onClick={closeModal}>
                                        Cancel
                                    </SecondaryButton>

                                    <button className="outline-button">
                                        Create
                                    </button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {tables.map((table, id) => (
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
                                        <p>2x6.08.2024 – 01.09.2024</p>
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingPage;
