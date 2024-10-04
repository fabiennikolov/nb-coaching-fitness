import { useForm } from '@inertiajs/react';
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { PenLine, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { mockPorgressData } from "@/Constants/StaticData";
import UserPageController from "@/Controllers/UserPageController";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserShowPage(props) {
    const { user, tables } = props;

    const g = 4
    const tableForm = useForm({
        name: '',
        url: '',
        description: ''
    });

    const {
        isModalOneOpen,
        setIsModalOneOpen,
        isModalTwoOpen,
        setIsModalTwoOpen,
        handleChange,
        inputs,
        handleClearImage,
        handleFileChange,
        imagePreview,
    } = UserPageController();

     const handleSubmit = (e) => {
        e.preventDefault();

        tableForm.post(route('admin.storeTable', { user: user.id }), {
            onSuccess: () => {
                setIsModalOneOpen(false); // Close the modal on success
                toast.success('Програмата е добавена успешно!'); // Trigger success toast
            },
        });
    };

    const { email, name, phone } = user;
  
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    User's Info
                </h2>
            }
        >
            <div className="max-w-wrapper flex-col-5 py-5">
                {/* Modal One: Add Table */}
                <ToastContainer />
                

                <div className="flex-between border border-neutral-800 rounded-md p-5">
                    <div className="flex-3">
                        <img
                            className="w-[50px] h-[50px] rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                        />
                        <div className="flex-col-1">
                            <h1 className="text-lg font-bold">{name}</h1>
                            <p>{email}</p>
                        </div>
                    </div>
                    <button className="border border-neutral-800 p-2 rounded-md px-4 flex-2 text-stone-400 w-max">
                        Edit
                        <PenLine size={20} />
                    </button>
                </div>
                <div className="grid-2 border flex-col-3 border-neutral-800 rounded-md p-5">
                    <div className="flex-col-3">
                        <h1 className="text-xl font-bold">
                            Информация
                        </h1>
                        <div className="grid-2">
                            <div className="flex-col-1">
                                <h1>Име</h1>
                                <p>{name.split(" ")[0]}</p>
                            </div>
                            <div className="flex-col-1">
                                <h1>Фамилия</h1>
                                <p>{name.split(" ")[1]}</p>
                            </div>
                        </div>
                        <div className="grid-2">
                            <div className="flex-col-1">
                                <h1>Имейл</h1>
                                <p>{email}</p>
                            </div>
                            <div className="flex-col-1">
                                <h1>Мобилен телефон</h1>
                                <p>{phone ?? "No Phone provided"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end">
                        <button className="border border-neutral-800 p-2 rounded-md px-4 flex-2 text-stone-400 w-max h-max">
                            Редактирай
                            <PenLine size={20} />
                        </button>
                    </div>
                </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Програми</h1>
                    <button
                        className="flex-2 bg-white rounded-md p-2 пь-4"
                        onClick={() => setIsModalOneOpen(true)}
                    >
                        Добави Програма
                        <Plus />
                    </button>
                    <Modal
                        show={isModalOneOpen}
                    >
                        <form className="p-6" onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-bold">
                                Добавяне на таблица за потребител
                            </h2>

                            <div className="mt-6 flex-col-2">
                                {inputs.map((input, index) => (
                                    <div key={index} className="flex-col-1">
                                        <label className="text-white">
                                            {input.name}
                                        </label>
                                        <TextInput
                                            name={input.value}
                                            onChange={(e) => tableForm.setData(input.value, e.target.value)}
                                            className="w-full"
                                            type="text"
                                        />
                                        {tableForm.errors[input.value] && <p className="text-red-500 text-sm mt-1">{tableForm.errors[input.value]}</p>}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex gap-3 justify-end">
                                <SecondaryButton
                                    onClick={() => setIsModalOneOpen(false)}
                                >
                                    Откажи
                                </SecondaryButton>
                                <button className="outline-button"  type="submit">
                                    Добави
                                </button>
                            </div>
                        </form>
                    </Modal>
                </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {user ? (
                                tables.map((table, id) => (
                                    <div
                                        key={id}
                                        className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all"
                                    >
                                        <iframe
                                            className="h-[200px] w-full pointer-events-none blur-sm"
                                            src={table.url}
                                        />
                                        <div className="flex-between">
                                            <div className="flex-col-1">
                                                <h1 className="font-bold text-white text-lg">
                                                    {table.name}
                                                </h1>
                                            </div>
                                        </div>
                                        <a
                                            className="w-full text-black"
                                            href={table.url}
                                        >
                                            <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                                                See
                                            </button>
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <NbCoachingCard />
                            )}
                    </div>
            </div>

                {/* Modal Two: Add Picture */}
                <div className="flex-between mb-2">
                    <h1 className="text-2xl font-bold">Прогрес</h1>
                    <button
                        className="flex-2 bg-white rounded-md p-2 пь-4"
                        onClick={() => setIsModalTwoOpen(true)}
                    >
                        Добави Снимка
                        <Plus />
                    </button>

                    <Modal
                        show={isModalTwoOpen}
                        onClose={() => setIsModalTwoOpen(false)}
                    >
                        <form className="p-6">
                            <h2 className="text-2xl font-bold">
                                Добавяне на Снимка
                            </h2>

                            <p className="mt-1 text-sm">
                                Изберете снимка от вашия компютър, за да
                                добавите към прогреса на потребителя.
                            </p>

                            {/* File Upload Input */}
                            <div className="mt-6 flex-col-1">
                                <label className="text-white">
                                    Изберете Снимка
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 file:text-white hover:file:bg-neutral-600 focus:border-none outline-none"
                                />
                            </div>

                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="mt-4">
                                    <h3 className="text-white mb-2">
                                        Preview:
                                    </h3>
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-[300px] h-[200px] object-cover border border-gray-500 rounded-md"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleClearImage}
                                        className="mt-2 bg-red-600 text-white px-3 py-1 rounded-md"
                                    >
                                        Премахни снимка
                                    </button>
                                </div>
                            )}

                            <div className="mt-6 flex gap-3 justify-end">
                                <SecondaryButton
                                    onClick={() => setIsModalTwoOpen(false)}
                                >
                                    Откажи
                                </SecondaryButton>

                                <button
                                    className="outline-button"
                                    type="submit"
                                >
                                    Добави Снимка
                                </button>
                            </div>
                        </form>
                    </Modal>
                </div>

                {/* Swiper for displaying progress */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {mockPorgressData.map((data, id) => (
                        <SwiperSlide key={id} className="flex-col-3">
                            <img
                                className="w-[400px] h-[300px] object-cover"
                                src={data.image}
                            />
                            <p className="mt-2">{data.date}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </AuthenticatedLayout>
    );
}
