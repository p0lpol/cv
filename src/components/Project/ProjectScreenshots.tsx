import FormattedScreenshot from "@/src/components/FormattedScreenshot";

export default function ProjectScreenshots({screenshots}: {screenshots: string[][]}) {
    return (
        <div id="screenshots" className="section">
            <h1 className="section-title">Captures d'écran du projet</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {screenshots.map((screenshot, index) => (
                    <FormattedScreenshot src={screenshot[0]} alt={screenshot[1]} id={screenshot[2]} key={index}/>
                ))}
            </div>
        </div>
    )
}