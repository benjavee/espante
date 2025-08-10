import {useRouter} from 'next/router'
import {NextPage} from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import Bronchade from '../assets/Bronchade.svg'
import {useState, useEffect} from 'react'
import dessinGueutas from '../assets/dessin_gueutas.svg'
import fanzineImage from '../assets/fanzine.png'
import persoMain from '../assets/Perso_plein_pied_logo.svg'
import persoPortrait from '../assets/Perso_portrait_americain.svg'
import premierDrop from '../assets/premier_drop.png'


import LogoPng from '../assets/logo.png'

import {packs} from '../model/packs'


type PackCardProps = {
    slug: string
    image: any
    color: string
}

const PackCard: React.FC<PackCardProps> = ({slug, image, color}) => {
    const router = useRouter()
    return (
        <div
            className="relative overflow-visible cursor-pointer transition-shadow transition-transform duration-200 ease-out hover:shadow-4xl hover:-translate-y-1"
            onClick={() => router.push(`/packs/${slug}`)}
        >
            <div
                className="relative rounded-xl overflow-hidden shadow-3xl drop-shadow-2xl bg-gradient-to-b from-white to-gray-50">
                {/* Top color bar: 5% height */}
                <div
                    className="absolute top-0 left-0 w-full"
                    style={{height: '3%', backgroundColor: color}}
                />
                {/* Bottom color bar: 20% height */}
                <div
                    className="absolute bottom-0 left-0 w-full"
                    style={{height: '25%', backgroundColor: color}}
                />
                <div className="relative w-full" style={{paddingBottom: '210%'}}>
                    <Image src={image} layout="fill" objectFit="contain" alt=""/>
                </div>
            </div>
            <button
                className="absolute bottom-0 left-1/2 z-10 transform -translate-x-1/2 translate-y-7 px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md transition-colors duration-200 hover:bg-gray-900"
            >
                Détails
            </button>
        </div>
    )
}

