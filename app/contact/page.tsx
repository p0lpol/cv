export default function Page() {
    return (
        <div className="flex flex-col flex-1 w-4/5 items-center gap-4 bg-slate-900 rounded-2xl p-8 h-fit">
            <h1 className="text-white text-5xl font-bold font-serif p-8">Me contacter</h1>
            <h2 className="text-white text-xl font-bold font-serif p-8">
                Vous avez une opportunité ou une question ? N'hésitez pas à m'envoyer un message
                via ce formulaire ou directement par email.
            </h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-4 flex-4 justify-baseline items-start">
                    <h3 className="text-2xl font-bold">Coordonnées</h3>
                    <ul className="flex flex-col gap-2 ml-5">
                        <li>Email: </li>
                        <li>LinkedIn: </li>
                        <li>Lieu de résidence: </li>
                    </ul>
                </div>
                <form className="flex flex-col gap-4 flex-1" action="/api/contact" method="POST">
                    <label htmlFor="name">Nom complet</label>
                    <input type="text" id="name" name="name" placeholder="Jean JEAN" required={true}/>
                    <label htmlFor="company">Entreprise (Optionnel)</label>
                    <input type="text" id="company" name="company" placeholder="Mon Entreprise"/>
                    <label htmlFor="email">Votre adresse mail professionnelle</label>
                    <input type="email" id="email" name="email" placeholder="jean.JEAN@entreprise.com" required={true}/>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Bonjour, votre profil m'intéresse..." required={true}/>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}