'use client'

import { useState, MouseEvent, useCallback } from "react";

interface ProfileCardProps {
    name: string;
    image: string;
}

function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

export default function ProfileCard ({ name, image }: ProfileCardProps){
    const [rotate, setRotate] = useState({x: 0, y: 0});

    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 7;
            const rotateY = (centerX - x) / 7;

            setRotate({x: rotateX, y: rotateY});
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({x: 0, y: 0});
    };

    return (
        <div className="
        flex flex-col items-center justify-evenly w-[90vw] max-w-125 min-h-[60vh] rounded-3xl border-2
        border-gray-900 px-8 shadow-[8px_8px_6px_0px_rgba(0,0,0,0.1)] bg-slate-900 text-white shadow-slate-800"
             onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
             style={{
                 transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                 transition: "all 400ms cubic-bezier(0.2, 0.9, 0.5, 0.90) 0s",
             }}
        >

            <img src={image} alt={name} className="rounded-full w-64 h-64 object-cover border-4 border-emerald-500/20" />

            <h1 className="text-5xl text-center wrap-break-word font-bold">{name}</h1>

            <p className="text-sm text-justify lg:text-base 2xl:text-lg">
                Je suis étudiant en 2eme année de BUT informatique, en parcours réalisation d'applications.
                Je recherche actuellement un
                <strong className="text-emerald-500 hover:text-emerald-600 transition-colors"> <a href="#"> stage de dix semaines </a> </strong>
                à partir du
                <strong className="text-emerald-500 hover:text-emerald-600 transition-colors"> <a href="#"> 6 avril </a> </strong>
                ainsi qu'une
                <strong className="text-emerald-500 hover:text-emerald-600 transition-colors"> <a href="#"> alternance d'un an </a> </strong>
                pour
                <strong className="text-emerald-500 hover:text-emerald-600 transition-colors"> <a href="#"> septembre </a> </strong>
                de l'année prochaine.
                N'hésitez pas à me contacter pour toute information complémentaire !
            </p>
        </div>
    );
}