import { useEffect } from "react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        additional_information: "",
        instagram: "",
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
                                isFocused={true}
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
                                id="additional_information"
                                type="text"
                                name="additional_informatio"
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
                            <textarea
                                id="additional_information"
                                type="text"
                                name="additional_informatio"
                                value={data.additional_information}
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
        // <GuestLayout>
        //     <Head title="Register" />

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="name" value="Name" />

        //             <TextInput
        //                 id="name"
        //                 name="name"
        //                 value={data.name}
        //                 className="mt-1 block w-full"
        //                 autoComplete="name"
        //                 isFocused={true}
        //                 onChange={handleOnChange}
        //                 required
        //             />

        //             <InputError message={errors.name} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 onChange={handleOnChange}
        //                 required
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="new-password"
        //                 onChange={handleOnChange}
        //                 required
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

        //             <TextInput
        //                 id="password_confirmation"
        //                 type="password"
        //                 name="password_confirmation"
        //                 value={data.password_confirmation}
        //                 className="mt-1 block w-full"
        //                 autoComplete="new-password"
        //                 onChange={handleOnChange}
        //                 required
        //             />

        //             <InputError message={errors.password_confirmation} className="mt-2" />
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             <Link
        //                 href={route('login')}
        //                 className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //             >
        //                 Already registered?
        //             </Link>

        //             <PrimaryButton className="ml-4" disabled={processing}>
        //                 Register
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
    );
}
