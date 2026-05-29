'use client'

import {MouseEvent, useCallback, useState} from "react";
import Image, {StaticImageData} from "next/image";

interface ProfileCardProps {
    name: string;
    image: StaticImageData;
}

export function throttle<T extends (...args: any[]) => any>(
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

export default function ProfileCard({ name, image }: ProfileCardProps) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isFlipped, setIsFlipped] = useState(false);

    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            setRotate({ x: rotateX, y: rotateY });
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
    <div
        className="w-[90vw] max-w-125 cursor-pointer"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1000px" }}
    >
        <div
            style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 400ms cubic-bezier(0.1, 0.95, 0.5, 0.9) 0s",
            }}
        >
            <div
                className="grid w-full h-full"
                style={{
                    transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
                    transformStyle: "preserve-3d",
                    transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <div
                    className="col-start-1 row-start-1 flex flex-col items-center justify-evenly w-full h-full min-h-150 py-8 rounded-4xl border-2 border-sky-900 px-8 shadow-[8px_8px_6px_0px_rgba(0,0,0,0.1)] bg-sky-900 text-white shadow-cyan-950"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                >
                    <Image
                        src={image}
                        alt={name}
                        className="rounded-full w-64 h-64 object-cover border-4 border-emerald-200/20"
                        width={200}
                        height={200}
                    />

                    <h1 className="text-5xl text-center wrap-break-word font-bold">{name}</h1>

                    <h2 className="text-2xl text-justify text-green-400">Cliquez sur moi pour en savoir plus ! </h2>
                </div>

                {/* --- FACE ARRIÈRE --- */}
                <div
                    className="col-start-1 row-start-1 flex flex-col items-center justify-center w-full h-full min-h-150 py-8 rounded-4xl border-2 border-sky-900 px-8 shadow-[8px_8px_6px_0px_rgba(0,0,0,0.1)] bg-sky-900 text-white shadow-cyan-950"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    <div className=" self-center text-lg text-justify flex flex-col gap-4">
                        <p>Je suis actuellement étudiant en deuxième année de
                        <strong><a href="#"> BUT informatique à l'IUT de Lille</a></strong>,
                        en parcours
                        <strong><a href="#"> Développement et Réalisation d'application</a></strong>.</p>
                        <p>Aspirant développeur full-stack, je souhaite découvrir toutes les facettes du développement d'application, de la conception jusqu'au déploiement.
                        J'ai déjà eu l'occasion de développer des applications full-stack, seul ou en équipe, lors de mes différents
                        <strong><a href="#"> projets académiques, personnels ou lors de mon stage </a></strong>
                        en fin de deuxième année.</p>
                        <p>J'apprécie la diversité des compétences à développer, et réaliser un produit final
                        <strong><a href="#"> concret, complet et cohérent</a></strong>.
                        Je souhaite trouver prochainement un
                        <strong><a href="#"> stage de 4 mois à la fin de ma troisième année</a></strong>,
                            dans le développement de logiciel, sur la région Lilloise.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}