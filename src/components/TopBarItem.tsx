import Link from "next/link";

interface TopBarItemProps {
    title: string;
    link: string;
}

export default function TopBarItem({ title , link="/"}: TopBarItemProps) {
    return (
        <Link className="flex p-2 text-sm font-medium text-white
        transition-colors duration-200 hover:text-emerald-200 rounded-lg
        bg-cyan-950 justify-center items-center hover:bg-cyan-800 active:opacity-50
        drop-shadow-slate-900 drop-shadow-md shadow-[inset_2px_2px_0px_0px_rgb(33,91,99)]"
           href={link}
        >
            <span className="relative z-10">{title}</span>
        </Link>
    );
}