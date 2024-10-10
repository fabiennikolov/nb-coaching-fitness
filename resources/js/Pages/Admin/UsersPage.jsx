import DataTable from "react-data-table-component";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { customStyles } from "@/Constants/StaticData";
import { adminPageUsersColumn } from "@/Constants/DynamicData";

export default function Admin(props) {
    const { user, usersData } = props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Админ
                </h2>
            }
        >
            <div className="py-12 px-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 rounded-lg">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid-1">
                            <div className="flex-col-3">
                                <h1 className="text-2xl font-bold lg:text-4xl">
                                    Всички клиенти
                                </h1>
                                <div>
                                    <DataTable
                                        customStyles={customStyles}
                                        columns={adminPageUsersColumn}
                                        data={usersData}
                                        pagination
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
