import {ReactNode} from "react";

interface TopBarItemProps {
    title: string;
}

function Button(props: { className: string, children: ReactNode }) {
    return null;
}

export default function TopBarItem({ title }: TopBarItemProps) {
    return (
        <Button className="
            relative px-5 py-2 text-white font-bold cursor-pointer
            transition-all duration-75 select-none outline-none rounded-xl

            -translate-y-1
            bg-linear-160 from-slate-900 to-slate-800

            hover:from-slate-700 hover:to-zinc-700

            active:translate-y-0
            active:scale-[0.97]
        "
        >
            <div className="absolute inset-x-0 top-0 h-px  rounded-xl bg-white/20 " />

            <span className="relative z-10">{title}</span>
        </Button>
    );
}