import { useForm } from '@inertiajs/react';
import { Plus } from "lucide-react";

import React, { useState } from "react";
import Navbar from "@/CustomComponents/Navbar";
import NbCoachingCard from "@/CustomComponents/NbCoachingCard";
import BrochureCotroller from "@/Controllers/BorchureController";

import { brochures } from "@/Constants/StaticData";
import { Swiper, SwiperSlide } from "swiper/react";
import UserPageController from "@/Controllers/UserPageController";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';

const NbCoachingPage = (props) => {

      const { user, images } = props;

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
    const [blur, setBlur] = useState(true);

    const { tables, userPermissions } = props;

    return (
        <div>
            {!blur && (
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex-col-1 z-[100000] w-fit">
                    <h1 className="text-2xl font-bold">
                        {auth.user
                            ? "Регистрацията ви е приета!"
                            : "Влезте в профила си!"}
                    </h1>
                    <p className="max-w-sm text-stone-300 mx-auto">
                        {auth.user
                            ? "Вашата информация ще бъде прегледана, за да потвърдя акаунта ви. Ще се свържа с вас възможно най-скоро с допълнителна информация на посочения от вас имейл."
                            : "Тази услуга е достъпна само за регистрирани потребители. Ако нямате профил, моля, регистрирайте се или се свържете с мен."}
                    </p>
                    {auth.user ? (
                        ""
                    ) : (
                        <div className="flex-2 justify-center">
                            <a
                                href="/contact"
                                className="text-black mt-2 border-none"
                            >
                                <button className="fill-button">Контакт</button>
                            </a>
                            <a href="/login" className="text-black mt-2">
                                <button className="fill-button">Вход</button>
                            </a>
                        </div>
                    )}
                </div>
            )}
            <div className={blur ? "" : "overflow-hidden max-h-screen"}>
                <Navbar />
                <div className="flex-col-3 max-w-wrapper py-28">
                    <div
                        className={`${
                            blur
                                ? ""
                                : "overflow-hidden max-h-screen blur-lg pointer-events-none select-none z-[1000]"
                        } flex-col-2`}
                    >
                        <h1 className="text-2xl font-bold">Наръчници</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[50vh] justify-center items-center">
                            {brochures.map((brochure, id) => (
                                <NbCoachingCard
                                    blur={blur}
                                    setBlur={setBlur}
                                    userPermissions={userPermissions}
                                    {...brochure}
                                    key={id}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className={`${
                            blur
                                ? ""
                                : "overflow-hidden max-h-screen blur-lg pointer-events-none select-none"
                        } flex-col-2`}
                    >
                        <div className="flex-between">
                            <h1 className="text-2xl font-bold">Програми</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {tables?.length > 0 ? (
                                tables.map((table, id) => (
                                    <div
                                        key={id}
                                        className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all"
                                    >
                                        <iframe
                                            className="h-[200px] w-full pointer-events-none "
                                            src={table.url}
                                            style={{
                                                transform: 'scale(0.75)',  // Adjust this value to fit the content
                                                transformOrigin: 'top left',
                                                width: '133%',  // Compensate for the scale
                                                height: '266px'  // Compensate for the scale
                                            }}
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
                                                Виж
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

                    {auth.user ? (
                        <div>
                        <div className="flex-between mt-3">
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
                                        {auth.user
                                        ? "Нямате качени снимки."
                                        : "Тук ще можете да споделяте снимките от прогреса."}
                                    </div>
                            )}
                        </Swiper>
                        </div>
                    ) : (
                        ""
                    )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingPage;
