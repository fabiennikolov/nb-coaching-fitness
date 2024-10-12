import React from "react";
import Zoom from 'react-medium-image-zoom'
import UserPageController from "@/Controllers/UserPageController";

import { userRoles } from "@/Constants/StaticData";
import { CloudUpload, X } from "lucide-react";

export const UserPremisionInnerModal = ({ setToggleEditProfileModal, allPermissions }) => {
    return (
        <form className="flex-col-5 p-5">
            <div className="flex-col-1">
                <h1 className="text-2xl font-bold">Променя на роля/статус</h1>
                <p>Промени статуса или ролята на даденият потребител.</p>
            </div>

            <div className="flex-col-3">
                {Object.keys(allPermissions).map((key) => (
                    <div className="form-group flex items-center gap-5" key={key}>
                        <input type="checkbox" id={key} />
                        <label className="text-white" htmlFor={key}>
                            {allPermissions[key]}
                        </label>
                    </div>
                ))}
            </div>

            <div className="flex-2 justify-end">
                <button
                    type="button"
                    onClick={() => setToggleEditProfileModal(false)}
                    className="fill-button"
                >
                    Откажи
                </button>
                <button type="submit" className="outline-button">
                    Промени
                </button>
            </div>
        </form>
    );
};


export const CreateTableInnerModal = ({ setIsModalOneOpen, user }) => {
    const { handleSubmit, tableForm, inputs } = UserPageController()

    return (
        <form className="p-6" onSubmit={(e) => handleSubmit(e, user.id)}>
            <h2 className="text-2xl font-bold">
                Добавяне на таблица за потребител
            </h2>
            <p>Добавете табалица с упражнения за даденият потребител</p>
            <div className="mt-6 flex-col-2">
                {inputs.map((input, index) => (
                    <div key={index} className="input-container flex-col-1">
                        <input
                            name={input.value}
                            placeholder={input.name}
                            onChange={(e) =>
                                tableForm.setData(input.value, e.target.value)
                            }
                            className="w-full"
                            type="text"
                        />
                        {tableForm.errors[input.value] && (
                            <p className="text-red-500 text-sm mt-1">
                                {tableForm.errors[input.value]}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 flex-3 justify-end">
                <button
                    type="button"
                    className="fill-button"
                    onClick={() => setIsModalOneOpen(false)}
                >
                    Откажи
                </button>
                <button className="outline-button" type="submit">
                    Добави
                </button>
            </div>
        </form>
    );
};


export const UploadImageInnerModal = ({ setIsModalTwoOpen, user }) => {

    const { handleImageSubmit, handleFileChange, imagePreview, handleClearImage } = UserPageController();

    return (
        <form className="p-6" onSubmit={(e) => handleImageSubmit(e, user.id)}>
        <h2 className="text-2xl font-bold">
            Добавяне на Снимка
        </h2>

        <p className="mt-1 text-sm">
            Изберете снимка от вашия компютър, за да
            добавите към прогреса на потребителя.
        </p>

        {/* File Upload Input */}
        <div className="mt-6 flex-col-1">
            <div className="drag-n-drop h-[200px]">
                <CloudUpload
                    className="text-white bg-neutral-800 p-2 rounded-full"
                    size={45}
                />
                <p>
                    <span className="underline text-white">
                        Click to upload
                    </span>{" "}
                    or drag and drop
                </p>
                <p>PNG, JPEG, JPG or GIF (max 10mb)</p>
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="h-[200px] opacity-0 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 file:text-white hover:file:bg-neutral-600 focus:border-none outline-none"
            />
        </div>

        {/* Image Preview */}
        {imagePreview && (
            <div className="flex-col-1 mt-5">
                <h1 className="text-lg">Преглед</h1>
                <div className="w-full bg-neutral-800 rounded-md p-3 flex-between">
                    <Zoom>
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-[100px] h-[50px] object-cover border border-gray-500 rounded-md"
                        />
                    </Zoom>
                    <X
                        onClick={handleClearImage}
                        className="text-red-600 cursor-pointer"
                    />
                </div>
            </div>
        )}

        <div className="mt-6 flex gap-3 justify-end">
            <button
                className="fill-button"
                type="button"
                onClick={() => setIsModalTwoOpen(false)}
            >
                Откажи
            </button>

            <button
                className="outline-button"
                type="submit"
            >
                Добави Снимка
            </button>
        </div>
    </form>
    )
}