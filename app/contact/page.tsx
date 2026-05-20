"use client"
import {Mail} from "lucide-react";
import {useState} from "react";
import Image from "next/image";

export function useCopy() {
    const [isCopied, setIsCopied] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const copyToClipboard = async (text: string, e: React.MouseEvent) => {
        try {
            await navigator.clipboard.writeText(text);
            setCoords({ x: e.clientX, y: e.clientY });
            setIsCopied(true);

            setTimeout(() => setIsCopied(false), 1000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return { isCopied, coords, copyToClipboard };
}

export default function Page() {

    const {isCopied, coords, copyToClipboard} = useCopy();
    const LinkedIn = (
        {size}: {size: number}) =>
        <Image
            src="/LinkedIn.svg"
            alt="LinkedIn"
            width={size}
            height={size}
            className="block"
        />
    return (
        <div className="flex flex-col flex-1 w-4/5 items-center gap-4 bg-slate-900 rounded-2xl p-8 h-fit">
            <h1 className="text-white text-5xl font-bold font-serif p-8">Me contacter</h1>
            <h2 className="text-white text-xl font-bold font-serif p-8">
                Vous avez une opportunité ou une question ? N'hésitez pas à m'envoyer un message
                via ce formulaire ou directement par email.
            </h2>
            <div className="flex w-full gap-12">
                <div className="flex flex-col gap-4 justify-baseline items-start bg-white/20 rounded-xl p-4
                h-fit">
                    <h3 className="text-2xl font-bold">Coordonnées</h3>
                    <ul className="flex flex-col gap-2 ml-5">
                        <li className="flex gap-10 items-center">
                            <b>Email:</b>
                            <button
                                onClick={(e) => copyToClipboard("delavictoirepaul5@gmail.com", e)}
                                className="hover:text-green-400 hover:cursor-pointer transition-colors duration-300"
                            >
                                <Mail size={40}/>
                            </button>
                        </li>
                        <li className="flex gap-4">
                            <b>LinkedIn:</b>
                            <a href={"https://www.linkedin.com"}><LinkedIn size={40}/></a>
                        </li>
                        <li><b>Lieu de résidence:</b> <br/> <i>Villeneuve d'Ascq, Nord</i></li>
                    </ul>
                    {isCopied &&
                        <div
                            className="absolute bg-gray-500 rounded-xl p-4"
                            style={{top: coords.y - 60, left: coords.x, transform: 'translateX(-50%)'}}
                        >
                            <p>Copied to clipboard</p>
                        </div>
                    }
                </div>
                <form className="flex flex-col flex-1 gap-4 col-span-2" action="/api/contact" method="POST">
                    <label htmlFor="name">Nom complet</label>
                    <input className="input" type="text" id="name" name="name" placeholder="Jean JEAN" required={true}/>
                    <label htmlFor="company">Entreprise (Optionnel)</label>
                    <input className="input" type="text" id="company" name="company" placeholder="Mon Entreprise"/>
                    <label htmlFor="email">Votre adresse mail professionnelle</label>
                    <input className="input" type="email" id="email" name="email" placeholder="jean.JEAN@entreprise.com"
                           required={true}/>
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="input"
                        id="message"
                        name="message"
                        placeholder="Bonjour, votre profil m'intéresse..."
                        required={true}
                        rows={15}
                        cols={50}
                    />
                    <button type="submit" className="bg-white/50 hover:bg-emerald-200 rounded-lg p-4 transition-colors
                    duration-300 active:opacity-50">Envoyer
                    </button>
                </form>
            </div>
        </div>
    )
}