export default function ImageLink({link, image}: {link: string, image: string}) {
    return (
        <a href={link}>
            <img src={image} alt="screenshot"/>
        </a>
    )
}