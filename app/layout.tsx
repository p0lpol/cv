import type { Metadata } from "next";
import "./globals.css";
import TopBarFloating from "@/src/components/TopBarFloating";

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Étudiant en BUT informatique",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <body className="antialiased">
        {/* Main Background Shell */}
        <div className="relative flex flex-col min-h-screen w-full bg-linear-145 from-green-800 from-45% to-emerald-900 to-55%">

            {/* 1. Fixed Header: Stays at the top while you navigate */}
            <header className="fixed top-0 z-50 w-full pt-8 flex justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    <TopBarFloating />
                </div>
            </header>

            {/* 2. The Dynamic Content Area (The "Outlet") */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 mt-24">
                {children}
            </main>

        </div>
        </body>
        </html>
    );
}