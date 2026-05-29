import GrowableImage from "@/src/components/GrowableImage";
import {StaticImageData} from "next/image";

export default function FormattedScreenshot({src, alt, id}: {src: StaticImageData, alt: string, id: string}) {
    return (
        <GrowableImage src={src} layoutId={id} alt={alt}/>
    )
}