import { useState } from "react";
import { Link } from "@inertiajs/react";
``;
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { checkIfRoleIsAdmin } from "@/Libs/utils";
import { navbarLinks } from "@/Constants/StaticData";
import { AlignJustify, LogOut } from "lucide-react";
import { ToastContainer } from "react-toastify";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    let adminRole = checkIfRoleIsAdmin(auth.roles);

    return (
        <div className="min-h-screen">
            <ToastContainer />
            <nav className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <img
                                        src="/assets/logo.png"
                                        alt="logo"
                                        className="h-auto w-[150px]"
                                    />
                                </Link>
                            </div>

                            <ul className="flex-3">
                                {navbarLinks.map((link, index) => (
                                    <li key={index} className="hidden lg:flex">
                                        <a
                                            className={`${
                                                window.location.pathname ===
                                                link.path
                                                    ? "text-white"
                                                    : ""
                                            } hover:text-white transition-all cursor-pointer`}
                                            href={link.path}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                {adminRole && (
                                    <li className="hidden lg:flex">
                                        <a
                                            className="hover:text-white transition-all cursor-pointer"
                                            href="/admin"
                                        >
                                            Admin
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-[var(--mainDarkLightColor)] text-white focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth?.user?.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out"
                            >
                                <AlignJustify className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    {/* <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink> */}
                    {navbarLinks.map((link, index) => (
                        <ResponsiveNavLink key={index} href={link.path}>
                            <span
                                className={`${
                                    window.location.pathname === link.path
                                        ? "text-white"
                                        : ""
                                } hover:text-white transition-all cursor-pointer`}
                            >
                                {link.name}
                            </span>
                        </ResponsiveNavLink>
                    ))}
                    {adminRole && (
                        <ResponsiveNavLink href={route("admin")}>
                            <span className="hover:text-white transition-all cursor-pointer">
                                Admin
                            </span>
                        </ResponsiveNavLink>
                    )}

                    <ResponsiveNavLink href={route("profile.edit")}>
                        Profile
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        method="post"
                        className="text-white flex-2 mb-2"
                        href={route("logout")}
                        as="button"
                    >
                        <LogOut className="text-white" size={20} /> Log Out
                    </ResponsiveNavLink>
                </div>
            </nav>

            {header && (
                <header className="bg-[var(--mainDarkLightColor)] shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1>{header}</h1>
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
