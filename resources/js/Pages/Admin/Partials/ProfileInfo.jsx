import React from "react";
import { Check } from "lucide-react";

const ProfileInfo = ({ user }) => {
    const { email, name, phone } = user;

    return (
        <div className="border border-red-500 rounded-lg p-6 bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Информация</h1>
            <div className="grid grid-cols-2 gap-6 text-white">
                {/* First Name */}
                <div>
                    <h2 className="text-sm text-gray-400">Име</h2>
                    <p className="text-lg">{name.split(" ")[0]}</p>
                </div>
                {/* Last Name */}
                <div>
                    <h2 className="text-sm text-gray-400">Фамилия</h2>
                    <p className="text-lg">{name.split(" ")[1]}</p>
                </div>
                {/* Email */}
                <div>
                    <h2 className="text-sm text-gray-400">Имейл</h2>
                    <p className="text-lg">{email}</p>
                </div>
                {/* Phone */}
                <div>
                    <h2 className="text-sm text-gray-400">Мобилен телефон</h2>
                    <p className="text-lg">{phone ?? "Не е предоставен телефон"}</p>
                </div>
                {/* Role */}
                <div>
                    <h2 className="text-sm text-gray-400">Роля</h2>
                    <p className="text-lg">Регистриран потребител</p>
                </div>
                {/* Status */}
                <div>
                    <h2 className="text-sm text-gray-400">Статус</h2>
                    <p className="text-lg flex items-center space-x-2">
                        <span>Потвърден</span>
                        <Check className="text-green-600" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
