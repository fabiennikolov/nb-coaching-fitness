import React from "react";
import { Check } from "lucide-react";

const ProfileInfo = ({ user }) => {
    const { email, name, phone } = user;

    return (
        <div className="border border-black rounded-lg p-6 bg-gradient-to-br from-red-900 to-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-2xl font-bold text-gray-300 mb-4">Информация</h1>
            <div className="grid grid-cols-2 gap-6 text-white">
                {/* First Name */}
                <div>
                    <h2 className="text-xl text-white">Име</h2>
                    <p className="text-lg text-[#ddc5c5]">{name.split(" ")[0]}</p>
                </div>
                {/* Last Name */}
                <div>
                    <h2 className="text-xl text-white">Фамилия</h2>
                    <p className="text-lg text-[#ddc5c5]">{name.split(" ")[1]}</p>
                </div>
                {/* Email */}
                <div>
                    <h2 className="text-xl text-white">Имейл</h2>
                    <p className="text-lg text-[#ddc5c5]">{email}</p>
                </div>
                {/* Phone */}
                <div>
                    <h2 className="text-xl text-white">Мобилен телефон</h2>
                    <p className="text-lg text-[#ddc5c5]">{phone ?? "Не е предоставен телефон"}</p>
                </div>
                {/* Role */}
                <div>
                    <h2 className="text-xl text-white">Роля</h2>
                    <p className="text-lg text-[#ddc5c5]">Регистриран потребител</p>
                </div>
                {/* Status */}
                <div>
                    <h2 className="text-xl text-white">Статус</h2>
                    <p className="text-lg flex items-center space-x-2 text-[#ddc5c5]">
                        <span>Потвърден</span>
                        <Check className="text-green-600" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
