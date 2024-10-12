import Modal from "@/Components/Modal";
import UserPageController from "@/Controllers/UserPageController";

import { Plus } from "lucide-react";
import { CreateTableInnerModal } from "@/CustomComponents/Modals";

const ProfilePrograms = ({ user, tables }) => {
    const { isModalOneOpen, setIsModalOneOpen } = UserPageController();

    return (
        <div className="p-6 rounded-lg gradient-one">
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
                            <div
                                key={id}
                                className="flex flex-col p-4 bg-neutral-800 border border-neutral-700 hover:border-red-500 rounded-lg transition-all duration-300"
                            >
                                <iframe
                                    className="lg:h-[200px] w-full pointer-events-none rounded-md"
                                    src={table.url}
                                />
                                <div className="mt-4 text-center">
                                    <h1 className="text-lg font-bold text-white">
                                        {table.name}
                                    </h1>
                                </div>
                                <a
                                    className="mt-4 w-full"
                                    href={table.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="bg-red-600 text-white p-2 rounded-md w-full hover:bg-red-700 transition-all">
                                        Виж
                                    </button>
                                </a>
                            </div>
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
                <CreateTableInnerModal setIsModalOneOpen={setIsModalOneOpen} user={user} />
            </Modal>
        </div>
    );
};

export default ProfilePrograms;
