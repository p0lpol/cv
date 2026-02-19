import ProfileCard from "@/src/components/ProfileCard";

export default function Home() {
    return (
        <div className="flex h-full min-h-screen min-w-screen w-full bg-emerald-700">
            <div className="flex flex-col items-center justify-center w-full">
                <ProfileCard name="Firstname LastName" image="https://picsum.photos/200"/>
            </div>
        </div>
    );
}
