import React from "react";
import Modal from "@/Components/Modal";
import Zoom from 'react-medium-image-zoom'
import UserPageController from "@/Controllers/UserPageController";

import { Swiper, SwiperSlide } from "swiper/react";
import { UploadImageInnerModal } from "@/CustomComponents/Modals";
import { Plus } from "lucide-react";

const ProfileGallery = ({user, images}) => {

    const {
        isModalTwoOpen,
        setIsModalTwoOpen,
    } = UserPageController();

    return (
        <div>
            <div className="flex-between mb-2">
                <h1 className="text-2xl font-bold">Прогрес</h1>
                <button
                    className="flex-2 bg-white rounded-md p-2 пь-4"
                    onClick={() => setIsModalTwoOpen(true)}
                >
                    <span className="hidden sm:flex">Добави Снимка</span>
                    <Plus />
                </button>

                <Modal
                    show={isModalTwoOpen}
                    className="relative"
                    onClose={() => setIsModalTwoOpen(false)}
                >
                    <UploadImageInnerModal
                        setIsModalTwoOpen={setIsModalTwoOpen}
                    />
                </Modal>
            </div>

            <div className="flex justify-center items-center w-full border border-neutral-800 rounded-md p-5 text-white col-span-1 sm:col-span-2 lg:col-span-4">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
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
                    {user && images.length != 0 ? (
                        images.map((image) => (
                            <SwiperSlide key={image.id} className="flex-col-3">
                                <Zoom>
                                    <img
                                        className="w-full lg:w-[300px] h-[300px] mx-auto lg:object-cover  object-center"
                                        src={image.path}
                                    />
                                </Zoom>
                                <p className="mt-2">{image.date}</p>
                            </SwiperSlide>
                        ))
                    ) : (
                        <h1 className="text-lg text-center py-5">
                            {" "}
                            Този потребител няма качени снимки.
                        </h1>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default ProfileGallery;
