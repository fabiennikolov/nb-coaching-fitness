export const adminPageUsersColumn = [
    {
        name: "Име",
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
    },
    {
        name: "Телефонен номер",
        selector: (row) => row.phone,
        sortable: true,
    },
    {
        name: "Instagram",
        selector: (row) => row.instagram,
        sortable: true,
    },
    {
        name: "Фитнес цели",
        selector: (row) => row.additional_info,
        sortable: false,
    },
    {
        name: "Action",
        cell: (row) => (
        <a className="text-black" href={`/admin/user/${row.id}`}>
            <button className="fill-button">Виж</button>
        </a>
    ),
    },
];

export const ResgiterInputs = (data, errors) => [
    {
        id: "name",
        name: "name",
        type: "text",
        label: "Име",
        required: true,
        value: data.name,
        error: errors.name,
        placeholder: "Име (required)",
    },
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        required: true,
        value: data.email,
        error: errors.email,
        placeholder: "Email (required)",
        autoComplete: "username",
    },
    {
        id: "password",
        name: "password",
        type: "password",
        label: "Парола",
        required: true,
        value: data.password,
        error: errors.password,
        autoComplete: "new-password",
    },
    {
        id: "password_confirmation",
        name: "password_confirmation",
        type: "password",
        label: "Потвърждение на парола",
        required: true,
        value: data.password_confirmation,
        error: errors.password_confirmation,
        autoComplete: "new-password",
    },
    {
        id: "instagram",
        name: "instagram",
        type: "text",
        label: "@ Instagram",
        value: data.instagram,
        error: errors.instagram,
    },
    {
        id: "phone",
        name: "phone",
        type: "number",
        label: "Телефон",
        value: data.phone,
        error: errors.phone,
    },
];

export const LoginInputs = (data, errors) => [
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        autoComplete: "username",
        required: true,
        value: data.email,
        error: errors.email,
    },
    {
        id: "password",
        name: "password",
        type: "password",
        label: "Password",
        required: true,
        value: data.password,
        error: errors.password,
    },
];

export const contactFormInputs = (data) => [
    {
        name: "Email",
        value: data.email,
        placeholder: "Имейл"
    },
    {
        name: "Phone Number",
        value: data.phone,
        placeholder: "Телефонен номер"
    },
    {
        name: "Message",
        value: data.additional_info,
        placeholder: "Опишете вашите фитнес цели, опит и очаквания, за да ви помогна по най-добрия начин."
    },
];

export const inputsContainer = (data) => [
    {
        name: 'Name',
        value: data.name
    },
    {
        name: 'URL',
        value: data.url
    },
    {
        name: 'Description',
        value: data.description
    },
]