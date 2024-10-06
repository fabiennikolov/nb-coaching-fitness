import BrochureController from "@/Controllers/BorchureController";

import { useEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import Zoom from "react-medium-image-zoom";

import { Navigation } from "swiper/modules";
import HTMLFlipBook from "react-pageflip";

const NbCoachingBrochurePage = ({ id: paramsId }) => {
    const swiperRef = useRef(null);
    if (paramsId != 1 && paramsId != 2) {
        return window.history.back();
    }

    const brochureLength = paramsId == 1 ? 16 : 28;

    const {
        currentPage,
        flipBook,
        onFlip,
        isCollapsed,
        handleNextPage,
        handlePreviousPage,
        auth,
        isSinglePage,
    } = BrochureController();

    return (
        <div>
            <div className="py-5 max-w-wrapper flex flex-col gap-3 items-center justify-center overflow-hidden">
                <div className="flex-center w-full">
                    <div className="flex-3 text-white">
                        <p>{currentPage}</p>
                        <p>/</p>
                        <p>{flipBook?.current?.pageFlip()?.getPageCount()}</p>
                    </div>
                </div>
                {/* <Swiper
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
                                    className="w-full lg:max-w-[450px] mx-auto"
                                />
                            </Zoom>
                        </SwiperSlide>
                    ))}
                </Swiper> */}
                    <HTMLFlipBook
                        className="w-full"
                        ref={flipBook}
                        onFlip={onFlip}
                        height={isCollapsed ? 550 : 870}
                        width={isCollapsed ? 350 : 640}
                        mobileScrollSupport={false}
                        showCover={false}
                    >
                        {[...Array(brochureLength)].map((_, id) => (
                            <div className="demoPage">
                                <img
                                    src={`/assets${
                                        paramsId === 1
                                            ? "/brochureOne/dobavki"
                                            : "/brochureTwo/naruchnik"
                                    }-${id + 1}.png`}
                                    key={id}
                                    alt={`Slide ${id + 1}`}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>
            </div>
        </div>
    );
};

export default NbCoachingBrochurePage;
