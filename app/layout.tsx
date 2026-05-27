import "./globals.css";
import TopBarFloating from "@/src/components/TopBarFloating";

import type {Viewport} from 'next'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <div className="relative flex flex-col min-h-screen w-full bg-linear-145 from-emerald-200 to-green-400">
            <header className="fixed w-1/2 m-4 flex self-center z-50 @container">
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