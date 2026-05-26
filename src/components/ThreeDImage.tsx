'use client'

import {MouseEvent, useCallback, useState} from "react";
import {throttle} from "./ProfileCard";
import Image from "next/image";

interface ThreeDImageProps {
    src: string;
    alt: string;
    className?: string;
    glowIntensity?: string;
    sensitivity?: number;
}

export default function ThreeDImage({
                                        src,
                                        alt,
                                        className = "w-full h-full",
                                        glowIntensity = "blur-lg scale-110 opacity-100",
                                        sensitivity = 10
                                    }: ThreeDImageProps) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const container = e.currentTarget;
            const box = container.getBoundingClientRect();

            const x = e.clientX - box.left;
            const y = e.clientY - box.top;

            const centerX = box.width / 2;
            const centerY = box.height / 2;

            const rotateX = (y - centerY) / sensitivity;
            const rotateY = (centerX - x) / sensitivity;

            setRotate({ x: rotateX, y: rotateY });
        }, 30),
        [sensitivity]
    );

    const onMouseLeave = () => {
        setIsHovering(false);
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            className={`relative perspective-1000 preserve-3d cursor-pointer ${className}`}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={onMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: isHovering
                    ? "transform 100ms ease-out"
                    : "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            <Image
                src={src}
                alt={`${alt} glow`}
                width={64}
                height={64}
                className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-all duration-300 mix-blend-screen ${
                    isHovering ? glowIntensity : 'opacity-0 blur-xl'
                }`}
                aria-hidden="true"
            />

            <Image
                src={src}
                alt={alt}
                width={64}
                height={64}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                style={{
                    transform: "translateZ(20px)", // Accentue l'effet de profondeur 3D
                    transition: "transform 300ms ease-out"
                }}
            />
        </div>
    );
}