import DataTable from "react-data-table-component";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Plus } from "lucide-react";
import BrochureCotroller from "@/Controllers/BorchureController";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";

import { customStyles } from "@/Constants/StaticData";

export default function UserShowPage(props) {
    const { user, usersData } = props;
        const {
        confirmUserDeletion,
        closeModal,
        confirmingUserDeletion,
        handleChange,
        inputs,
        auth,
    } = BrochureCotroller();

    const {email, name, instagram, phone} = user
    console.log(user);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Admin
                </h2>
            }
        >
            <div className="py-12 px-5">
                <p>{email}</p>
                <p>{name}</p>
                <p>{instagram}</p>
                <p>{phone}</p>        
            </div>

             <div className="flex-between">
                            <h1 className="text-2xl font-bold">Програми</h1>
                            <button
                                className="flex-3 bg-white rounded-md p-3"
                                onClick={confirmUserDeletion}
                            >
                                <Plus />
                                Добави таблица
                            </button>
                            <Modal
                                show={confirmingUserDeletion}
                                onClose={closeModal}
                            >
                                <form className="p-6">
                                    <h2 className="text-2xl font-bold">
                                        Добавяне на таблица за потребител 
                                    </h2>

                                    <p className="mt-1 text-sm">
                                        Когато подадете валиден линк към google sheet таблица и 
                                        дадено име, следователно запазите промените, на потребителя ще се появи карта
                                        в секцията Програми в NBcoaching страницата със зададената таблица. 
                                    </p>

                                    <div className="mt-6 flex-col-2">
                                        {inputs.map((input, index) => (
                                            <div
                                                key={index}
                                                className="flex-col-1"
                                            >
                                                <label className="text-white">
                                                    {input.name}
                                                </label>
                                                <TextInput
                                                    name={input.value}
                                                    onChange={handleChange}
                                                    className="w-full"
                                                    type="text"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex gap-3 justify-end">
                                        <SecondaryButton onClick={closeModal}>
                                            Откажи
                                        </SecondaryButton>

                                        <button className="outline-button">
                                            Добави
                                        </button>
                                    </div>
                                </form>
                            </Modal>
                        </div>
        </AuthenticatedLayout>
    );
}
