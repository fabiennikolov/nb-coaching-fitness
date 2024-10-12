import ProfileCard from "./Partials/ProfileCard";
import ProfileInfo from "./Partials/ProfileInfo";
import ProfilePrograms from "./Partials/ProfilePrograms";
import ProfileGallery from "./Partials/ProfileGallery";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ToastContainer } from "react-toastify";



export default function UserShowPage(props) {
    const { user, tables, images, allPermissions } = props;  

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
