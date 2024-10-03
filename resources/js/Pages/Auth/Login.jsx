import InputError from "@/Components/InputError";
import LoginController from "@/Controllers/LoginController";

export default function Login() {
    
    const { loginInputs, submit,  handleOnChange, data, errors } = LoginController()

    return (
        <form onSubmit={submit} className="grid-2 overflow-y-hidden max-h-screen">
            <div className="bg-panel-image bg-center bg-cover" />
            <div className="flex-center min-h-screen">
                <div className="w-full px-5 lg:px-10 xl:px-32 mx-auto">
                    <div className="flex-col-3">
                        <h1 className="font-bold text-3xl">Добре дошли</h1>
                        <p>Моля, въведете вашите данни.</p>

                        {loginInputs.map(({ id, name, type, label, autoComplete, required, value, error }) => (
                            <div key={id} className="input-container">
                                <input
                                    id={id}
                                    name={name}
                                    type={type}
                                    required={required}
                                    value={value}
                                    className="mt-1 block w-full"
                                    placeholder={label}
                                    autoComplete={autoComplete}
                                    onChange={handleOnChange}
                                />
                                {error && <InputError message={error} className="mt-2" />}
                            </div>
                        ))}

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
                            <a href="/forgot-password" className="text-[#dc2626] underline hidden sm:flex">
                                Забравена парола?
                            </a>
                        </div>

                        <button className="w-full mt-3 bg-white rounded-md p-3 transition-all hover:-translate-y-1">
                            Вход
                        </button>

                        <a href="/forgot-password" className="text-[#dc2626] underline flex sm:hidden justify-end">
                            Забравена парола?
                        </a>

                        <p className="flex-end gap-1">
                            Нямаш профил?
                            <a className="text-[#dc2626] underline" href="/register">
                                Създай Акаунт
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}