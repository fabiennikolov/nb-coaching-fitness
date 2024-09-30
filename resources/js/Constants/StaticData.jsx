import {
    Book,
    Drumstick,
    Dumbbell,
    Instagram,
    Mail,
    MessageCircle,
    Monitor,
    Phone,
    PhoneCall,
    Pin,
    Send,
    SquareChartGantt,
    Twitter,
} from "lucide-react";

export const navbarLinks = [
    {
        name: "Начало",
        path: "/",
    },
    {
        name: "Контакт",
        path: "/contact",
    },
    {
        name: "NBCoaching",
        path: "/nb-coaching",
    },
];

export const headerDataText = {
    title: "Добре дошли в NBscoaching",
    subtitle: "NBCoaching Fitness",
    description:
        "Тази платформа е тук, за да Ви предостави необходимите ресурси и насоки за постигане на Вашите фитнес цели. С акцент на практичността и ефективността, услугата предлага разнообразие от стратегии, които ще Ви помогнат да постигнете желаните резултати. Тук ще намерите полезна информация и подкрепа, за да реализирате пълния си потенциал.",
};

export const footerLinks = [
    {
        name: "Navigation",
        links: [
            {
                name: "Company",
                path: "/",
            },
            {
                name: "Pricing",
                path: "/",
            },
            {
                name: "Docs",
                path: "/",
            },
            {
                name: "Careers",
                path: "/",
            },
        ],
    },
    {
        name: "Documentation",
        links: [
            {
                name: "Introduction",
                path: "/",
            },
            {
                name: "Quickstart",
                path: "/",
            },
            {
                name: "Why evals",
                path: "/",
            },
            {
                name: "Use Cases",
                path: "/",
            },
            {
                name: "Metrics",
                path: "/",
            },
        ],
    },
    {
        name: "Legal",
        links: [
            {
                name: "Privacy Policy",
                path: "/",
            },
            {
                name: "Terms of Service",
                path: "/",
            },
        ],
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

export const aboutCards = [
    {
        heading: "Наръчник за хранене",
        p: "Информативен ресурс, който Ви помага да се справите с хранителния план и да направите правилния избор на храни.",
        icon: <Drumstick className="text-red-600" size={200} />,
    },
    {
        heading: "Наръчник за суплементация",
        p: "Информация за хранителни добавки и как да ги използвате ефективно.",
        icon: <Book className="text-blue-600" size={200} />,
    },
    {
        heading: "Хранителен план",
        p: "Индивидуално съставен план, който отговаря на Вашите цели и предпочитания.",
        icon: <SquareChartGantt className="text-yellow-600" size={200} />,
    },
    {
        heading: "Тренировъчен план",
        p: "Персонализирана програма, адаптирана към Вашето ниво и желания.",
        icon: <Dumbbell size={200} />,
    },
    {
        heading: "Мониторинг",
        p: "Проследяване на напредъка Ви и корекции на плановете.",
        icon: <Monitor className="text-red-600" size={200} />,
    },
    {
        heading: "Постоянна връзка с мен",
        p: "Непрекъсната подкрепа и отговори на Вашите въпроси по всяко време.",
        icon: <Phone size={200} />,
    },
];

export const contactFormInputs = (data) => [
    {
        name: "Email",
        value: data.email,
        placeholder: "Email"
    },
    {
        name: "Phone Number",
        value: data.phone,
        placeholder: "Phone Number"
    },
    {
        name: "Message",
        value: data.additional_info,
        placeholder: "Опишете вашите фитнес цели, опит и очаквания, за да ви помогна по най-добрия начин."
    },
];

export const contactFormGridThree = [
    {
        heading: "",
        p: "",
        add: [
            {
                icon: <Mail />,
                text: "nbcoachingfitness@gmail.com",
            },
            {
                icon: <Instagram />,
                text: "Message us on Instagram",
            },
            {
                icon: <MessageCircle />,
                text: "Message us on WhatsApp",
            },
        ],
    },
    {
        heading: "Call Us",
        add: [
            {
                icon: <PhoneCall />,
                text: "+359 878920042",
            },
        ],
    },
];

export const brochures  = [
    {
        path: '/assets/brochureOne/',
        link: `/nb-coaching/brochure/1`,
        img: "/assets/brochureOne/dobavki-1.png",
    },
    {
        path: '/assets/brochureTwo/',
        link: `/nb-coaching/brochure/2`,
        img: "/assets/brochureTwo/naruchnik-1.png",
    }
    
]

export const customStyles = {
    rows: {
        style: {
            backgroundColor: "#202020",
            color: "#a8a29e",
            borderTop: "1px solid #3f3f3f",
        },
    },
    headCells: {
        style: {
            backgroundColor: "#202020",
            color: "#a8a29e",
            border: "none",
        },
    },
    cells: {
        style: {
            backgroundColor: "#202020",
            color: "#a8a29e",
        },
    },
    pagination: {
        style: {
            backgroundColor: "#202020", // Pagination background color
            color: "#a8a29e", // Text color for pagination
            borderTop: "1px solid #3f3f3f", // Optional border top for separation
            padding: "8px 16px", // Padding around pagination controls
        },
        pageButtonsStyle: {
            color: "#a8a29e", // Button text color
            borderRadius: "5px", // Button border radius
            padding: "5px 10px", // Padding inside buttons
            margin: "0 4px", // Space between buttons
            cursor: "pointer",
            transition: "0.3s", // Smooth hover transition

            "&:disabled": {
                cursor: "not-allowed",
            },
            "&.active": {
                fontWeight: "bold", // Make active button text bold
            },
        },
    },
};



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
