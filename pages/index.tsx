import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import Bronchade from '../assets/Bronchade.svg'
import { useState, useEffect } from 'react'
import dessinGueutas from '../assets/dessin_gueutas.svg'
import fanzineImage from '../assets/fanzine.png'
import persoMain from '../assets/Perso_plein_pied_logo.svg'
import persoPortrait from '../assets/Perso_portrait_americain.svg'


import LogoPng from '../assets/logo.png'

import { packs } from '../model/packs'


type PackCardProps = {
  slug: string
  image: any
}

const PackCard: React.FC<PackCardProps> = ({ slug, image }) => {
  const router = useRouter()
  return (
    <div className="relative shadow-lg rounded-lg overflow-visible">
      <div className="relative w-full" style={{ paddingBottom: '210%' }}>
        <Image src={image} layout="fill" objectFit="contain" alt="" />
      </div>
      <button
        className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md"
        onClick={() => router.push(`/packs/${slug}`)}
      >
        Détails
      </button>
    </div>
  )
}

const Home: NextPage = () => {
  const [showBronchade, setShowBronchade] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })

useEffect(() => {
  const delay = Math.random() * (5000) + 2000
  const timer = setTimeout(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    setPos({
      top: Math.random() * (vh - 200),     // ensure visible
      left: Math.random() * (vw - 200),
    })
    setShowBronchade(true)
    // Hide after 2 seconds
    const hideTimer = setTimeout(() => setShowBronchade(false), 2000)
    // Clear hideTimer if unmounted early
    return () => clearTimeout(hideTimer)
  }, delay)
  return () => clearTimeout(timer)
}, [])

    return (
        <>
            <Head>
                <title>Espante - Précommande Fanzine</title>
                <meta name="description" content="Précommande de fanzines et packs exclusifs" />
            </Head>
            <main className="pt-24 flex flex-col">
              <header className="fixed top-4 left-0 w-full overflow-visible z-50">
                {/* Top bar background */}
                <div className="bg-[#6e688c] h-12 mx-[5%] rounded-t-md"></div>
                {/* Logo and nav floating above the bar */}
                <div className="absolute left-[5%] right-[10%] top-0 flex items-center justify-between" style={{ height: '96px' }}>
                  <div className="relative z-10 -translate-y-4">
                    <Image src={LogoPng} width={200} height={80} alt="Espante logo" />
                  </div>
                  <nav className="space-x-6 text-white z-10 -translate-y-5">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#instagram" className="hover:underline">Contact</a>
                    <a href="#packs" className="hover:underline">Shop</a>
                  </nav>
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
                <section id="packs" className="py-16 bg-white relative overflow-visible">
                    <div className="max-w-5xl mx-auto px-4 relative">
                        <h2 className="text-2xl font-bold text-center mb-8">Les 4 Packs</h2>
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          {packs.map(pack => (
                            <div key={pack.id} className="relative z-10">
                              <PackCard slug={pack.slug} image={pack.preview} />
                            </div>
                          ))}
                        </div>
                        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-50 pointer-events-none z-0">
                          <Image src={dessinGueutas} width={200} height={150} alt="decorative sketch" />
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
                            <a
                              id="instagram"
                              href="https://instagram.com/LaGoutanerie"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-block px-4 py-2 bg-pink-500 text-white rounded-md"
                            >
                                @LaGoutanerie
                            </a>
                        </div>
                    </div>
                </section>
              {/* Bottom Logo */}
              <div className="py-8 flex justify-center">
                <Image src={LogoPng} width={120} height={60} alt="Espante logo" />
              </div>
              {showBronchade && (
                <div
                  style={{
                    position: 'fixed',
                    top: pos.top,
                    left: pos.left,
                    width: 200,
                    height: 200,
                    zIndex: 9999,
                    animation: 'dropZoom 0.8s ease-out forwards, fadeOut 0.3s ease-in 1s forwards',
                  }}
                >
                  <Image src={Bronchade} layout="fill" objectFit="contain" alt="" />
                </div>
              )}
            </main>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx global>{`
              @keyframes dropZoom {
                0% { transform: scale(0.2) translateY(-100px); opacity: 0; }
                50% { transform: scale(1.5) translateY(20px); opacity: 1; }
                100% { transform: scale(1) translateY(0); opacity: 1; }
              }
              @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; }
              }
            `}</style>
        </>
    )
}

export default Home
