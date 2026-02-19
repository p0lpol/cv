
interface ProfileCardProps {
    name: string,
    image: string,
}

export default function ProfileCard({ name, image} : ProfileCardProps){
    return (
        <div className="flex flex-col items-center justify-evenly w-[50vw] h-[60vh] rounded-3xl border-2
        border-gray-900 px-8 shadow-xl bg-slate-900 text-white shadow-slate-800">
            <img src={image} alt={name} className="rounded-full w-2/3 h-auto"/>
            <h1 className="text-4xl text-center wrap-break-word">{name}</h1>
        </div>
    )
}