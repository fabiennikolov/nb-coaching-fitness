import { Loader } from "lucide-react";

import InputError from "@/Components/InputError";
import LoginController from "@/Controllers/LoginController";

export default function Login() {
    const { loginInputs, submit, handleOnChange, data, processing } =
        LoginController();

    return (
        <form
            onSubmit={submit}
            className="overflow-y-hidden max-h-screen max-w-2xl mx-auto"
        >
            <div className="bg-panel-image bg-center bg-cover" />
            <div className="flex-center min-h-screen">
                <div className="w-full px-5 lg:px-10 xl:px-32 mx-auto">
                    <div className="flex-col-10">
                        <h1 className="font-bold text-5xl text-center">Вход</h1>

                        <div className="flex-col-3">
                            {loginInputs.map(
                                ({
                                    id,
                                    name,
                                    type,
                                    autoComplete,
                                    required,
                                    value,
                                    error,
                                    label,
                                }) => (
                                    <div className="flex-col-1">
                                        <p className="text-white">
                                            {label}
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <div
                                            key={id}
                                            className="input-container"
                                        >
                                            <input
                                                id={id}
                                                name={name}
                                                type={type}
                                                required={required}
                                                value={value}
                                                className="mt-1 block w-full"
                                                autoComplete={autoComplete}
                                                onChange={handleOnChange}
                                            />
                                            {error && (
                                                <InputError
                                                    message={error}
                                                    className="mt-2"
                                                />
                                            )}
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>

                        <div className="flex-col-3">
                            <div className="flex flex-col sm:flex-row lg:items-center justify-between">
                                <div className="flex-3">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={data.remember}
                                        onChange={handleOnChange}
                                    />
                                    <p>Запомни за 30 дни</p>
                                </div>
                                <a
                                    href="/forgot-password"
                                    className="text-[#dc2626] underline hidden sm:flex"
                                >
                                    Забравена парола?
                                </a>
                            </div>

                            <button
                                disabled={processing}
                                className="w-full mt-3 text-white uppercase  font-bold bg-red-600 disabled:bg-red-600/50 disabled:cursor-not-allowed rounded-md flex-2 justify-center p-3 transition-all"
                            >
                                {processing ? "Processing..." : "Вход"}
                                {processing && (
                                    <Loader
                                        size={15}
                                        className="animate-spin"
                                    />
                                )}
                            </button>

                            <a
                                href="/forgot-password"
                                className="text-[#dc2626] underline flex sm:hidden justify-end"
                            >
                                Забравена парола?
                            </a>

                            <div className="flex-col-3 mt-5">
                                <div className="border-neutral-300 border w-full" />
                                <p className="text-center text-white">Или вход/регистрация с</p>
                                <button className="flex items-center justify-center gap-3 rounded-lg bg-white p-2 w-max mx-auto px-10">
                                    <img className="w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" />
                                    Google
                                </button>
                            </div>
                        </div>
                        <p className="flex-center gap-1">
                            Нямаш профил?
                            <a
                                className="text-[#dc2626] underline"
                                href="/register"
                            >
                                Създай Акаунт
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}
