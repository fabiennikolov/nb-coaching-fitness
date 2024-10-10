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
    const { user, tables, images } = props;

  

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
               <ProfileCard user={user}/>
               <ProfileInfo user={user}/>
               <ProfilePrograms user={user} tables={tables}/>
               <ProfileGallery user={user} images={images}/>
            </div>
        </AuthenticatedLayout>
    );
}
