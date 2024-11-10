import InputError from "@/Components/InputError";
import RegisterController from "@/Controllers/RegisterController";
import { Loader } from "lucide-react";

export default function Register() {
    const { submit, registerInputs, handleOnChange, data, errors, processing } =
        RegisterController();

    return (
        <form onSubmit={submit} className="max-h-screen max-w-2xl py-5 mx-auto">
            <div className="flex-center min-h-screen">
                <div className="w-full px-5 lg:px-10 xl:px-32 mx-auto">
                    <div className="flex-col-10">
                        <h1 className="font-bold text-5xl text-center">
                            Регистрация
                        </h1>

                        <div className="flex-col-3">
                            {registerInputs.map(
                                ({
                                    id,
                                    name,
                                    type,
                                    label,
                                    required,
                                    value,
                                    error,
                                    autoComplete,
                                }) => (
                                    <div className="flex-col-1">
                                        <label className="text-white text-sm">
                                            {label}
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <div
                                            key={id}
                                            className="input-container"
                                        >
                                            <input
                                                id={id}
                                                name={name}
                                                type={type}
                                                value={value}
                                                required={required}
                                                autoComplete={autoComplete}
                                                className="mt-1 block w-full"
                                                placeholder={label}
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
                            <div className="input-container">
                                <label className="text-sm text-white">
                                    Additional Info
                                </label>
                                <textarea
                                    id="additional_info"
                                    name="additional_info"
                                    value={data.additional_info}
                                    className="mt-1 block w-full"
                                    onChange={handleOnChange}
                                    required
                                    placeholder="Опишете вашите фитнес цели, опит и очаквания"
                                />
                                {errors.additional_info && (
                                    <InputError
                                        message={errors.additional_info}
                                        className="mt-2"
                                    />
                                )}
                            </div>
                            <div className="flex-between">
                                <div className="flex-3">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        className="custom-checkbox"
                                        checked={data.remember}
                                        onChange={handleOnChange}
                                    />
                                    <p className="text-sm">
                                        Съгласявам се с{" "}
                                        <span className="underline">
                                            Политика за поверително
                                        </span>
                                        ст и{" "}
                                        <span className="underline">
                                            Политика за ползване
                                        </span>{" "}
                                        на NBCoaching
                                    </p>
                                </div>
                            </div>

                            <button
                                disabled={processing}
                                className="w-full mt-3 bg-red-600 disabled:bg-red-600/50 text-white font-bold uppercase disabled:cursor-not-allowed rounded-md flex-2 justify-center p-3 transition-all"
                            >
                                {processing ? "Processing..." : "Регистрация"}
                                {processing && (
                                    <Loader
                                        size={15}
                                        className="animate-spin"
                                    />
                                )}
                            </button>
                        </div>

                        <p className="flex-center gap-1 mb-10">
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
        </form>
    );
}
