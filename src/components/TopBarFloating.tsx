import TopBarItem from "@/src/components/TopBarItem";

export default function TopBarFloating() {
    return (
        <nav className=" relative flex gap-6 z-0 px-12 py-3 text-white text-lg
      before:content-[''] before:absolute before:z-[-2]
      before:w-[calc(100%+4px)] before:h-[calc(100%+4px)]
      before:-top-0.5 before:-left-0.5
      before:bg-linear-[45deg,#FF0000,#FF7300,#FFFB00,#48FF00,#00FFD5,#002BFF,#FF00C8,#FF0000]
      before:bg-size-[600%_auto] before:blur-md before:rounded-md
      before:animate-glowing

      after:content-[''] after:absolute after:inset-0 after:z-[-1]
      after:bg-slate-900 after:rounded-full">

            <TopBarItem title="Acceuil"/>
            <TopBarItem title="Formation"/>
            <TopBarItem title="Projects"/>
            <TopBarItem title="Experience"/>
            <TopBarItem title="Contact"/>
        </nav>
    );
}