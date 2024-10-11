import React from "react";
import { Check } from "lucide-react";

const ProfileInfo = ({ user }) => {

    const { email, name, phone, } = user;

    return (
        <div className="grid-2 border flex-col-3 border-neutral-800 rounded-md p-5">
            <div className="flex-col-3">
                <h1 className="text-xl font-bold">Информация</h1>
                <div className="grid-2 gap-3">
                    <div className="flex-col-1">
                        <h1>Име</h1>
                        <p>{name.split(" ")[0]}</p>
                    </div>
                    <div className="flex-col-1">
                        <h1>Фамилия</h1>
                        <p>{name.split(" ")[1]}</p>
                    </div>
                </div>
                <div className="grid-2 gap-3">
                    <div className="flex-col-1">
                        <h1>Имейл</h1>
                        <p>{email}</p>
                    </div>
                    <div className="flex-col-1">
                        <h1>Мобилен телефон</h1>
                        <p>{phone ?? "Не е предоставен телефон"}</p>
                    </div>
                </div>
                <div className="grid-2 gap-3">
                    <div className="flex-col-1">
                        <h1>Роля</h1>
                        <p>{phone ?? "Регистриран потребител"}</p>
                    </div>
                    <div className="flex-col-1">
                        <h1>Статус</h1>
                        <p className="flex-2">
                            {phone ?? "Потвърден"}{" "}
                            <Check className="text-green-600" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
