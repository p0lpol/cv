import TopBarItem from "@/src/components/TopBarItem";

export default function TopBarFloating() {
    return (
        <nav className=" relative grid grid-flow-col grid-cols-6 gap-6 px-6 p-3 text-lg
        bg-slate-900 rounded-full">
            <TopBarItem title="Acceuil" link="/"/>
            <TopBarItem title="Formation" link="/formation"/>
            <TopBarItem title="Projets" link="/projets"/>
            <TopBarItem title="Compétences" link="/competences"/>
            <TopBarItem title="Experience" link="/experience"/>
            <TopBarItem title="Contact" link="/contact"/>
        </nav>
    );
}