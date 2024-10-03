import { usePage } from '@inertiajs/react';
import React, { useState } from 'react'

const UserPageController = () => {
    const { auth } = usePage().props;

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isModalOneOpen, setIsModalOneOpen] = useState(false);
    const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
    const [data, setData] = useState({
        name: "",
        url: "",
        description: "",
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImageFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    const inputsContainer = (data) => [
        { name: "Name", value: "name" },
        { name: "URL", value: "url" },
        { name: "Description", value: "description" },
    ];

    const inputs = inputsContainer(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };



    const handleClearImage = () => {
        setImageFile(null);
        setImagePreview(null);
    };
    return {
        handleClearImage,
        handleFileChange,
        imagePreview,
        inputs,
        isModalOneOpen,
        setIsModalOneOpen,
        isModalTwoOpen,
        setIsModalTwoOpen,
        handleChange,
        auth,
    }
}

export default UserPageController