const Home: NextPage = () => {
    const [showBronchade, setShowBronchade] = useState(false)
    const [pos, setPos] = useState({top: 0, left: 0})

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
                <meta name="description" content="Précommande de fanzines et packs exclusifs"/>
            </Head>
            <main className="pt-24 flex flex-col">
                <header className="fixed top-4 left-0 w-full overflow-visible z-50">
                    {/* Top bar background */}
                    <div className="bg-[#6e688c] h-12 mx-[5%] rounded-t-md"></div>
                    {/* Logo and nav floating above the bar */}
                    <div className="absolute left-[5%] right-[10%] top-0 flex items-center justify-between"
                         style={{height: '96px'}}>
                        <div className="relative z-10 -translate-y-4">
                            <Image src={LogoPng} width={200} height={80} alt="Espante logo"/>
                        </div>
                        <nav className="space-x-6 text-white z-10 -translate-y-5">
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#instagram" className="hover:underline">Contact</a>
                            <a href="#packs" className="hover:underline">Shop</a>
                        </nav>
                    </div>
                </header>
                {/* Hero Section */}
                <section id="home" className="relative overflow-hidden bg-yellow-50">
                    <div aria-hidden
                         className="pointer-events-none absolute -top-[18vw] -right-[18vw] w-[95vw] md:w-[70vw] max-w-[1200px] aspect-square rounded-full bg-[#FFEAA6] opacity-90 z-0"/>
                    <div className="relative z-10 max-w-6xl mx-[10px] md:mx-auto px-4 pt-3 md:pt-4 pb-0 md:pb-1">
                        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4">
                            {/* Bloc Livraison à gauche */}
                            <div className="lg:col-span-4 order-2 lg:order-1">
                                <p className="text-3xl md:text-4xl font-black leading-none">Livraison</p>
                                <p className="mt-2 text-[#F4BF3C] text-5xl md:text-6xl font-extrabold leading-none">Automne</p>
                                <p className="mt-2 text-4xl md:text-5xl font-light leading-none">2025</p>
                            </div>

                            {/* Colonne visuel + bulle + titre */}
                            <div className="lg:col-span-8 order-1 lg:order-2 relative flex flex-col items-center">
                                {/* Bulle décorative derrière le bloc droit */}
                                <div
                                    aria-hidden
                                    className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 w-[70%] md:w-[55%] max-w-[760px] aspect-square rounded-full bg-[#FFEAA6] opacity-90 z-0"
                                />
                                {/* Titre au-dessus des images */}
                                <div
                                    className="relative z-20 text-center translate-y-3 md:translate-y-5 lg:translate-y-6 translate-x-[40%] md:translate-x-[55%] lg:translate-x-[65%] -mb-6 md:-mb-8">
                                    <h1 className="text-3xl md:text-4xl font-black leading-snug">Nouveau</h1>
                                    <div
                                        className="text-4xl md:text-5xl font-extrabold text-[#6e688c] leading-snug">Fanzine
                                    </div>
                                    <p className="mt-1 md:mt-2 text-base md:text-lg uppercase tracking-wide font-black">4
                                        PACKS EN PRÉCOMMANDES</p>
                                </div>

                                {/* Visuel en dessous du titre */}
                                <div
                                    className="relative z-10 -mt-4 md:-mt-8 w-full h-60 md:h-[360px] lg:h-[420px] xl:h-[480px] drop-shadow-xl">
                                    <Image
                                        src={fanzineImage}
                                        layout="fill"
                                        objectFit="contain"
                                        className="object-contain object-left -translate-x-4 md:-translate-x-8"
                                        objectPosition="left center"
                                        alt="Fanzine preview"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Packs Section */}
                <section id="packs" className="pt-8 pb-16 bg-white relative overflow-visible">
                    <div className="max-w-5xl mx-[10px] md:mx-auto px-4 relative">
                        <h2 className="text-2xl font-bold text-center mb-8">Les 4 Packs</h2>
                        <div
                            className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-6">
                            {packs.map(pack => (
                                <div key={pack.id} className="relative z-10">
                                    <PackCard slug={pack.slug} image={pack.preview} color={pack.color}/>
                                </div>
                            ))}
                        </div>
                        <div className="absolute -bottom-24 left-20 opacity-50 pointer-events-none z-0">
                            <Image src={dessinGueutas} width={200} height={150} alt="decorative sketch"/>
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-8 md:py-16 bg-yellow-50">
                    <div className="max-w-5xl mx-[10px] md:mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-bold">Deuxième Fanzine en Approche</h2>
                            <p className="mt-4 text-base leading-relaxed">
                                Plongez dans un ouvrage unique de <strong>48 pages</strong> en couleur, au format comics
                                (26 × 17 cm), imprimé en offset avec une couverture dos carré collé 250 g. Ce nouveau
                                fanzine vous propose <strong>6 histoires courtes inédites</strong> en BD et une nouvelle
                                illustrée signée Sergio Léo et illustrée par mes soins. Vous y trouverez aussi des
                                textes exclusifs coécrits avec Sergio Léo, un témoignage passionnant de Jean-Baptiste
                                Durand, un jeu d’observation original et des planches graphiques qui enrichissent
                                l’univers.
                            </p>
                            <p className="mt-6 text-base leading-relaxed">
                                Pour répondre à toutes les envies et tous les budgets, <strong>4 packs
                                différents</strong> sont disponibles en précommande. Choisissez <strong>la formule qui
                                vous convient</strong> et soutenez la création indépendante tout en vous assurant de
                                recevoir votre exemplaire dès sa sortie !
                            </p>

                        </div>
                        <div className="w-full lg:w-1/2 relative h-64 md:h-80">
                            <Image src={persoMain} layout="fill" objectFit="contain" alt="Character"/>
                        </div>
                    </div>
                </section>

                {/* Footer / CTA Section */}
                <section className="py-16 bg-purple-100">
                    <div className="max-w-5xl mx-auto px-4">
                        {/* Top two-column layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                             style={{minHeight: '360px'}}>
                            {/* Left: character image and wording side by side */}
                            <div className="relative h-full min-h-[360px] flex items-end justify-between gap-4">
                                <div className="relative h-[85%] w-[48%]">
                                    <Image
                                        src={persoPortrait}
                                        layout="fill"
                                        objectFit="contain"
                                        alt="Contact us"
                                        className="object-contain object-left"
                                        objectPosition="left bottom"
                                    />
                                </div>
                                <div className="pb-4 ml-auto max-w-[46%] pr-2">
                                    <div className="text-white text-3xl font-extrabold leading-tight">Paiement<br/>Sécurisé
                                    </div>
                                    <div
                                        className="mt-3 text-[#F4BF3C] text-5xl md:text-6xl font-black leading-none">Livraison<br/>Possible
                                    </div>
                                    <div
                                        className="mt-4 text-white text-3xl tracking-wide leading-tight uppercase">Remise
                                        en<br/>main propre
                                    </div>
                                </div>
                            </div>

                            {/* Right: payment + shipping wording blocks */}
                            <div
                                className="relative z-10 justify-self-end lg:ml-auto lg:pl-0 lg:pr-[10%] max-w-[520px]">
                                <p className="text-2xl font-semibold text-gray-900">Carte bancaire<br/>via Stripes</p>
                                <div className="mt-8">
                                    <p className="text-2xl font-extrabold text-[#6e688c] leading-none">Frais de
                                        port<br/>non inclus</p>
                                    <p className="text-sm text-[#6e688c] mt-1">Calculé sur stripes selon destination</p>
                                </div>
                                <p className="mt-8 text-lg text-gray-900">Lors de la release party<br/>ou sur
                                    Montpellier</p>
                            </div>
                        </div>

                        {/* Bottom CTA bar spanning full width */}
                        <div
                            className="mt-8 bg-gray-200 rounded-xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-xl text-[#6e688c] font-medium text-center md:text-left">Si tu as la
                                moindre question, viens me parler sur Insta!</p>
                            <a
                                id="instagram"
                                href="https://instagram.com/LaGoutanerie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F58529] text-white font-semibold shadow-md"
                            >
                                @LaGoutanerie
                            </a>
                        </div>
                    </div>
                </section>

                {/* First Drop Promo Section */}
                <section className="py-4 md:py-6 bg-[#5a5658]">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Left: product visual */}
                            <div className="relative w-full h-[500px] drop-shadow-xl">
                                <Image
                                    src={premierDrop}
                                    layout="fill"
                                    objectFit="contain"
                                    alt="Ma première BD – visuel"
                                    className="scale-125 origin-center"
                                />
                            </div>

                            {/* Right: wording + CTA */}
                            <div className="text-white">
                                <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">Ma première BD –<br/>Disponible
                                    !</h3>
                                <p className="mt-4 text-sm md:text-base text-gray-300 max-w-prose">
                                    Offrez-vous ma première bande dessinée, déjà publiée. Une création indépendante
                                    mêlant histoire originale et dessins soignés, pour tous les amateurs de BD uniques.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="https://buy.stripe.com/00w9AU8wYaZD1rO1TAcZa05"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold bg-[#F58529] text-white shadow-[0_6px_0_0_rgba(0,0,0,0.25)] active:translate-y-[2px] active:shadow-[0_4px_0_0_rgba(0,0,0,0.25)]"
                                    >
                                        COMMANDEZ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-[#FFF3D6]">
                    <div
                        className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                        <div>
                            <p className="font-medium text-gray-600">Plan de site</p>
                            <ul className="mt-2 space-y-1 text-gray-500">
                                <li><Link href="/#home"><a className="hover:underline">Home</a></Link></li>
                                <li><Link href="/#instagram"><a className="hover:underline">Contact</a></Link></li>
                                <li><Link href="/#packs"><a className="hover:underline">Shop</a></Link></li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-600">Mentions légales</p>
                            <ul className="mt-2 space-y-1 text-gray-500">
                                <li><Link href="/cgv#mentions-legales"><a className="hover:underline">Mentions
                                    légales</a></Link></li>
                                <li><Link href="/cgv#cgv"><a className="hover:underline">CGV</a></Link></li>
                                <li><Link href="/cgv#politique-de-confidentialite"><a className="hover:underline">Politique
                                    de confidentialité</a></Link></li>
                                <li><Link href="/cgv#cookies"><a className="hover:underline">Gestion de
                                    cookies</a></Link></li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-600">Contact</p>
                            <ul className="mt-2 space-y-1 text-gray-500">
                                <li>
                                    <a href="https://instagram.com/LaGoutanerie" target="_blank"
                                       rel="noopener noreferrer" className="hover:underline">@ LaGoutanerie</a>
                                </li>
                                <li>
                                    <a href="mailto:lagoutanerie@gmail.com"
                                       className="hover:underline">lagoutanerie@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="justify-self-end">
                            <Link href="/">
                                <a>
                                    <Image src={LogoPng} width={140} height={70} alt="Espante logo"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                </footer>
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
                        <Image src={Bronchade} layout="fill" objectFit="contain" alt=""/>
                    </div>
                )}
            </main>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx global>{`
                @keyframes dropZoom {
                    0% {
                        transform: scale(0.2) translateY(-100px);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.5) translateY(20px);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1) translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default Home
