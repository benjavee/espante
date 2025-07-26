import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import Bronchade from '../assets/Bronchade.svg'
import dessinGueutas from '../assets/dessin_gueutas.svg'
import fanzineImage from '../assets/fanzine.png'
import persoMain from '../assets/Perso_plein_pied_logo.svg'
import persoPortrait from '../assets/Perso_portrait_americain.svg'

import starterPack from '../assets/starter_pack.svg'
import tuConnaisPack from '../assets/tu_connais_pack.svg'
import tUnBonPack from '../assets/tye_un bon_pack.svg'
import tripleMonstrePack from '../assets/triple_monstre_pack.svg'
import LogoPng from '../assets/logo.png'

const packs = [
  { id: 1, title: 'Starter Pack', price: '10€', image: starterPack },
  { id: 2, title: 'Tu Connais ! Pack', price: '20€', image: tuConnaisPack },
  { id: 3, title: 'T es un Bon Pack', price: "50€", image: tUnBonPack },
  { id: 4, title: 'Triple Monstre Pack', price: '80€', image: tripleMonstrePack },
]

type PackCardProps = {
  id: number
  title: string
  price: string
  image: any
}

const PackCard: React.FC<PackCardProps> = ({ id, title, price, image }) => (
    <div className="relative">
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
        {id === 3 && (
            <div className="absolute -top-8 right-4 w-8 h-8">
                <Image src={Bronchade} width={32} height={32} alt="pointer" />
            </div>
        )}
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
              <header>
                <div className="bg-purple-600 w-full py-4">
                  <div className="max-w-5xl mx-auto px-4 flex items-center">
                    <div className="relative">
                      <Image src={LogoPng} width={150} height={50} alt="Espante logo" />
                    </div>
                    <nav className="ml-auto space-x-6 text-white">
                      <a href="#" className="hover:underline">Home</a>
                      <a href="#" className="hover:underline">Contact</a>
                      <a href="#packs" className="hover:underline">Shop</a>
                    </nav>
                  </div>
                </div>
              </header>
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-yellow-50">
                    {/* Background Circle */}
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-200 rounded-full" />
                    {/* Hero Content */}
                    <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h1 className="text-5xl font-extrabold">Nouveau Fanzine</h1>
                            <p className="mt-2 text-2xl">4 packs en précommande</p>
                            <p className="mt-8 text-lg font-medium">Livraison Automne 2025</p>
                        </div>
                        <div className="flex-1 relative w-full h-80">
                            <Image src={fanzineImage} layout="fill" objectFit="contain" alt="Fanzine preview" />
                        </div>
                    </div>
                </section>

                {/* Packs Section */}
                <section id="packs" className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 relative">
                        <div className="absolute -bottom-16 left-0 w-40 opacity-50 pointer-events-none">
                            <Image src={dessinGueutas} width={160} height={100} alt="decorative sketch" />
                        </div>
                        <h2 className="text-2xl font-bold text-center mb-8">Les 4 Packs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {packs.map(pack => (
                                <PackCard key={pack.id} id={pack.id} title={pack.title} price={pack.price} image={pack.image} />
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
                              Plongez dans un ouvrage unique de <strong>48 pages</strong> en couleur, au format comics (26 × 17 cm), imprimé en offset avec une couverture dos carré collé 250 g. Ce nouveau fanzine vous propose <strong>6 histoires courtes inédites</strong> en BD et une nouvelle illustrée signée Sergio Léo et illustrée par mes soins. Vous y trouverez aussi des textes exclusifs coécrits avec Sergio Léo, un témoignage passionnant de Jean-Baptiste Durand, un jeu d’observation original et des planches graphiques qui enrichissent l’univers.
                            </p>
                            <p className="mt-6 text-base leading-relaxed">
                              Pour répondre à toutes les envies et tous les budgets, <strong>4 packs différents</strong> sont disponibles en précommande. Choisissez <strong>la formule qui vous convient</strong> et soutenez la création indépendante tout en vous assurant de recevoir votre exemplaire dès sa sortie !
                            </p>
                            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md">
                                Découvrir les packs
                            </button>
                        </div>
                        <div className="flex-1 relative w-full h-80">
                            <Image src={persoMain} layout="fill" objectFit="contain" alt="Character" />
                        </div>
                    </div>
                </section>

                {/* Footer / CTA Section */}
                <section className="py-16 bg-purple-100">
                    <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="relative w-full h-64">
                            <Image src={persoPortrait} layout="fill" objectFit="contain" alt="Contact us" />
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
