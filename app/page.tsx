import ProfileCard from "@/src/components/ProfileCard";

export default function Home() {
    return (
        <main className="flex flex-col items-center min-h-fit w-screen p-16 gap-16">
            <ProfileCard
                name="Your Name"
                image="https://picsum.photos/200/300"
        />
        <a href="/cv.pdf" download="Paul-Arnaud_DELAVICTOIRE" className="flex justify-center
        items-center bg-sky-900 hover:bg-sky-800 text-white font-bold p-4 rounded-full w-1/3 text-2xl
        hover:scale-110 transition-all duration-200">
            <button id="download" type="button">Télécharger mon CV</button>
        </a>

        </main>
    );
}