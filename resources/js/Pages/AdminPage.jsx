import DataTable from "react-data-table-component";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { customStyles } from "@/Constants/StaticData";

export default function Admin(props) {

    const { user, usersData } = props;
 
    const columns = [
        {
          name: 'Username',
          selector: row => row.name ,
          sortable: true,
        },
        {
          name: 'Email',
          selector: row => row.email ,
          sortable: true,
        },
        {
          name: 'Phone Number',
          selector: row => row.phone  && 'empty',
          sortable: true,
        },
        {
          name: 'Instagram',
          selector: row => row.instagram && 'empty',
          sortable: true,
        //   cell: row => <a href={`https://instagram.com/${row.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">{row.instagram}</a>,
        },
        {
          name: 'Message',
          selector: row => row.message  && 'empty',
          sortable: false,
        },
        {
            name: "Action",
            selector: () => <button className="outline-button">View</button>
        }

      ];
      


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Admin Panel
                </h2>
            }
        >
            <div className="py-12 px-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 rounded-lg">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                       <div className="grid-1">
                        <div className="flex-col-3">
                            <h1 className="text-2xl font-bold lg:text-4xl">All Members</h1>
                            <div>
                                <DataTable customStyles={customStyles} columns={columns} data={usersData} pagination/>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
