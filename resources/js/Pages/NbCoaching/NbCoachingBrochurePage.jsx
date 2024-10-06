import HTMLFlipBook from "react-pageflip";
import BrochureController from "@/Controllers/BorchureController";

import { ChevronLeft, ChevronRight } from "lucide-react";

const NbCoachingBrochurePage = ({ id: paramsId }) => {
    if (paramsId != 1 && paramsId != 2) {
        return window.history.back();
    }

    const brochureLength = paramsId == 1 ? 16 : 28;

    const {
        currentPage,
        handlePreviousPage,
        handleNextPage,
        onFlip,
        flipBook,
        collables,
        isSinglePage,
    } = BrochureController();

    return (
        <div>
            <div className=" max-w-wrapper flex flex-col gap-3 overflow-hidden items-center justify-center lg:min-h-screen">
                <div className="flex-between w-full lg:px-32">
                    <ChevronLeft
                        className="text-white cursor-pointer"
                        size={50}
                        onClick={handlePreviousPage}
                    />
                    <div className="flex-3 text-white">
                        <p>{currentPage}</p>
                        <p>/</p>
                        <p>{flipBook?.current?.pageFlip()?.getPageCount()}</p>
                    </div>
                    <ChevronRight
                        className="text-white cursor-pointer"
                        size={50}
                        onClick={handleNextPage}
                    />
                </div>
                <div className="w-full mx-auto  flex-center px-20">
                    <HTMLFlipBook
                        width={isSinglePage ? 300 : 600}
                        height={isSinglePage ? 500 : 700}
                        size="stretch"
                        minWidth={315}
                        maxWidth={1000}
                        minHeight={400}
                        maxHeight={1536}
                        drawShadow={true}
                        ref={flipBook}
                        flippingTime={1000}
                        autoSize={true}
                        mobileScrollSupport={false}
                        maxShadowOpacity={0.5}
                        clickEventForward={false}
                        swipeDistance={30}
                        className="custom-flipbook z-[-1]"
                        singlePage={isSinglePage}
                    >
                        {[...Array(brochureLength)].map((_, id) => (
                            <div key={id}>
                                <img
                                    src={`/assets${
                                        paramsId == 1
                                            ? "/brochureOne/dobavki"
                                            : "/brochureTwo/naruchnik"
                                    }-${id + 1}.png`}
                                    alt={id}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingBrochurePage;
