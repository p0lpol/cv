import {ChevronDown} from "lucide-react";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";

export interface GoodBadCardProps {
    title: string;
    description: string;
    isPositive: boolean;
}

const containerVariants = {
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.25,
            ease: "easeInOut"
        }
    },
    open: {
        height: "auto",
        opacity: 1,
        transition: {
            when: "beforeChildren",
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const textVariants = {
    closed: {
        opacity: 0,
        y: 8, // Petit effet de glissement vers le bas à la fermeture
        transition: { duration: 0.15 }
    },
    open: {
        opacity: 1,
        y: 0, // Revient à sa place initiale
        transition: { duration: 0.2, ease: "easeOut" }
    }
};

export default function GoodBadCard ({title, description, isPositive}: GoodBadCardProps) {
    const bgTitle = isPositive ? "bg-green-600" : "bg-red-600";
    const bgColor = isPositive ? "bg-green-800" : "bg-red-800";
    const [isOpen, setOpen] = React.useState(false);

    return (
        <div
            className="flex flex-col items-center w-full rounded-2xl overflow-hidden cursor-pointer select-none shadow-md"
            onClick={() => setOpen(!isOpen)}
        >
            <div className={`flex items-center justify-between w-full p-4 ${bgTitle} font-bold text-lg relative z-10`}>
                <h2>{title}</h2>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center"
                >
                    <ChevronDown size={16} />
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className={`${bgColor} w-full overflow-hidden`}
                    >
                        <motion.div
                            variants={textVariants}
                            className="p-4 text-justify"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}