import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? "border-[var(--mainDarkLightColor)]  bg-[var(--mainDarkLightColor)] "
                    : "border-transparent text-mainDarkLightTextColor hover:bg-[var(--mainDarkLightColor)] "
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
