export interface IllustratedItemProps {
    title: string;
    content: string;
    image: string;
    alt: string;
}

export default function IllustratedItem({title, content, image, alt}: IllustratedItemProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <img src={image} alt={alt}/>
        </div>
    )
}