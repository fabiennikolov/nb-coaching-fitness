import { usePage } from '@inertiajs/react';
import { useState } from 'react'
import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

const UserPageController = () => {
    const { user } = usePage().props.auth;

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isModalOneOpen, setIsModalOneOpen] = useState(false);
    const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
    const [toggleEditProfileModal, setToggleEditProfileModal] = useState(false)

    const inputsContainer = () => [
        { name: "Name", value: "name" },
        { name: "URL", value: "url" },
        { name: "Description", value: "description" },
    ];
    
    const tableForm = useForm({
        name: "",
        url: "",
        description: ""
    });

    const imageForm = useForm({
        image: null,
        admin: true
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImageFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
        imageForm.setData("images", e.target.files);
    };

    const handleClearImage = () => {
        setImageFile(null);
        setImagePreview(null);
    };

    const handleSubmit = (e, id) => {        
        e.preventDefault();
        
        tableForm.post(route("admin.storeTable", { user: id }), {
            onSuccess: () => {
                setIsModalOneOpen(false);
                toast.success("Програмата е добавена успешно!");
            },
        });
    };

    const handleImageSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageForm.data.image);

        imageForm.post(route("admin.storeImage", { user: user.id }), {
            data: formData,
            onSuccess: () => {
                setIsModalTwoOpen(false); 
                handleClearImage(); 
                toast.success("Сниката е качена успешно!");
            },
        });
    };


    const inputs = inputsContainer(tableForm);


    return {
        imagePreview,
        inputs,
        isModalOneOpen,
        setIsModalOneOpen,
        isModalTwoOpen,
        setIsModalTwoOpen,
        toggleEditProfileModal, 
        setToggleEditProfileModal,
        setImageFile,
        setImagePreview,

        handleFileChange,
        handleImageSubmit,
        handleSubmit,
        handleClearImage,
        imageFile,
        tableForm
    }
}

export default UserPageController