import Image from "next/image";
import {ReactNode} from "react";

interface BigItemProps {
    name: string;
    image: string;
    description: ReactNode;
    fullSize?: boolean;
    size?: number;
    imgSize?: number;
    bg?: boolean;
}

export default function BigItem({
                                    name,
                                    image,
                                    description,
                                    fullSize = false,
                                    size = 96,
                                    imgSize = 1,
                                    bg = false
                                }: BigItemProps) {

    const calculatedHeight = `${size * 4}px`;

    return (
        <div
            className="flex items-center justify-between rounded-xl gap-8 bg-sky-900 shadow-cyan-950 shadow-lg overflow-hidden min-h-fit max-h-fit transition-all duration-200 hover:bg-cyan-950 hover:scale-[1.02]"
            style={{ height: calculatedHeight }}
        >
            <div className="flex flex-col h-full w-full py-2 pl-4">
                <h1 className="relative top-0 left-0 text-3xl font-bold uppercase mb-2">
                    {name}
                </h1>
                <div className="flex flex-col justify-evenly text-justify h-full w-full">
                    {description}
                </div>
            </div>

            {image && (
                <Image
                    src={image}
                    alt={name}
                    width={imgSize * 400}
                    height={size * 16}
                    style={{
                        width: fullSize ? "auto" : `${400 * imgSize}px`,
                        height: fullSize ? "100%" : "auto"
                    }}
                    className={`
                        ${fullSize ? "" : "rounded-2xl m-4 max-h-fit"} 
                        object-contain overflow-hidden shrink-0 
                        ${bg ? 'bg-white' : ""}
                    `}
                />
            )}
        </div>
    );
}