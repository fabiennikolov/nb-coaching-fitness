import { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { LoginInputs } from '@/Constants/StaticData';

const LoginController = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
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
        post(route("login"));
    };


    const loginInputs = LoginInputs(data, errors)

  return { loginInputs, submit,  handleOnChange, data, errors, processing}
}

export default LoginController