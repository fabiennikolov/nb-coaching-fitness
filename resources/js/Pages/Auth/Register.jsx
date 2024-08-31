import { useEffect } from "react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        additional_info: "",
        instagram: "",
        phone: ""
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <form onSubmit={submit} className="grid-2 min-h-screen">
            <div className="flex-center min-h-screen">
                <div className="w-full px-5 lg:px-10 xl:px-32 mx-auto">
                    <div className="flex-col-3">
                        <h1 className="font-bold text-3xl">Здравейте</h1>
                        <p>
                           Създайте си акаунт. Моля въведете вашите данни
                        </p>
                        <div className="input-container">
                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                onChange={handleOnChange}
                                required
                            />
                            <label>Име <span className="text-[10px]">(reqiured)</span></label>
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={handleOnChange}
                                required
                            />
                            <label>
                                Email
                                <span className="text-[10px]">(reqiured)</span>
                            </label>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={handleOnChange}
                                required
                            />
                            <label>
                                Парола
                                
                            </label>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={handleOnChange}
                                required
                            />
                            <label>
                                Потвърждение на парола
                            </label>
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                id="instagram"
                                type="text"
                                name="instagram"
                                value={data.instagram}
                                className="mt-1 block w-full"
                                onChange={handleOnChange}

                            />
                            <label>@{" "}Instagram</label>
                            <InputError
                                message={errors.instagram}
                                className="mt-2"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                id="phone"
                                type="number"
                                name="phone"
                                value={data.phone}
                                className="mt-1 block w-full"
                                onChange={handleOnChange}

                            />
                            <label>Phone</label>
                            <InputError
                                message={errors.phone}
                                className="mt-2"
                            />
                        </div>
                        <div className="input-container">
                            <textarea
                                id="additional_info"
                                type="text"
                                name="additional_info"
                                value={data.additional_info}
                                className="mt-1 block w-full"
                                onChange={handleOnChange}
                                
                            />
                            <label>Допълнителна информация</label>
                            <InputError
                                message={errors.additional_informatio}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex-between">
                            <div className="flex-3">
                                <input type="checkbox" />
                                <p>Запомни за 30 дни</p>
                            </div>
                            <a href="/forgot-password" className="text-[#dc2626] underline">
                                Забравена парола?
                            </a>
                        </div>
                        <button className="w-full mt-3 bg-white rounded-md p-3 transition-all hover:-translate-y-1">
                            Създаване на акаунт
                        </button>
                        <p className="flex-end gap-1">
                            Вече имаш акаунт?{" "}
                            <a
                                className="text-[#dc2626] underline"
                                href="/login"
                            >
                                Вход
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-panel-image bg-center bg-cover" />
        </form>
    );
}
