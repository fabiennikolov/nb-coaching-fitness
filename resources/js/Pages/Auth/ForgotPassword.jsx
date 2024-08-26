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
                        <h1 className="font-bold text-3xl">
                            Forgoten Password
                        </h1>
                        <p>
                            Forgot your password? No problem. Just let us know
                            your email address and we will email you a password
                            reset link that will allow you to choose a new one.
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
                            />
                            <label>Email</label>
                        </div>
                        <InputError message={errors.email} className="mt-2" />

                        <button className="w-full mt-3 bg-white rounded-md p-3 transition-all hover:-translate-y-1">
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-panel-image bg-center bg-cover" />
        </form>

        // <form onSubmit={submit}>
        //     <TextInput
        //         id="email"
        //         type="email"
        //         name="email"
        //         value={data.email}
        //         className="mt-1 block w-full"
        //         isFocused={true}
        //         onChange={onHandleChange}
        //     />

        //     <div className="flex items-center justify-end mt-4">
        //         <PrimaryButton className="ml-4" disabled={processing}>
        //             Email Password Reset Link
        //         </PrimaryButton>
        //     </div>
        // </form>
    );
}
