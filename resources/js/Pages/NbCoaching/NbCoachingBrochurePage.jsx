import BrochureController from "@/Controllers/BorchureController";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HTMLFlipBook from "react-pageflip";

const NbCoachingBrochurePage = () => {
    const {
        currentPage,
        handlePreviousPage,
        handleNextPage,
        onFlip,
        flipBook,
        collables
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
                        className="w-full"
                        ref={flipBook}
                        onFlip={onFlip}
                        height={collables ? 500 : 650}
                        width={collables ? 350 : 500}
                    >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                            (_, id) => (
                                <img
                                    src={`/assets/brochureOne/pic-${
                                        id + 1
                                    }.jpg`}
                                    alt={id}
                                />
                            )
                        )}
                    </HTMLFlipBook>
                </div>
            </div>
        </div>
    );
};

export default NbCoachingBrochurePage;
