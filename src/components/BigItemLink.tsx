import Link from "next/link";
import {ReactNode} from "react";
import Image, {StaticImageData} from "next/image";

export interface BigItemsProps {
    name: string;
    image?: StaticImageData;
    description: string | ReactNode;
    link: string;
    fullSize?: boolean;
    size?: number;
    bg?: boolean;
    imgSize?: number;
}

export default function BigItemLink({
                                        name,
                                        image,
                                        description,
                                        link,
                                        fullSize = false,
                                        size,
                                        bg,
                                        imgSize = 2
                                    }: BigItemsProps) {

    const calculatedHeight = size ? `${size * 4}px` : "240px";

    return(
        <Link
            href={link}
            className="flex items-center max-h-fit justify-between rounded-xl bg-sky-900 hover:bg-cyan-950 transition-all duration-200 hover:scale-[1.02] shadow-cyan-950 shadow-lg overflow-hidden min-h-fit"
            style={{ height: calculatedHeight }}
        >
            <div className="flex flex-col h-full py-2 pl-4">
                <h1 className="relative top-0 left-0 text-3xl font-bold uppercase">{name}</h1>
                <div className="flex flex-col justify-evenly h-9/10 w-auto">
                    {description}
                </div>
            </div>

            {image &&
            <Image
                src={image}
                alt={name}
                width={imgSize * 200}
                height={size ? size * 4 : 240}
                loading="eager"
                style={{
                    width: fullSize ? "auto" : `${150 * imgSize}px`,
                    height: fullSize ? "100%" : "auto"
                }}
                className={`
                    ${fullSize ? "min-w-fit h-full" : "h-auto rounded-2xl m-4 max-h-fit"} 
                    object-contain overflow-hidden
                    ${bg ? 'bg-white' : ""}
                    hidden 2xl:block
                `}
            />
            }
        </Link>
    )
}