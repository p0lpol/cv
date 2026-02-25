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
            <body>
                <div className="relative flex flex-col min-h-screen w-full bg-linear-145 from-green-800 from-45% to-emerald-900 to-55%">

                    <header className="fixed w-full p-4 flex justify-center">
                        <TopBarFloating />
                    </header>

                    <main className="flex-1 flex flex-col items-center justify-center p-4 mt-24">
                        {children}
                    </main>

                </div>
            </body>
        </html>
    );
}