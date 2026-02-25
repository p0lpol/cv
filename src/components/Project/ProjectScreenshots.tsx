import FormattedScreenshot from "@/src/components/FormattedScreenshot";

export default function ProjectScreenshots({screenshots}: {screenshots: string[][]}) {
    return (
        <div id="screenshots" className="scroll-section flex flex-col gap-4 bg-slate-900 p-4 rounded-xl shadow-slate-800 shadow-xl">
            <h1>Captures d'écran du projet</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {screenshots.map((screenshot, index) => (
                    <FormattedScreenshot src={screenshot[0]} alt={screenshot[1]} id={screenshot[2]} key={index}/>
                ))}
            </div>
        </div>
    )
}