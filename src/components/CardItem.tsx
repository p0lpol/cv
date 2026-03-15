'use client'

import { useState, MouseEvent, useCallback } from "react";
import { throttle } from "./ProfileCard";

export interface FlipCardProps {
    name: string;
    image: string;
}

export default function FlipCard({ name, image }: FlipCardProps) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            if (isFlipped) return;
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            setRotate({ x: rotateX, y: rotateY });
        }, 30),
        [isFlipped]
    );

    return (
        <div
            className="group perspective-1000 w-full aspect-square max-w-50 h-full max-h-50 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setRotate({ x: 0, y: 0 });
            }}
        >
            <div
                className="relative w-full h-full preserve-3d"
                style={{
                    transform: `
                        perspective(1000px) 
                        rotateX(${rotate.x}deg) 
                        rotateY(${rotate.y + (isFlipped ? 180 : 0)}deg)
                    `,
                    transition: isHovering && !isFlipped
                        ? "transform 300ms ease-out"
                        : "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                {/* --- FRONT SIDE --- */}
                <div
                    className={`absolute inset-0 w-full h-full flex items-center justify-center p-8 transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'translateZ(1px)'
                    }}
                >
                    {/* Bloom (Neon Effect) */}
                    <img
                        src={image}
                        alt="bloom"
                        className={`absolute w-4/5 h-4/5 object-contain transition-all duration-300 pointer-events-none ${
                            isHovering ? 'opacity-100 blur-lg scale-110' : 'opacity-0 blur-xl'
                        }`}
                        aria-hidden="true"
                    />

                    {/* Main Logo */}
                    <img
                        src={image}
                        alt={name}
                        className="relative z-10 w-full h-full object-contain drop-shadow-lg drop-shadow-black"
                    />
                </div>

                {/* --- BACK SIDE --- */}
                <div
                    className={`absolute inset-0 w-full h-full rounded-3xl border-2 border-white/10 bg-slate-950/90 backdrop-blur-md p-8 flex flex-col items-center justify-center shadow-2xl transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(1px)' // Ensures it's correctly oriented and stacked
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