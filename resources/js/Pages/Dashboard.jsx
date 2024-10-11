import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-[var(--mainDarkLightColor)] overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 ">
                            <p>You're logged in!</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
