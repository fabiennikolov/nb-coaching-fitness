import React, { useState } from "react";
import Modal from "@/Components/Modal";

import { Check, PenLine } from "lucide-react";
import { UserPremisionInnerModal } from "@/CustomComponents/Modals";

const ProfileCard = ({ user, allPermissions }) => {
    const { email, name, phone, status = "Потвърден" } = user;
    const [ toggleEditProfileModal, setToggleEditProfileModal ] = useState(false)

    return (
        <div className="flex justify-between items-center rounded-lg p-6 gradient-one">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <img
                    className="w-[60px] h-[60px] rounded-full border-4 border-red-500"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                />
                <div className="text-white">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-sm text-gray-300">{email}</p>
                    <p className="flex-2 mt-1 text-sm">
                        <span className="text-red-400">{status}</span>
                        <Check className="text-green-600" />
                    </p>
                </div>
            </div>
            <button
                onClick={() => setToggleEditProfileModal(true)}
                className="bg-red-600 hover:bg-red-700 text-white gap-1 py-2 px-4 rounded-md flex items-center transition-all duration-300"
            >
                <span className="hidden sm:flex">Дай права</span>
                <PenLine size={20} />
            </button>

            <Modal
                onClose={() => setToggleEditProfileModal(false)}
                show={toggleEditProfileModal}
            >
                <UserPremisionInnerModal setToggleEditProfileModal={setToggleEditProfileModal} allPermissions={allPermissions} />
            </Modal>
        </div>
    );
};

export default ProfileCard;
