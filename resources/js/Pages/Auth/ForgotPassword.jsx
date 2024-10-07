import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <form onSubmit={submit} className="grid-2 min-h-screen">
            <div className="flex-center min-h-screen">
                <div className="w-full px-5 lg:px-10 xl:px-32 mx-auto">
                    <div className="flex-col-3">
                        <h1 className="font-bold text-3xl">Забравена парола</h1>
                        <p>
                            Забравена парола? Няма проблем. Просто ни уведомете.
                            вашият имейл адрес и ние ще ви изпратим парола
                            Нулиране на връзката, която ще ви позволи да
                            изберете нов.
                        </p>
                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <div className="input-container">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={onHandleChange}
                                placeholder="Имейл"
                            />
                        </div>
                        <InputError message={errors.email} className="mt-2" />

                        <button className="w-full mt-3 bg-white rounded-md p-3 transition-all hover:-translate-y-1">
                           Промени паролата
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-panel-image bg-center bg-cover" />
        </form>
    );
}
