import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { ResgiterInputs } from '@/Constants/DynamicData';

const RegisterController = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        additional_info: "",
        instagram: "",
        phone: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    const registerInputs = ResgiterInputs(data, errors);

    return {
        handleOnChange, submit, data, errors, registerInputs, processing
    }
}

export default RegisterController