import {useEffect, useState} from "react";

export function useScrollSpy(sectionIds: string[]) {
    const [activeId, setActiveId] = useState<string>(sectionIds[0] || "");

    useEffect(() => {
        const handleScroll = () => {
            let currentActiveId = sectionIds[0];

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    if (element.getBoundingClientRect().top < 150) {
                        currentActiveId = id;
                    }
                }
            }

            const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50;
            if (isAtBottom) {
                currentActiveId = sectionIds[sectionIds.length - 1];
            }

            setActiveId(currentActiveId);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds.join(",")]);

    return activeId;
}