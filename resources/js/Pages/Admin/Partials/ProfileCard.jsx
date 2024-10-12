import React from "react";
import UserPageController from "@/Controllers/UserPageController";
import { Check, PenLine } from "lucide-react";
import Modal from "@/Components/Modal";
import { UserPremisionInnerModal } from "@/CustomComponents/Modals";

const ProfileCard = ({ user, allPermissions }) => {
    const { email, name, phone, status = "Подвърден" } = user;
    const { toggleEditProfileModal, setToggleEditProfileModal } = UserPageController();

    return (
        <div className="flex justify-between items-center border border-red-500 rounded-lg p-6 bg-gray-900 shadow-lg">
            <div className="flex items-center space-x-4">
                <img
                    className="w-[60px] h-[60px] rounded-full border-4 border-red-500"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                />
                <div className="text-white">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-sm text-gray-300">{email}</p>
                    <p className="flex items-center mt-1 space-x-2 text-sm">
                        <span className="text-red-400">{status}</span>
                        <Check className="text-green-600" />
                    </p>
                </div>
            </div>
            <button
                onClick={() => setToggleEditProfileModal(true)}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center space-x-2 transition-all duration-300"
            >
                <span className="hidden sm:inline">Дай права</span>
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
