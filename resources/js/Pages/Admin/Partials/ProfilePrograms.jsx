import { useState } from "react";
import Modal from "@/Components/Modal";

import { Plus } from "lucide-react";
import { useForm } from "@inertiajs/react"; 
import { ProgrammCard } from "@/CustomComponents/Cards";
import { CreateTableInnerModal } from "@/CustomComponents/Modals";
import { toast, ToastContainer } from "react-toastify";
import { toastContainerStyle } from "@/Constants/StaticData";

const ProfilePrograms = ({ user, tables }) => {
    const [ isModalOneOpen, setIsModalOneOpen ] = useState(false);
     
    const tableForm = useForm({
        name: "",
        url: "",
        description: ""
    });

    const handleSubmit = (e, id) => {        
        e.preventDefault();
        
        tableForm.post(route("admin.storeTable", { user: id }), {
            onSuccess: () => {
                setIsModalOneOpen(false);
                toast.success("Програмата е добавена успешно!", {
                     style: toastContainerStyle
                });
            },
        });
    };


    return (
        <div className="p-6 rounded-lg gradient-one">
            <ToastContainer position="bottom-right"/>

            <div className="flex-col-5">
                {/* Title and Button in the same div */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Програми</h1>
                    <button
                        className="flex items-center bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4 transition-all duration-300"
                        onClick={() => setIsModalOneOpen(true)}
                    >
                        <span className="hidden sm:flex">Добави Програма</span>
                        <Plus />
                    </button>
                </div>

                {user && tables.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tables.map((table, id) => (
                           <ProgrammCard {...table} key={id}/>
                        ))}
                    </div>
                ) : (
                    <h1 className="text-center text-lg text-gray-400 w-full py-10">
                        Този потребител няма добавени програми.
                    </h1>
                )}
            </div>

            <Modal
                onClose={() => setIsModalOneOpen(false)}
                show={isModalOneOpen}
            >
                <CreateTableInnerModal tableForm={tableForm} handleSubmit={handleSubmit} setIsModalOneOpen={setIsModalOneOpen} user={user} />
            </Modal>
        </div>
    );
};

export default ProfilePrograms;
