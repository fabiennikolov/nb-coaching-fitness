import { Book, Drumstick, Dumbbell, Monitor, Phone, SquareChartGantt } from "lucide-react"

export const navbarLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'За нас',
        path: '/'
    },
    {
        name: 'Лични тренировки',
        path: '/'
    },
    {
        name: 'Конктакт',
        path: '/'
    },
    {
        name: 'NB Coaching',
        path: '/'
    }
]

export const headerDataText = {
    title: 'Unleash the power of',
    subtitle: 'NB Coaching Fitness',
    description: 'Добре дошли в NBcoaching. Тази платформа е тук, за да Ви предостави необходимите ресурси и насоки за постигане на Вашите фитнес цели. С акцент на практичността и ефективността, услугата предлага разнообразие от стратегии, които ще Ви помогнат да постигнете желаните резултати. Тук ще намерите полезна информация и подкрепа, за да реализирате пълния си потенциал.'
}

export const footerLinks = [
    {
        name: 'Navigation',
        links: [
            {
                name: 'Company',
                path: '/'
            },
            {
                name: 'Pricing',
                path: '/'
            },
            {
                name: 'Docs',
                path: '/'
            },
            {
                name: 'Careers',
                path: '/'
            }
        ]
    },
    {
        name: 'Documentation',
        links: [
            {
                name: 'Introduction',
                path: '/'
            },
            {
                name: 'Quickstart',
                path: '/'
            },
            {
                name: 'Why evals',
                path: '/'
            },
            {
                name: 'Use Cases',
                path: '/'
            },
            {
                name: 'Metrics',
                path: '/'
            }
        ]
    },
    {
        name: 'Legal',
        links: [
            {
                name: 'Privacy Policy',
                path: '/'
            },
            {
                name: 'Terms of Service',
                path: '/'
            },
        ]
    },
]

export const aboutCards = [
    {
        heading: "Наръчник за хранене",
        p: 'Информативен ресурс, който Ви помага да се справите с хранителния план и да направите правилния избор на храни.',
        icon: <Drumstick className="text-red-600" size={200}/>
    },
    {
        heading: "Наръчник за суплементация",
        p: 'Информация за хранителни добавки и как да ги използвате ефективно.',
        icon: <Book className="text-blue-600" size={200}/>
    },
    {
        heading: "Хранителен план",
        p: 'Индивидуално съставен план, който отговаря на Вашите цели и предпочитания.',
        icon: <SquareChartGantt className="text-yellow-600" size={200}/>
    },
    {
        heading: "Тренировъчен план",
        p: 'Персонализирана програма, адаптирана към Вашето ниво и желания.',
        icon: <Dumbbell size={200}/>
    },
    {
        heading: "Мониторинг",
        p: ': Проследяване на напредъка Ви и корекции на плановете.',
        icon: <Monitor className="text-red-600" size={200}/>
    },
    {
        heading: "Постоянна връзка с мен",
        p: 'Непрекъсната подкрепа и отговори на Вашите въпроси по всяко време.',
        icon: <Phone size={200}/>
    }
]