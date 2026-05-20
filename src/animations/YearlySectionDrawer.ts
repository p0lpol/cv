import {Variants} from 'framer-motion'

export default class YearlySectionAnimation {
    drawerVariants : Variants ;
    contentVariants : Variants ;

    constructor() {
        this.contentVariants = {
            closed: {
                y: -200,
                opacity: 0,
                transition: {
                    duration: 0.3,
                    ease: "easeIn"
                }
            },
            open: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: "easeOut"
                }
            }
        };
        this.drawerVariants = {
            closed: {
                height: 0,
                transition: {height: {duration: 0.4, ease: [0.4, 0, 0.2, 1] as const}}
            },
            open: {
                height: "auto",
                transition: {height: {duration: 0.5, ease: [0.4, 0, 0.2, 1] as const}}
            }
        };
    }
}