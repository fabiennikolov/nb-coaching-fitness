import BrochureController from "@/Controllers/BorchureController";

import { useEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import Zoom from 'react-medium-image-zoom'

import { Navigation } from "swiper/modules";

const NbCoachingBrochurePage = ({ id: paramsId }) => {
    const swiperRef = useRef(null);
    if (paramsId != 1 && paramsId != 2) {
        return window.history.back();
    }

    const brochureLength = paramsId == 1 ? 16 : 28;

    const { handlePreviousPage, handleNextPage } = BrochureController();

    const [slides, setSlides] = useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    useEffect(() => {
        setSlides(brochureLength);
    }, []);

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.activeIndex);
    };

    return (
        <div>
            <div className="py-5 max-w-wrapper flex flex-col gap-3 items-center justify-center">
                <div className="flex-center w-full lg:px-32">
                    <div className="flex-3 text-white">
                        <p>{currentSlideIndex}</p>
                        <p>/</p>
                        <p>{slides}</p>
                    </div>
                </div>
                <Swiper
                    className="swiper"
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {[...Array(brochureLength)].map((_, id) => (
                        <SwiperSlide key={id}>
                            <Zoom>
                                <img
                                    src={`/assets${
                                        paramsId == 1
                                            ? "/brochureOne/dobavki"
                                            : "/brochureTwo/naruchnik"
                                    }-${id + 1}.png`}
                                    alt={id}
                                    className="max-w-[450px] h-auto mx-auto"
                                />
                            </Zoom>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default NbCoachingBrochurePage;
