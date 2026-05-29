import React from 'react';

interface PageContainerProps {
    children: React.ReactNode;
    backgroundClass?: string;
}

export default function PageContainer({ children, backgroundClass }: PageContainerProps) {
    const finalBg = backgroundClass || "bg-gradient-to-b from-green-400 via-green-900 to-black";

    return (
        // <div className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden relative">
        //     <div className={`fixed inset-0 -z-10 w-screen h-screen bg-transparent`} />
        //     <main className="flex flex-col items-center p-4 min-h-screen pt-24 text-white">
        //         {children}
        //     </main>
        //
        // </div>
        <></>
    );
}