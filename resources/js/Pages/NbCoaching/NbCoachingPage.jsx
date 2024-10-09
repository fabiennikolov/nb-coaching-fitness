import { useForm } from '@inertiajs/react';
import { Plus } from "lucide-react";

import React from "react";
import Navbar from "@/CustomComponents/Navbar";
import BrochureCotroller from "@/Controllers/BorchureController";

import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import NbCoachingCard from "@/CustomComponents/NbCoachingCard";
import { brochures } from "@/Constants/StaticData";
import { Swiper, SwiperSlide } from "swiper/react";
import UserPageController from "@/Controllers/UserPageController";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NbCoachingPage = (props) => {
    const { user, tables,images } = props;

    const imageForm = useForm({
        image : null,
        admin: false
    });

    console.log('images', images)
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImageFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
        imageForm.setData('images', e.target.files); // Store the files as an array
    };

     const handleClearImage = () => {
        setImageFile(null);
        setImagePreview(null);
    };
     const handleImageSubmit = (e) => {
        e.preventDefault();
        
        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('image', imageForm.data.image); // Append single image

        imageForm.post(route('user.storeImage', { user: user.id}), {
            data: formData,
            onSuccess: () => {
                setIsModalTwoOpen(false); // Close modal after success
                handleClearImage();
                toast.success('Сниката е качена успешно!');
            },
        });
    };

    const {
        isModalOneOpen,
        setIsModalOneOpen,
        isModalTwoOpen,
        setIsModalTwoOpen,
        handleChange,
        inputs,
        imagePreview,
        setImageFile,
        setImagePreview
    } = UserPageController();

    const {
        confirmUserDeletion,
        closeModal,
        confirmingUserDeletion,
        auth,
    } = BrochureCotroller();

    return (
        <div>
            <ToastContainer />
            {!auth.user && (
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex-col-1 z-[100000]">
                    <h1 className="text-2xl font-bold">Не си регистриран</h1>
                    <p>Свържи се с мен за да повече информация</p>
                    <a href="/contact" className="text-black mt-2">
                        <button className="fill-button">Контакт</button>
                    </a>
                    <a href="/login" className="text-black mt-2">
                        <button className="fill-button">Вход</button>
                    </a>
                </div>
            )}
            <div className={auth.user ? "" : "overflow-hidden max-h-screen"}>
                <Navbar />
                <div className="flex-col-3 max-w-wrapper py-28">
                    <div
                        className={`${
                            auth.user
                                ? ""
                                : "overflow-hidden max-h-screen blur-lg pointer-events-none select-none z-[1000]"
                        } flex-col-2`}
                    >
                        <h1 className="text-2xl font-bold">Наръчници</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[50vh] justify-center items-center">
                            {brochures.map((brochure, id) => (
                                <NbCoachingCard {...brochure} key={id}/>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`${
                            auth.user
                                ? ""
                                : "overflow-hidden max-h-screen blur-lg pointer-events-none select-none"
                        } flex-col-2`}
                    >
                        <div className="flex-between">
                            <h1 className="text-2xl font-bold">Програми</h1>
                            
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {tables.length ? (
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
                                <div className="flex justify-center items-center w-full h-[200px] border border-neutral-800 rounded-md p-5 text-white col-span-1 sm:col-span-2 lg:col-span-4">
                                    Моля изчакайте добавяне на програми. 
                                </div>
                            )}
                        </div>

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
                                <form className="p-6" onSubmit={handleImageSubmit}>
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
                            {images.length != 0 ? (
                                    images.map((image) => (
                                        <SwiperSlide key={image.id} className="flex-col-3">
                                            <img
                                                className="w-[400px] h-[300px] object-cover"
                                                src={image.path}
                                            />
                                            <p className="mt-2">{image.date}</p>
                                        </SwiperSlide>
                                        ))
                                    ) : (
                                    <div className="flex justify-center items-center w-full h-[200px] border border-neutral-800 rounded-md p-5 text-white col-span-1 sm:col-span-2 lg:col-span-4">
                                        Този потребител няма качени снимки. 
                                    </div>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingPage;
