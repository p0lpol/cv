export default function FormattedScreenshot({src: string}: {src: string}) {
    return (
        <img src={string} alt="screenshot" className="w-full h-full"/>
    )
}