import BrochureController from "@/Controllers/BorchureController";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HTMLFlipBook from "react-pageflip";

const NbCoachingBrochurePage = () => {
    const {
        currentPage,
        allPages,
        handlePreviousPage,
        handleNextPage,
        onFlip,
        flipBook,
    } = BrochureController();

    return (
        <div>
            <div className=" max-w-wrapper flex flex-col gap-3  overflow-hidden items-center justify-center lg:min-h-screen">
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
                <HTMLFlipBook
                    className="w-full"
                    ref={flipBook}
                    onFlip={onFlip}
                    width={500}
                    height={650}
                >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                        (_, id) => (
                            <img
                                src={`/assets/brochureOne/05cdb2d5-93b2-4258-9a23-929be231661f-${id}.jpg`}
                                alt={id}
                            />
                        )
                    )}
                </HTMLFlipBook>
            </div>
        </div>
    );
};

export default NbCoachingBrochurePage;
