import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className,
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium ">Информация за профила.</h2>

                <p className="mt-1 text-sm">
                    Актуализирайте вашият имейл или ифнормация отностно акаунта ви.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="input-container">
                    <input
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                        placeholder="Име"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className="input-container">
                    <input
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                        placeholder="Имейл"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2">
                            Вашият имейл не е верифициран
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Кликни тук за да ти изпартим онтово имейл за верификация
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                               Нов имейл за верификация е изпратен на вашият имейл
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <button className="fill-button" disabled={processing}>
                        Запази
                    </button>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm ">Запазено.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
