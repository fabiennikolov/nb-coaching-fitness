import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
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

        post(route("login"));
    };

    return (
        <form onSubmit={submit} className="grid-2 min-h-screen">
            <div className="bg-panel-image bg-center bg-cover" />
            <div className="flex-center min-h-screen">
                <div className="w-full px-5 lg:px-10 xl:px-32 mx-auto">
                    <div className="flex-col-3">
                        <h1 className="font-bold text-3xl">
                            Welcome back,{" "}
                            <span className="text-underline">User!</span>
                        </h1>
                        <p>Welcome Back! Please Enter your details.</p>
                        <div className="input-container">
                            <input
                                id="email"
                                required
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={handleOnChange}
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-container">
                            <input
                                name="password"
                                type="password"
                                className="dashboard-input"
                                required
                                id="password"
                                value={data.password}
                                onChange={handleOnChange}
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                            <label>Password</label>
                        </div>
                        <div className="flex-between">
                            <div className="flex-3">
                                <input type="checkbox" />
                                <p>Remember for 30 days</p>
                            </div>
                            <a href="#" className="text-[#dc2626] underline">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="w-full mt-3 bg-white rounded-md p-3 transition-all hover:-translate-y-1">
                            Log in
                        </button>
                        <p className="flex-end gap-1">
                            Don't have an account?{" "}
                            <a
                                className="text-[#dc2626] underline"
                                href="/register"
                            >
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}
