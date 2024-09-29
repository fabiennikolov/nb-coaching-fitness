import InputError from "@/Components/InputError";
import RegisterController from "@/Controllers/RegisterController";

export default function Register() {
   
    const { submit, registerInputs, handleOnChange, data, errors, processing } = RegisterController();

    return (
        <form onSubmit={submit} className="grid-2 max-h-screen">
            <div className="flex-center min-h-screen">
                <div className="w-full px-5 lg:px-10 xl:px-32 mx-auto">
                    <div className="flex-col-3">
                        <h1 className="font-bold text-3xl">Здравейте</h1>
                        <p>Създайте си акаунт. Моля въведете вашите данни.</p>

                        {registerInputs.map(({ id, name, type, label, required, value, error, autoComplete }) => (
                            <div key={id} className="input-container">
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
                                {error && <InputError message={error} className="mt-2" />}
                            </div>
                        ))}

                        <div className="input-container">
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
                                <InputError message={errors.additional_info} className="mt-2" />
                            )}
                        </div>

                        <div className="flex-between">
                            <div className="flex-3">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={handleOnChange}
                                />
                                <p>Запомни за 30 дни</p>
                            </div>
                            <a href="/forgot-password" className="text-[#dc2626] underline">
                                Забравена парола?
                            </a>
                        </div>

                        <button className="w-full mt-3 bg-white rounded-md p-3 transition-all hover:-translate-y-1" disabled={processing}>
                            Създаване на акаунт
                        </button>

                        <p className="flex-end gap-1">
                            Вече имаш акаунт?{" "}
                            <a className="text-[#dc2626] underline" href="/login">
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