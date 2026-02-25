import FormattedScreenshot from "@/src/components/FormattedScreenshot";

export default function ProjectScreenshots({screenshots}: {screenshots: string[]}) {
    return (
        <div>
            <h1>Captures d'écran du projet</h1>
            {screenshots.map((screenshot, index) => (
                <FormattedScreenshot src={screenshot} key={index}/>
            ))}
        </div>
    )
}