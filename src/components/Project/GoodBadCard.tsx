import {ChevronDown} from "lucide-react";
import React from "react";

interface GoodBadCardProps {
    title: string
    description: string
    isPositive: boolean
}

export default function GoodBadCard ({title, description, isPositive}: GoodBadCardProps) {

    const bgTitle = isPositive ? "bg-green-600" : "bg-red-600"
    const bgColor = isPositive ? "bg-green-800" : "bg-red-800"
    const [isOpen, setOpen] = React.useState(false);

    return (
        <div className={`flex flex-col items-center w-screen p-8 rounded-2xl overflow-hidden`}>
            <div className={`flex items-center justify-between ${bgTitle}`}>
                <h2>{title}</h2>
                <ChevronDown
                    size={16}
                    onClick={() => {setOpen(!isOpen)}}
                />
            </div>
            {isOpen && (
                <div className={`${bgColor} text-justify`}>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}