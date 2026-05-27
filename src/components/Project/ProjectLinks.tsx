import ImageLink from "@/src/components/ImageLink";

export default function ProjectLinks({links}: {links: string[][]}) {
    return(
        <div id="links" className="section">
            <h1 className="section-title">Liens vers le projet</h1>
            <div>
                {links.map((link, index) => (
                    <ImageLink key={index} link={link[0]} image={link[1]}/>
                ))}
            </div>
        </div>
    )

}