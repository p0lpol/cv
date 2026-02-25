import ImageLink from "@/src/components/ImageLink";

export default function ProjectLinks({links}: {links: string[][]}) {
    return(
        <div id="links" className="scroll-section flex flex-col gap-4 bg-slate-900 p-4 rounded-xl shadow-slate-800 shadow-xl">
            <h1>Liens vers le projet</h1>
            <div>
                {links.map((link, index) => (
                    <ImageLink key={index} link={link[0]} image={link[1]}/>
                ))}
            </div>
        </div>
    )

}