import ProfileCard from "@/src/components/ProfileCard";
import TopBarFloating from "@/src/components/TopBarFloating";

export default function Home() {
    return (
        <main className="flex flex-col items-center min-h-screen p-24">
            <ProfileCard
                name="Your Name"
                image="https://picsum.photos/200/300"
            />
        </main>
    );
}