import Link from "next/link";

export interface BigItemsProps {
    name: string;
    image: string;
    description: string;
    link: string;
    rounded?: boolean;
}

export default function BigItems({name, image, description, link, rounded=true}: BigItemsProps) {
    return(
        <Link className="flex items-center justify-between gap-4 border-4 border-white p-2 px-4 rounded-xl
        hover:bg-slate-800 hover:border-emerald-500 transition-all duration-200 hover:scale-110 h-60"
              href={link}>
            <div className="flex flex-col justify-evenly">
                <h1 className="text-xl">{name}</h1>
                <p>{description}</p>
            </div>
            <img src={image} alt={name} width={200} height={200} className={rounded ? 'rounded-full' : 'rounded-xl'}/>
        </Link>
    )
}