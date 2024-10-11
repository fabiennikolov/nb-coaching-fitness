import React from "react";
import UserPageController from "@/Controllers/UserPageController";

import { Check, PenLine, X } from "lucide-react";
import Modal from "@/Components/Modal";
import { UserPremisionInnerModal } from "@/CustomComponents/Modals";

const ProfileCard = ({ user, allPermissions }) => {

    const { email, name, phone, status = "Подвърден" } = user;

    const {  toggleEditProfileModal, setToggleEditProfileModal, } = UserPageController();

    return (
        <div className="flex-between border border-neutral-800 rounded-md p-5">
            <div className="flex-3">
                <img
                    className="w-[50px] h-[50px] rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                />
                <div className="flex-col-1">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <p>{email}</p>
                    <p className="flex-2">
                        {status}{" "}
                        {status !== "Подвърден" ? (
                            <X className="text-red-600" />
                        ) : (
                            <Check className="text-green-600" />
                        )}
                    </p>
                </div>
            </div>
            <button
                onClick={() => setToggleEditProfileModal(true)}
                className="bg-white text-black p-2 rounded-md px-4 flex-2 w-max"
            >
                <span className="hidden sm:flex">Редактирай</span>
                <PenLine size={20} />
            </button>

            <Modal
                onClose={() => setToggleEditProfileModal(false)}
                show={toggleEditProfileModal}
            >
                <UserPremisionInnerModal setToggleEditProfileModal={setToggleEditProfileModal} allPermissions={allPermissions}/>
            </Modal>
        </div>
    );
};

export default ProfileCard;
