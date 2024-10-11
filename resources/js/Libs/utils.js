import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export const checkIfRoleIsAdmin = (roles) => {
    if(!Array.isArray(roles)) {
        return false;
    }
     return roles.includes('admin') || roles.includes('superadmin')
};