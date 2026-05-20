'use client'

import {motion} from "framer-motion";
import {ChevronDown} from "lucide-react";
import {JSX, useState} from "react";
import BigList from "@/src/components/BigList";
import YearlySectionAnimation from "@/src/animations/YearlySectionDrawer";
import {BigItemsProps} from "@/src/components/BigItem";

export default function YearlySection({ items, year }: { items: BigItemsProps[], year: number }): JSX.Element {
    const [isOpen, setOpen] = useState(true);
    const animation = new YearlySectionAnimation();
    const drawerVariants = animation.drawerVariants;
    const contentVariants = animation.contentVariants;

    const titleColor = "text-cyan-900"

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 w-3/4">
                <h1 className={`${titleColor} text-6xl font-bold font-serif p-8`}>{year}</h1>
                <div
                    onClick={() => setOpen(!isOpen)}
                    className={`cursor-pointer ${titleColor}`}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <ChevronDown size={40}/>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="w-full overflow-hidden mask-[linear-gradient(to_bottom,transparent_0%,white_48px,white_calc(100%-48px),transparent_100%)]"
                initial={isOpen ? "open" : "closed"}
                animate={isOpen ? "open" : "closed"}
                variants={drawerVariants}
            >
                <motion.div className="w-full flex flex-col items-center p-12" variants={contentVariants}>
                    <BigList items={items} />
                </motion.div>
            </motion.div>
        </div>
    )
}