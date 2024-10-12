import react, { useState } from "react";
import Modal from "@/Components/Modal";

import { toast, ToastContainer } from "react-toastify";

import { UploadImageInnerModal } from "@/CustomComponents/Modals";
import { Plus } from "lucide-react";
import { GalleryCard } from "@/CustomComponents/Cards";
import { useForm } from "@inertiajs/react";
import { toastContainerStyle } from "@/Constants/StaticData";

const ProfileGallery = ({ user, images }) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const imageForm = useForm({
        image: null,
        admin: true,
    });

    const handleClearImage = () => {
        setImagePreview(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
        imageForm.setData("images", e.target.files);
    };

    const handleImageSubmit = (e, id) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageForm.data.image);

        imageForm.post(route("admin.storeImage", { user: id }), {
            data: formData,
            onSuccess: () => {
                setIsModalTwoOpen(false);
                handleClearImage();
                toast.success("Сниката е качена успешно!", {
                    style: toastContainerStyle,
                });
            },
        });
    };

    return (
        <div className="p-6 rounded-lg gradient-two">
            <ToastContainer position="bottom-right" />

            <div className="flex-col-3">
                {/* Title and Button in the same div */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Прогрес</h1>
                    <button
                        className="flex items-center bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4 transition-all duration-300"
                        onClick={() => setIsModalTwoOpen(true)}
                    >
                        <span className="hidden sm:inline">Добави Снимка</span>
                        <Plus />
                    </button>
                </div>

                {user && images.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {images.map((image, id) => (
                            <GalleryCard
                                {...image}
                                key={id}
                                setDeleteModal={setDeleteModal}
                            />
                        ))}
                    </div>
                ) : (
                    <h1 className="text-center text-lg text-gray-400 w-full py-10">
                        Този потребител няма качени снимки.
                    </h1>
                )}
            </div>

            <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
                <form className="p-6">
                    <h2 className="text-2xl font-bold">Изтриване на снимка</h2>
                    <p>Сигурни ли сте че искате да изтриете тази снимка?</p>
                    <div className="mt-6 flex-col-2"></div>

                    <div className="mt-6 flex-3 justify-end">
                        <button
                            type="button"
                            className="fill-button"
                            onClick={() => setDeleteModal(false)}
                        >
                            Откажи
                        </button>
                        <button className="fill-danger-button" type="submit">
                            Изтрии
                        </button>
                    </div>
                </form>
            </Modal>

            <Modal
                show={isModalTwoOpen}
                onClose={() => setIsModalTwoOpen(false)}
            >
                <UploadImageInnerModal
                    setIsModalTwoOpen={setIsModalTwoOpen}
                    user={user}
                    handleClearImage={handleClearImage}
                    imagePreview={imagePreview}
                    handleFileChange={handleFileChange}
                    handleImageSubmit={handleImageSubmit}
                />
            </Modal>
        </div>
    );
};

export default ProfileGallery;
