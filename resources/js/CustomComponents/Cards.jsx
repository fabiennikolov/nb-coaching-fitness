import Zoom from "react-medium-image-zoom";

import { Trash2 } from "lucide-react";

export const GalleryCard = ({ path, date, setDeleteModal }) => {
    return (
        <div className="flex flex-col p-4 bg-neutral-800 border border-neutral-700 hover:border-red-500 rounded-lg transition-all duration-300">
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
        <div className="flex flex-col flex-col-3 p-4 bg-neutral-800 border border-neutral-700 hover:border-red-500 rounded-lg transition-all duration-300">
            <iframe
                className="lg:h-[200px] w-full pointer-events-none rounded-md"
                src={url}
            />
            <div className="flex-col-1 text-left">
                x``
                <h1 className="text-lg font-bold text-white">{name}</h1>
                <p>{description ?? "Няма описание"}</p>
            </div>
            <a
                className="w-full"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-red-600 text-white p-2 rounded-md w-full hover:bg-red-700 transition-all">
                    Виж
                </button>
            </a>
        </div>
    );
};
