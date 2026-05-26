'use client'

import {useState} from "react";
import ThreeDImage from "./ThreeDImage"; // Ajuste le chemin si nécessaire

export interface FlipCardProps {
    name: string;
    image: string;
}

export default function FlipCard({ name, image }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group perspective-1000 w-full aspect-square max-w-50 h-full max-h-50 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className="relative w-full h-full preserve-3d"
                style={{
                    transform: `perspective(1000px) rotateY(${isFlipped ? 180 : 0}deg)`,
                    transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <div
                    className={`absolute inset-0 w-full h-full flex items-center justify-center p-8 transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                >
                    <ThreeDImage
                        src={image}
                        alt={name}
                        sensitivity={10}
                    />
                </div>

                <div
                    className={`absolute inset-0 w-full h-full rounded-3xl border-2 border-white/10 bg-slate-950/90 backdrop-blur-md p-8 flex flex-col items-center justify-center shadow-2xl transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(1px)'
                    }}
                >
                    <h2 className="text-2xl font-bold text-white text-center">
                        {name}
                    </h2>
                </div>
            </div>
        </div>
    );
}