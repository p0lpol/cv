import "./globals.css";
import TopBarFloating from "@/src/components/TopBarFloating";

import type {Viewport} from 'next'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className="h-full min-h-fit">
        <body className="min-h-dvh ">
            <header className="z-10 inset-y-0 top-4 fixed left-1/4 right-1/4 h-fit">
                <TopBarFloating />
            </header>
            {children}
        </body>
        </html>
    );
}