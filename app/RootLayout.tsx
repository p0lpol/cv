import { Outlet } from "react-router-dom";
import TopBarFloating from "@/src/components/TopBarFloating";

export default function RootLayout() {
    return (
        /* The main container remains the same to keep your green background consistent */
        <div className="relative flex flex-col min-h-screen w-full bg-linear-145 from-green-800 from-45% to-emerald-900 to-55%">

            {/* Header stays fixed at the top */}
            <header className="fixed top-0 z-50 w-full pt-6 flex justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    <TopBarFloating />
                </div>
            </header>

            {/* The Main Content Area */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 mt-20">
                {/* Outlet renders the child component (like ProfileCard) based on the route */}
                <Outlet />
            </main>

        </div>
    );
}