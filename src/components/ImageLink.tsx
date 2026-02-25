"use client"
import {MouseEvent, useCallback, useState} from "react";
import {throttle} from "@/src/components/ProfileCard";

export default function ImageLink({link, image}: {link: string, image: string}) {

    const [rotate, setRotate] = useState({x: 0, y: 0});
    const [isPressed, setIsPressed] = useState(false);

    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 4;
            const rotateY = (centerX - x) / 4;

            setRotate({x: rotateX, y: rotateY});
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({x: 0, y: 0});
    };


    return (
        <a
            href={link}
            className={`flex w-fit h-fit ${isPressed ? 'animate-shake' : ''}`}
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                onMouseLeave();
                setIsPressed(false);
            }}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}

            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isPressed ? 0.95 : 1}, ${isPressed ? 0.95 : 1}, 1)`,
                // DISABLE transition when isPressed is true
                transition: isPressed ? "none" : "all 400ms cubic-bezier(.36,.07,.19,.97) 0s",
                filter: `drop-shadow(${rotate.y * -0.5}px ${rotate.x * 0.5}px 10px rgba(252, 109, 38, 0.5))`
            }}
        >
            <img
                src={image}
                alt="screenshot"
                className="block w-full h-auto pointer-events-none"
            />
        </a>
    )
}