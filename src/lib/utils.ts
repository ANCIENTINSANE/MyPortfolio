import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { gsap } from "gsap";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const scrollToSection = (e: MouseEvent, id: string) => {
    if (id.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: { y: element, autoKill: true, offsetY: 80 },
                ease: "power4.out",
            });
        }
    }
};
