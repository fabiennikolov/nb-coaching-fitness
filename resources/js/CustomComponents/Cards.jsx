import Zoom from "react-medium-image-zoom";

import { ArrowRight, Trash2 } from "lucide-react";

export const GalleryCard = ({ path, date, setDeleteModal }) => {
    return (
        <div className="flex flex-col hover:border-red-500 rounded-lg transition-all duration-300">
            <Zoom>
                <img
                    className="w-full h-[300px] object-cover rounded-md"
                    src={path}
                    alt="Progress"
                />
            </Zoom>
            <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-bold text-white">{date}</p>
                <button
                    className="text-red-500 hover:text-red-700 transition-all duration-300"
                    onClick={() => setDeleteModal(true)}
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

export const ProgrammCard = ({ url, name, description }) => {
    return (
        <a
            className="w-full"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="group rounded-sm transition-all">
                <iframe
                    className="lg:h-[200px] w-full pointer-events-none rounded-t-sm "
                    src={url}
                />
                <div className="flex-between p-6 bg-neutral-300 group-hover:bg-white">
                    <div className="flex-col-1">
                        <h1 className="font-bold text-black text-lg">{name}</h1>
                        <p>{description ?? "Няма описание"}</p>
                        <p className="text-black flex items-center gap-3">
                            Виж програмата <ArrowRight />
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
};
