"use client";

import Link from "next/link";
import {motion} from "framer-motion";

interface TopBarItemProps {
    title: string;
    link: string;
    active: boolean;
}

export default function TopBarItem({ title, link = "/", active }: TopBarItemProps) {
    return (
        <Link className="relative flex justify-center pb-4" href={link}>
            <span className={`relative z-10 transition-colors duration-300 ${active ? "text-green-500 font-bold" : ""}`}>
                {title}
            </span>

            {active && (
                <motion.div
                    layoutId="active-top-bar"
                    className="absolute bottom-0 left-0 right-0 h-[0.2rem] bg-[#16a34a] rounded-full shadow-[0_0_30px_15px_rgba(22,163,74,0.8)]"
                    initial={false}
                    transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                    }}
                />
            )}
        </Link>
    );
}