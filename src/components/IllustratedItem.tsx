import GrowableImage from "@/src/components/GrowableImage";

export interface IllustratedItemProps {
    title: string;
    content: string;
    image: string;
    alt: string;
    id: string;
}

export default function IllustratedItem({title, content, image, alt, id}: IllustratedItemProps) {
    return (
        <div className="flex gap-4 items-center justify-between pb-4">
            <div className="flex flex-col gap-4">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <GrowableImage src={image} alt={alt} layoutId={id}/>
        </div>
    )
}