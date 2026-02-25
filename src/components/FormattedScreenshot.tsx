import GrowableImage from "@/src/components/GrowableImage";

export default function FormattedScreenshot({src, alt, id}: {src: string, alt: string, id: string}) {
    return (
        <GrowableImage src={src} layoutId={id} alt={alt}/>
    )
}