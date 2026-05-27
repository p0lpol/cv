import Link from "next/link";

interface ProjectBarItemProps {
    title: string;
    anchor: string;
    isActive?: boolean;
}

export default function ProjectBarItem({ title, anchor, isActive = false }: ProjectBarItemProps) {
    return (
        <Link
            className={`transition-all nav-item-wrapper ${isActive ? "active-nav-item" : ""}`}
            href={anchor}
        >
            <span className="relative z-10">{title}</span>
        </Link>
    );
}