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
    SquareChartGantt,
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
        name: "NBcoaching",
        path: "/nb-coaching",
    },
];

export const headerDataText = {
    title: "Добре дошли в NBscoaching",
    subtitle: "NBcoaching Fitness",
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

export const brochures = [
    {
        path: "/assets/brochureTwo/",
        link: `/nb-coaching/brochure/2`,
        img: "/assets/brochureTwo/naruchnik-1.png",
    },
    {
        path: "/assets/brochureOne/",
        link: `/nb-coaching/brochure/1`,
        img: "/assets/brochureOne/dobavki-1.png",
    },
];

export const userRoles = [
    {
        name: "Admin",
        role: "Admin",
        id: "",
    },
    {
        name: "Super-Admin",
        role: "Super-Admin",
        id: "",
    },
    {
        name: "Registered",
        role: "Registered",
        id: "",
    },
    {
        name: "Blocked",
        role: "Blocked",
        id: "",
    },
];
export const programInputs = [
    { name: "Name", value: "name" },
    { name: "URL", value: "url" },
    { name: "Description", value: "description" },
];

export const toastContainerStyle = {
    backgroundColor: "#202020", // Custom background color
    color: "#fff", // Text color
    padding: "16px", // Custom padding
    borderRadius: "8px", // Rounded corners
};

// ------------------------------------data table styles ---------------------------------------------//
export const customStyles = {
    tableWrapper: {
        style: {
            backgroundColor: "#202020", // Background color for the entire table
            borderTopLeftRadius: "12px", // Rounded border for the top-left corner
            borderTopRightRadius: "12px", // Rounded border for the top-right corner
            borderBottom: "none", // No border on the bottom to keep it flat
            overflow: "hidden", // Ensure content inside respects the border radius
        },
    },
    rows: {
        style: {
            backgroundColor: "#202020", // Background color for rows
            color: "#a8a29e", // Text color for rows
            borderTop: "1px solid #3f3f3f", // Border between rows
            padding: "8px", // Padding for rows
        },
    },
    headCells: {
        style: {
            backgroundColor: "#202020", // Background color for head cells
            color: "#a8a29e", // Text color for head cells
            border: "none", // No border for head cells
            padding: "12px", // Padding for head cells
        },
    },
    cells: {
        style: {
            backgroundColor: "#202020", // Background color for cells
            color: "#a8a29e", // Text color for cells
            padding: "12px", // Padding for cells
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
            color: "#ffffff", // Change page button icons/text to white
            borderRadius: "5px", // Button border radius
            padding: "5px 10px", // Padding inside buttons
            margin: "0 4px", // Space between buttons
            cursor: "pointer",
            transition: "0.3s", // Smooth hover transition

            "&:disabled": {
                cursor: "not-allowed", // Cursor style for disabled buttons
                display: "none",
            },
            "&.active": {
                fontWeight: "bold", // Make active button text bold
                color: "#ffffff", // Ensure active button is also white
            },
        },
    },
};
