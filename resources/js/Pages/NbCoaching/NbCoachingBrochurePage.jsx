import BrochureController from "@/Controllers/BorchureController";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HTMLFlipBook from "react-pageflip";

const NbCoachingBrochurePage = ({ id: paramsId }) => {
    if (paramsId != 1 && paramsId != 2) {
        return window.history.back();
    }

    const {
        currentPage,
        flipBook,
        onFlip,
        isCollapsed,
        brochureLength,
        handleNextPage,
        handlePreviousPage,
    } = BrochureController(paramsId);

    return (
        <div>
            <div className="py-5 max-w-wrapper flex-col-3 items-center justify-center overflow-hidden">
                <div className="text-stone-400 flex-center gap-10 w-full">
                    <ChevronLeft className="cursor-pointer" size={30} onClick={handlePreviousPage} />
                    <div className="flex-3 text-white">
                        <p>{currentPage}</p>
                        <p>/</p>
                        <p>{flipBook?.current?.pageFlip()?.getPageCount()}</p>
                    </div>
                    <ChevronRight size={30} className="cursor-pointer" onClick={handleNextPage}/>
                </div>
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
