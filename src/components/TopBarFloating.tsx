import TopBarItem from "@/src/components/TopBarItem";

export default function TopBarFloating() {
    return (
        <nav className=" relative grid grid-flow-col grid-cols-5 gap-6 px-6 p-3 text-lg
        bg-slate-900 rounded-full">
            <TopBarItem title="Acceuil" link="/"/>
            <TopBarItem title="Formation" link="formation"/>
            <TopBarItem title="Projects" link="projects"/>
            <TopBarItem title="Experience" link="experience"/>
            <TopBarItem title="Contact" link="contact"/>
        </nav>
    );
}