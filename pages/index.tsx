import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

const packs = [
    { id: 1, title: 'Starter Pack', price: '10€', image: '/assets/starter-pack.svg' },
    { id: 2, title: 'Tu Connais ! Pack', price: '20€', image: '/assets/tu-connais-pack.svg' },
    { id: 3, title: "T'es un Bon Pack", price: "50€", image: '/assets/tye-un-bon-pack.svg' },
    { id: 4, title: 'Triple Monstre Pack', price: '80€', image: '/assets/triple-monstre-pack.svg' },
]

type PackCardProps = {
    title: string
    price: string
    image: string
}

const PackCard: React.FC<PackCardProps> = ({ title, price, image }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center">
        <div className="w-full h-48 relative">
            <Image src={image} layout="fill" objectFit="contain" alt={title} />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className="font-bold text-lg">{title}</h3>
            <span className="mt-2 text-xl text-yellow-600">{price}</span>
            <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md">Détails</button>
        </div>
    </div>
)

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Espante - Précommande Fanzine</title>
                <meta name="description" content="Précommande de fanzines et packs exclusifs" />
            </Head>
            <main className="flex flex-col">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-yellow-50">
                    {/* Background Circle */}
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-200 rounded-full" />
                    {/* Navbar Logo */}
                    <header className="relative z-10 max-w-5xl mx-auto p-4 flex justify-between items-center">
                        <Image src="/assets/logo.svg" width={120} height={60} alt="Espante logo" />
                        <nav className="space-x-6 text-gray-700">
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">Contact</a>
                            <a href="#packs" className="hover:underline">Shop</a>
                        </nav>
                    </header>
                    {/* Hero Content */}
                    <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h1 className="text-5xl font-extrabold">Nouveau Fanzine</h1>
                            <p className="mt-2 text-2xl">4 packs en précommande</p>
                            <p className="mt-8 text-lg font-medium">Livraison Automne 2025</p>
                        </div>
                        <div className="flex-1 relative w-full h-80">
                            <Image src="/assets/fanzine-mockup.png" layout="fill" objectFit="contain" alt="Fanzine mockup" />
                        </div>
                    </div>
                </section>

                {/* Packs Section */}
                <section id="packs" className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-8">Les 4 Packs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {packs.map(pack => (
                                <PackCard key={pack.id} {...pack} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-16 bg-yellow-50">
                    <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold">Deuxième Fanzine en Approche</h2>
                            <p className="mt-4 text-base leading-relaxed">
                                Plongez dans un ouvrage unique de 48 pages en couleur, au format comics... {/* Texte détaillé ici */}
                            </p>
                            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md">
                                Découvrir les packs
                            </button>
                        </div>
                        <div className="flex-1 relative w-full h-80">
                            <Image src="/assets/illustration-character.svg" layout="fill" objectFit="contain" alt="Character" />
                        </div>
                    </div>
                </section>

                {/* Footer / CTA Section */}
                <section className="py-16 bg-purple-100">
                    <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="relative w-full h-64">
                            <Image src="/assets/illustration-mail.svg" layout="fill" objectFit="contain" alt="Contact us" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold">Paiement Sécurisé</h2>
                            <p className="mt-2 text-xl">Livraison Possible • Remise en main propre</p>
                            <p className="mt-4 text-sm text-gray-700">Si tu as la moindre question, viens me parler sur Insta!</p>
                            <a href="https://instagram.com/LaGoutanerie" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-pink-500 text-white rounded-md">
                                @LaGoutanerie
                            </a>
                        </div>
                        <div className="flex-shrink-0">
                            <Image src="/assets/logo.svg" width={120} height={60} alt="Espante logo" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
