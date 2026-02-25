import Link from "next/link";
import {ReactNode} from "react";

const sizeMap: Record<number, string> = {
    60: "h-60",
    72: "h-72",
    80: "h-80",
    96: "h-96",
};

export interface BigItemsProps {
    name: string;
    image: string;
    description: string | ReactNode;
    link: string;
    rounded?: boolean;
    size?: number;
}

export default function BigItem({name, image, description, link, rounded=true, size}: BigItemsProps) {
    const heightClass = size ? sizeMap[size] || "h-60" : "h-60";

    return(
        <Link className={`flex items-center justify-between gap-4 border-4 border-white p-2 px-4 rounded-xl
        hover:bg-slate-800 hover:border-emerald-500 transition-all duration-200 hover:scale-110 ${heightClass}`}
              href={link}>
            <div className="flex flex-col h-full">
                <h1 className="relative top-0 left-0 text-3xl font-bold uppercase">{name}</h1>
                <div className="flex flex-col justify-evenly h-full">
                    {description}
                </div>
            </div>
            <img src={image} alt={name} width={200} height={200} className={rounded ? 'rounded-full' : 'rounded-xl'}/>
        </Link>
    )
}