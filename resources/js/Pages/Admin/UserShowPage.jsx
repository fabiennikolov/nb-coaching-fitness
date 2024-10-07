import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UserPageController from "@/Controllers/UserPageController";

import { toast } from "react-toastify";
import { useForm } from "@inertiajs/react";
import { PenLine, Plus, Check, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer } from "react-toastify";

export default function UserShowPage(props) {
    const { user, tables, images } = props;

    const tableForm = useForm({
        name: "",
        url: "",
        description: "",
    });

    const imageForm = useForm({
        image: null,
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImageFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
        imageForm.setData("images", e.target.files); // Store the files as an array
    };

    const handleClearImage = () => {
        setImageFile(null);
        setImagePreview(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        tableForm.post(route("admin.storeTable", { user: user.id }), {
            onSuccess: () => {
                setIsModalOneOpen(false); // Close the modal on success
                toast.success("Програмата е добавена успешно!"); // Trigger success toast
            },
        });
    };

    const handleImageSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append("image", imageForm.data.image); // Append single image

        imageForm.post(route("admin.storeImage", { user: user.id }), {
            data: formData,
            onSuccess: () => {
                setIsModalTwoOpen(false); // Close modal after success
                handleClearImage();
                toast.success("Сниката е качена успешно!");
            },
        });
    };

    const {
        inputs,
        imagePreview,
        isModalTwoOpen,
        isModalOneOpen,
        toggleEditProfileModal,
        setToggleEditProfileModal,
        setIsModalOneOpen,
        setIsModalTwoOpen,
        setImageFile,
        setImagePreview,
    } = UserPageController();

   

    const { email, name, phone, status = "Подвърден" } = user;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    User's Info
                </h2>
            }
        >
            <div className="max-w-wrapper flex-col-5 py-5">
                {/* Modal One: Add Table */}
                <ToastContainer />

                <div className="flex-between border border-neutral-800 rounded-md p-5">
                    <div className="flex-3">
                        <img
                            className="w-[50px] h-[50px] rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                        />
                        <div className="flex-col-1">
                            <h1 className="text-lg font-bold">{name}</h1>
                            <p>{email}</p>
                            <p className="flex-2">
                                {status}{" "}
                                {status !== "Подвърден" ? (
                                    <X className="text-red-600" />
                                ) : (
                                    <Check className="text-green-600" />
                                )}
                            </p>
                        </div>
                    </div>
                    <button onClick={() => setToggleEditProfileModal(true)} className="bg-white text-black p-2 rounded-md px-4 flex-2 w-max">
                        <span className="hidden sm:flex">Редактирай</span>
                        <PenLine size={20} />
                    </button>

                    <Modal  show={toggleEditProfileModal}>
                        <form className="flex flex-col gap-5 p-5">
                            <div className="flex flex-col gap-1"> 
                                <h1 className="text-2xl font-bold">Променя на роля/статус</h1>
                                <p>Промени статуса или ролята на даденият потребител.</p>
                            </div>

                            <div className="flex-2 justify-end">
                                <button type="button" onClick={() => setToggleEditProfileModal(false)} className="fill-button">Откажи</button>
                                <button type="submit" className="outline-button">Промени</button>
                            </div>
                        </form>
                    </Modal>
                </div>
                <div className="grid-2 border flex-col-3 border-neutral-800 rounded-md p-5">
                    <div className="flex-col-3">
                        <h1 className="text-xl font-bold">Информация</h1>
                        <div className="grid-2 gap-3">
                            <div className="flex-col-1">
                                <h1>Име</h1>
                                <p>{name.split(" ")[0]}</p>
                            </div>
                            <div className="flex-col-1">
                                <h1>Фамилия</h1>
                                <p>{name.split(" ")[1]}</p>
                            </div>
                        </div>
                        <div className="grid-2 gap-3">
                            <div className="flex-col-1">
                                <h1>Имейл</h1>
                                <p>{email}</p>
                            </div>
                            <div className="flex-col-1">
                                <h1>Мобилен телефон</h1>
                                <p>{phone ?? "Не е предоставен телефон"}</p>
                            </div>
                        </div>
                        <div className="grid-2 gap-3">
                            <div className="flex-col-1">
                                <h1>Роля</h1>
                                <p>{phone ?? "Регистриран потребител"}</p>
                            </div>
                            <div className="flex-col-1">
                                <h1>Статус</h1>
                                <p className="flex-2">
                                    {phone ?? "Потвърден"}{" "}
                                    <Check className="text-green-600" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Програми</h1>
                        <button
                            className="flex-2 bg-white rounded-md p-2 пь-4"
                            onClick={() => setIsModalOneOpen(true)}
                        >
                            <span className="hidden sm:flex">Добави Програма</span>
                            <Plus />
                        </button>
                        <Modal show={isModalOneOpen}>
                            <form className="p-6" onSubmit={handleSubmit}>
                                <h2 className="text-2xl font-bold">
                                    Добавяне на таблица за потребител
                                </h2>
                                <p>Добавете табалица с упражнения за даденият потребител</p>
                                <div className="mt-6 flex-col-2">
                                    {inputs.map((input, index) => (
                                        <div key={index} className="input-container flex-col-1">
                                            <input
                                                name={input.value}
                                                placeholder={input.name}
                                                onChange={(e) =>
                                                    tableForm.setData(
                                                        input.value,
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full"
                                                type="text"
                                            />
                                            {tableForm.errors[input.value] && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {
                                                        tableForm.errors[
                                                            input.value
                                                        ]
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex gap-3 justify-end">
                                    <SecondaryButton
                                        onClick={() => setIsModalOneOpen(false)}
                                    >
                                        Откажи
                                    </SecondaryButton>
                                    <button
                                        className="outline-button"
                                        type="submit"
                                    >
                                        Добави
                                    </button>
                                </div>
                            </form>
                        </Modal>
                    </div>

                    <div className="border border-neutral-800 p-5 rounded-md">
                        {user && tables.length != 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {tables.map((table, id) => (
                                    <div
                                        key={id}
                                        className="flex-col-3 p-3 border border-neutral-800 group hover:border-neutral-300 rounded-md transition-all"
                                    >
                                        <iframe
                                            className="h-[200px] w-full pointer-events-none blur-sm"
                                            src={table.url}
                                        />
                                        <div className="flex-between">
                                            <div className="flex-col-1">
                                                <h1 className="font-bold text-white text-lg">
                                                    {table.name}
                                                </h1>
                                            </div>
                                        </div>
                                        <a
                                            className="w-full text-black"
                                            href={table.url}
                                        >
                                            <button className="bg-white p-3 rounded-md flex-center w-full gap-3 hover:bg-neutral-300 transition-all">
                                                See
                                            </button>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <h1 className="text-center text-lg w-full py-10">
                                Този потребител няма добавени програми.{" "}
                            </h1>
                        )}
                    </div>
                </div>

                {/* Modal Two: Add Picture */}
                <div className="flex-between mb-2">
                    <h1 className="text-2xl font-bold">Прогрес</h1>
                    <button
                        className="flex-2 bg-white rounded-md p-2 пь-4"
                        onClick={() => setIsModalTwoOpen(true)}
                    >
                        <span className="hidden sm:flex">Добави Снимка</span>
                        <Plus />
                    </button>

                    <Modal
                        show={isModalTwoOpen}
                        onClose={() => setIsModalTwoOpen(false)}
                    >
                        <form className="p-6" onSubmit={handleImageSubmit}>
                            <h2 className="text-2xl font-bold">
                                Добавяне на Снимка
                            </h2>

                            <p className="mt-1 text-sm">
                                Изберете снимка от вашия компютър, за да
                                добавите към прогреса на потребителя.
                            </p>

                            {/* File Upload Input */}
                            <div className="mt-6 flex-col-1">
                                <label className="text-white">
                                    Изберете Снимка
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 file:text-white hover:file:bg-neutral-600 focus:border-none outline-none"
                                />
                            </div>

                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="mt-4">
                                    <h3 className="text-white mb-2">
                                        Preview:
                                    </h3>
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-[300px] h-[200px] object-cover border border-gray-500 rounded-md"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleClearImage}
                                        className="mt-2 bg-red-600 text-white px-3 py-1 rounded-md"
                                    >
                                        Премахни снимка
                                    </button>
                                </div>
                            )}

                            <div className="mt-6 flex gap-3 justify-end">
                                <SecondaryButton
                                    onClick={() => setIsModalTwoOpen(false)}
                                >
                                    Откажи
                                </SecondaryButton>

                                <button
                                    className="outline-button"
                                    type="submit"
                                >
                                    Добави Снимка
                                </button>
                            </div>
                        </form>
                    </Modal>
                </div>

                {/* Swiper for displaying progress */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {user && images.length != 0 ? (
                        images.map((image) => (
                            <SwiperSlide key={image.id} className="flex-col-3">
                                <img
                                    className="w-[300px] h-[300px] mx-auto object-cover  object-center"
                                    src={image.path}
                                />
                                <p className="mt-2">{image.date}</p>
                            </SwiperSlide>
                        ))
                    ) : (
                        <div className="flex justify-center items-center w-full h-[200px] border border-neutral-800 rounded-md p-5 text-white col-span-1 sm:col-span-2 lg:col-span-4">
                            Този потребител няма качени снимки.
                        </div>
                    )}
                </Swiper>
            </div>
        </AuthenticatedLayout>
    );
}
