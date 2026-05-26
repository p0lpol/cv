"use client"
import {useState} from "react";
import ThreeDImage from "./ThreeDImage"; // Ajuste le chemin si nécessaire

export default function ImageLink({ link, image }: { link: string, image: string }) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-64 h-64 items-center justify-center transition-transform active:scale-95 ${
                isPressed ? 'animate-shake' : ''
            }`}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
        >
            <ThreeDImage
                src={image}
                alt="screenshot du projet"
                sensitivity={4}
                className="w-full h-full"
            />
        </a>
    );
}