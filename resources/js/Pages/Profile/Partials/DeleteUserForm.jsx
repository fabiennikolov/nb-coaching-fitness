import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function DeleteUserForm({ className }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium">Изтриване на акаунта</h2>

                <p className="mt-1 text-sm ">
                    След като акаунтът ви бъде изтрит, всички негови ресурси и
                    данните ще бъдат окончателно изтрити. Моля, въведете вашия
                    парола, за да потвърдите, че искате да изтриете завинаги
                    вашата сметка.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Изтрии акаунт
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6 flex-col-3">
                    <h2 className="text-lg font-bold">
                        Сигурни ли сте, че искате да изтриете акаунта си?
                    </h2>

                    <p className="mt-1 text-sm">
                        След като акаунтът ви бъде изтрит, всички негови ресурси
                        и данните ще бъдат окончателно изтрити. Моля, въведете
                        вашия парола, за да потвърдите, че искате да изтриете
                        завинаги вашата сметка.
                    </p>

                    <div className="input-container">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Откажи
                        </SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing}>
                            Изтрии акаунт
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
