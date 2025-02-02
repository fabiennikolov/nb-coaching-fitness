import "swiper/css";
import "../css/app.css";
import "swiper/css/navigation";
import "react-medium-image-zoom/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React from "react";
import { ToastContainer } from "react-toastify";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx"),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <React.Fragment>
                    <App {...props} />
            </React.Fragment>,
        );
    },
    progress: {
        color: "#4B5563",
    },
});
