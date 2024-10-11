import Modal from "@/Components/Modal";
import UserPageController from "@/Controllers/UserPageController";

import { Plus } from "lucide-react";
import { CreateTableInnerModal } from "@/CustomComponents/Modals";

const ProfilePrograms = ({ user, tables }) => {

    const { isModalOneOpen, setIsModalOneOpen } = UserPageController();
 
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Програми</h1>
                <button
                    className="flex-2 bg-white rounded-md p-2 пь-4"
                    onClick={() => setIsModalOneOpen(true)}
                >
                    <span className="hidden sm:flex">Добави Програма</span>
                    <Plus />
                </button>
                <Modal
                    onClose={() => setIsModalOneOpen(false)}
                    show={isModalOneOpen}
                >
                    <CreateTableInnerModal
                        setIsModalOneOpen={setIsModalOneOpen}
                    />
                </Modal>
            </div>

            <div className="border border-neutral-800 p-5 rounded-md">
                {user && tables.length != 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {tables.map((table, id) => (
                            <div
                                key={id}
                                className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all"
                            >
                                <iframe
                                    className="lg:h-[200px] w-full pointer-events-none blur-sm"
                                    src={table.url}
                                />
                                <div className="flex-between">
                                    <div className="flex-col-1">
                                        <h1 className="font-bold text-white lg:text-lg">
                                            {table.name}
                                        </h1>
                                    </div>
                                </div>
                                <a
                                    className="w-full text-black"
                                    href={table.url}
                                >
                                    <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                                        Виж
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h1 className="text-center text-lg w-full py-10">
                        Този потребител няма добавени програми.{" "}
                    </h1>
                )}
            </div>
        </div>
    );
};

export default ProfilePrograms;
