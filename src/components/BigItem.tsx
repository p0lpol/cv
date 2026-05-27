import Link from "next/link";
import {ReactNode} from "react";
import Image from "next/image";

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
    fullSize?: boolean;
    size?: number;
    bg?: boolean;
    imgSize?: number;
}

export default function BigItem({name, image, description, link, fullSize=false, size, bg, imgSize=2}: BigItemsProps) {
    const heightClass = size ? sizeMap[size] || "h-60" : "h-60";

    return(
        <Link className={`flex items-center max-h-fit justify-between py-2 pl-4 rounded-xl bg-sky-900
        hover:bg-cyan-950 transition-all duration-200 hover:scale-110 ${heightClass} shadow-cyan-950 shadow-lg overflow-hidden min-h-fit`}
              href={link}>
            <div className="flex flex-col h-full">
                <h1 className="relative top-0 left-0 text-3xl font-bold uppercase">{name}</h1>
                <div className="flex flex-col justify-evenly h-9/10">
                    {description}
                </div>
            </div>
            <Image
                src={image}
                alt={name}
                width={imgSize * 100}
                height={200}
                className={`${fullSize ? "w-auto h-96" : `w-[${100 * imgSize}] h-auto rounded-2xl m-4 max-h-fit`} overflow-hidden ${bg ? 'bg-white' : ""} `}
            />
        </Link>
    )
}