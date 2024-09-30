import DataTable from "react-data-table-component";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { customStyles } from "@/Constants/StaticData";

export default function UserShowPage(props) {
    const { user, usersData } = props;

    const {email, name, instagram, phone} = user
    console.log(user);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Admin
                </h2>
            }
        >
            <div className="py-12 px-5">
                <p>{email}</p>
                <p>{name}</p>
                <p>{instagram}</p>
                <p>{phone}</p>        
            </div>
        </AuthenticatedLayout>
    );
}
