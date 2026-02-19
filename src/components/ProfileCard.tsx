
interface ProfileCardProps {
    name: string,
    image: string,
}

export default function ProfileCard({ name, image} : ProfileCardProps){
    return (
        <div className="flex flex-col items-center justify-evenly w-[50vw] h-[60vh] rounded-3xl border-2
        border-gray-900 px-8 shadow-[8px_8px_6px_0px_rgba(0,_0,_0,_0.1)] bg-slate-900 text-white shadow-slate-800 @container">
            <img src={image} alt={name} className="rounded-full w-64"/>
            <h1 className="text-5xl text-center wrap-break-word">{name}</h1>
            <p className="text-sm text-justify">
                Je suis étudiant en 2eme année de BUT informatique, en parcours réalisation d'applications.
                Je recherche actuellement un <strong>stage de dix semaines</strong> à partir du <strong>6 avril</strong> ainsi qu'une <strong>alternance d'un an</strong> pour <strong>septembre</strong> de l'année prochaine.
                N'hésitez pas à me contacter pour toute information complémentaire !
            </p>
        </div>
    )
}