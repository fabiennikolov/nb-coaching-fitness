import React, { useState } from "react";
import Modal from "@/Components/Modal";
import Zoom from "react-medium-image-zoom";

import { toast } from "react-toastify";
import { Pagination } from "swiper/modules";
import { useForm } from "@inertiajs/react";
import { CloudUpload, Plus, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GalleryCard } from "@/CustomComponents/Cards";

const Progres = ({ auth, setIsModalTwoOpen, images, isModalTwoOpen, user }) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const imageForm = useForm({
        image: null,
        admin: false,
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
        imageForm.setData("images", e.target.files);
    };

    const handleClearImage = () => {
        setImagePreview(null);
    };
    const handleImageSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageForm.data.image);

        imageForm.post(route("user.storeImage", { user: user.id }), {
            data: formData,
            onSuccess: () => {
                setIsModalTwoOpen(false);
                handleClearImage();
                toast.success("Сниката е качена успешно!");
            },
        });
    };

    return (
        <>
            {auth.user ? (
                <div className="flex-col-5">
                    <div className="flex-between">
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
                            <form
                                className="p-6"
                                onSubmit={(e) => handleImageSubmit(e, user.id)}
                            >
                                <h2 className="text-2xl font-bold">
                                    Добавяне на Снимка
                                </h2>

                                <p className="mt-1 text-sm">
                                    Изберете снимка от вашия компютър, за да
                                    добавите към прогреса на потребителя.
                                </p>

                                {/* File Upload Input */}
                                <div className="mt-6 flex-col-1">
                                    <div className="drag-n-drop h-[200px]">
                                        <CloudUpload
                                            className="text-white bg-neutral-800 p-2 rounded-full"
                                            size={45}
                                        />
                                        <p>
                                            <span className="underline text-white">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                        <p>PNG, JPEG, JPG or GIF (max 10mb)</p>
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="h-[200px] opacity-0 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 file:text-white hover:file:bg-neutral-600 focus:border-none outline-none"
                                    />
                                </div>

                                {/* Image Preview */}
                                {imagePreview && (
                                    <div className="flex-col-1 mt-5">
                                        <h1 className="text-lg">Преглед</h1>
                                        <div className="w-full bg-neutral-800 rounded-md p-3 flex-between">
                                            <Zoom>
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="w-[100px] h-[50px] object-cover border border-gray-500 rounded-md"
                                                />
                                            </Zoom>
                                            <X
                                                onClick={handleClearImage}
                                                className="text-red-600 cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="mt-6 flex gap-3 justify-end">
                                    <button
                                        className="fill-button"
                                        type="button"
                                        onClick={() => setIsModalTwoOpen(false)}
                                    >
                                        Откажи
                                    </button>

                                    <button
                                        className="outline-button"
                                        type="submit"
                                    >
                                        Добави Снимка
                                    </button>
                                </div>
                            </form>
                        </Modal>

                        <Modal
                            show={deleteModal}
                            onClose={() => setDeleteModal(false)}
                        >
                            <form className="p-6">
                                <h2 className="text-2xl font-bold">
                                   Изтриване на снимка
                                </h2>
                                <p>
                                    Сигурни ли сте че искате да изтриете тази снимка?
                                </p>
                                <div className="mt-6 flex-col-2"></div>

                                <div className="mt-6 flex-3 justify-end">
                                    <button
                                        type="button"
                                        className="fill-button"
                                        onClick={() => setDeleteModal(false)}
                                    >
                                        Откажи
                                    </button>
                                    <button
                                        className="fill-danger-button"
                                        type="submit"
                                    >
                                        Изтрии
                                    </button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        className="p-5 border  border-neutral-700 rounded-lg"
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {images?.length != 0 ? (
                            images?.map((image) => (
                                <SwiperSlide
                                    key={image.id}
                                    className="flex-col-3 mb-3"
                                >
                                    <GalleryCard
                                        setDeleteModal={setDeleteModal}
                                        deleteModal={deleteModal}
                                        {...image}
                                    />
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
        </>
    );
};

export default Progres;
