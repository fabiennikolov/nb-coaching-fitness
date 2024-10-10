import { usePage } from '@inertiajs/react';
import React, { useState } from 'react'
import { useForm } from '@inertiajs/react';

const UserPageController = () => {
    const { auth } = usePage().props;

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isModalOneOpen, setIsModalOneOpen] = useState(false);
    const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
    const [toggleEditProfileModal, setToggleEditProfileModal] = useState(false)
    const [data, setData] = useState({
        name: "",
        url: "",
        description: "",
    });

    const inputsContainer = () => [
        { name: "Name", value: "name" },
        { name: "URL", value: "url" },
        { name: "Description", value: "description" },
    ];


    const inputs = inputsContainer(data);


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
        setImagePreview
    }
}

export default UserPageController