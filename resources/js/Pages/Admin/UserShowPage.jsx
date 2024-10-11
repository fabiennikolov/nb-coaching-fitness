import Modal from "@/Components/Modal";
import Zoom from "react-medium-image-zoom";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UserPageController from "@/Controllers/UserPageController";

import { Swiper, SwiperSlide } from "swiper/react";
import { PenLine, Plus, Check, X } from "lucide-react";
import {CreateTableInnerModal, UploadImageInnerModal, UserPremisionInnerModal} from "@/CustomComponents/Modals";
import ProfileCard from "./Partials/ProfileCard";
import ProfileInfo from "./Partials/ProfileInfo";
import ProfilePrograms from "./Partials/ProfilePrograms";
import ProfileGallery from "./Partials/ProfileGallery";



export default function UserShowPage(props) {
    const { user, tables, images, allPermissions } = props;  

    const tableForm = useForm({
        name: '',
        url: '',
        description: ''
    });

    const imageForm = useForm({
        image : null,
        admin: true
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImageFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
        imageForm.setData('images', e.target.files); // Store the files as an array
    };

     const handleClearImage = () => {
        setImageFile(null);
        setImagePreview(null);
    };

    const {
        isModalOneOpen,
        setIsModalOneOpen,
        isModalTwoOpen,
        setIsModalTwoOpen,
        handleChange,
        inputs,
        imagePreview,
        setImageFile,
        setImagePreview
    } = UserPageController();

     const handleSubmit = (e) => {
        e.preventDefault();

        tableForm.post(route('admin.storeTable', { user: user.id }), {
            onSuccess: () => {
                setIsModalOneOpen(false); // Close the modal on success
                toast.success('Програмата е добавена успешно!'); // Trigger success toast
            },
        });
    };

    const handleImageSubmit = (e) => {
        e.preventDefault();
        
        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('image', imageForm.data.image); // Append single image

        imageForm.post(route('admin.storeImage', { user: user.id}), {
            data: formData,
            onSuccess: () => {
                setIsModalTwoOpen(false); // Close modal after success
                handleClearImage();
                toast.success('Сниката е качена успешно!');
            },
        });
    };

    const { email, name, phone } = user;
  
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Информация на потребител
                </h2>
            }
        >
            <div className="max-w-wrapper flex-col-5 py-5">
               <ProfileCard user={user} allPermissions={allPermissions} />
               <ProfileInfo user={user}/>
               <ProfilePrograms user={user} tables={tables}/>
               <ProfileGallery user={user} images={images}/>
            </div>
        </AuthenticatedLayout>
    );
}
