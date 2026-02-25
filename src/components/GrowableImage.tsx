"use client"
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export default function GrowableImage({src, layoutId, alt}: {src: string, layoutId: string, alt: string}) {
    const [selectedId, setSelectedId] = useState(false);
    return (
        <div className="p-10 bg-gray-900 min-h-fit min-w-fit">
            <div className="max-w-sm cursor-pointer group">
                <motion.img
                    layoutId={layoutId}
                    src={src}
                    alt={alt}
                    onClick={() => setSelectedId(true)}
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        {/* Dark Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.img
                            layoutId={layoutId}
                            src={src}
                            alt={alt}
                            className="relative z-10 max-w-[90vw] max-h-[90vh] rounded-sm shadow-2xl cursor-zoom-out"
                            onClick={() => setSelectedId(false)}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}