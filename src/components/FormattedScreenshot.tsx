export default function FormattedScreenshot({src, alt}: {src: string, alt: string}) {
    return (
        <img src={src} alt={alt} className="w-full h-full"/>
    )
}