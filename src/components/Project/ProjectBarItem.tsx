import Link from "next/link";

export default function ProjectBarItem({title, anchor}: { title: string, anchor: string}) {
    return (
        <Link className="flex p-2 text-sm font-medium text-white
        transition-colors duration-200 hover:text-emerald-200 rounded-lg
        bg-cyan-950 justify-center items-center hover:bg-slate-700 active:opacity-50"
              href={anchor}
        >
            <span className="relative z-10">{title}</span>
        </Link>
    )
}