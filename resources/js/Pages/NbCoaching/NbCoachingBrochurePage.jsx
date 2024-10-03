import Modal from "@/Components/Modal";
import BrochureController from "@/Controllers/BorchureController";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HTMLFlipBook from "react-pageflip";

import Zoom from "react-medium-image-zoom";

const NbCoachingBrochurePage = ({ id: paramsId }) => {
    const {
        currentPage,
        handlePreviousPage,
        handleNextPage,
        onFlip,
        flipBook,
        collables,
    } = BrochureController();

    if (paramsId != 1 && paramsId != 2) {
        return window.history.back();
    }

    const brochureLength = paramsId == 1 ? 16 : 28;

    return (
        <div>
            <div className="max-w-wrapper flex flex-col gap-3 overflow-hidden items-center justify-center lg:min-h-screen">
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

                {/* Zoom and Pan Wrapper */}
                <div className="w-full mx-auto flex-center px-20">
                  
                    <HTMLFlipBook
                        className="w-full"
                        ref={flipBook}
                        onFlip={onFlip}
                        height={collables ? 550 : 700}
                        width={collables ? 350 : 500}
                        mobileScrollSupport={false}
                        showCover={false}
                    >
                        {[...Array(brochureLength)].map((_, id) => (
                            <img
                                src={`/assets${
                                    paramsId == 1
                                        ? "/brochureOne/dobavki"
                                        : "/brochureTwo/naruchnik"
                                }-${id + 1}.png`}
                                key={id}
                                alt={id}
                                className="cursor-pointer" 
                            />
                        ))}
                    </HTMLFlipBook>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingBrochurePage;
