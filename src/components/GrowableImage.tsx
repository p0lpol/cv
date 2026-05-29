"use client"
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {StaticImageData} from "next/image";

export default function GrowableImage({src, layoutId, alt}: {src: StaticImageData, layoutId: string, alt: string}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-10 bg-sky-900 min-h-fit min-w-fit">
            <div className="max-w-sm cursor-pointer group">
                <motion.img
                    layoutId={layoutId}
                    src={src.src}
                    alt={alt}
                    onClick={() => setIsOpen(true)}
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        {/* Dark Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
                        />

                        <motion.img
                            layoutId={layoutId}
                            src={src.src}
                            alt={alt}
                            className="relative z-10 max-w-[90vw] max-h-[90vh] rounded-sm shadow-2xl cursor-zoom-out object-contain"
                            onClick={() => setIsOpen(false)}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}