interface TopBarItemProps {
    title: string;
    link: string;
}

export default function TopBarItem({ title , link="/"}: TopBarItemProps) {
    return (
        <a className="flex p-2 text-sm font-medium text-white
        transition-colors duration-200 hover:text-emerald-500 rounded-lg
        bg-slate-800 justify-center items-center hover:bg-slate-700 active:opacity-50"
           href={link}
        >
            <span className="relative z-10">{title}</span>
        </a>
    );
}