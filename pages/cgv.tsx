import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import Bronchade from '../assets/Bronchade.svg'
import { useState, useEffect } from 'react'


import LogoPng from '../assets/logo.png'



type PackCardProps = {
    slug: string
    image: any
    color: string
}


const Cgv: NextPage = () => {
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
                            <Link href="/#home" className="hover:underline">Home</Link>
                            <Link href="/#instagram" className="hover:underline">Contact</Link>
                            <Link href="/#packs" className="hover:underline">Shop</Link>
                        </nav>
                    </div>
                </header>


                {/* Mentions légales */}
                <section id="mentions-legales" className="max-w-5xl mx-auto px-4 py-8">
                  <h1 className="text-2xl font-bold">Mentions légales</h1>
                  <div className="mt-4 space-y-4 text-gray-700">
                    <p>Le site <strong>www.espanté.fr</strong> est édité par <strong>Kevyn Goutanier</strong>, artiste indépendant, auteur de la bande dessinée « Espanté », une œuvre auto‑éditée, imprimée en France, disponible exclusivement en précommande via ce site.</p>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      <div>
                        <dt className="font-medium">Nom de l’entité</dt>
                        <dd>Espanté par Kevyn Goutanier</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Statut</dt>
                        <dd>Artiste indépendant (auto‑entrepreneur)</dd>
                      </div>
                      <div>
                        <dt className="font-medium">SIREN</dt>
                        <dd>803&nbsp;356&nbsp;997</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Représentant légal</dt>
                        <dd>Kevyn Goutanier</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="font-medium">Contact</dt>
                        <dd className="space-x-2">
                          <a href="mailto:lagoutanerie@gmail.com" className="underline underline-offset-4 hover:no-underline">lagoutanerie@gmail.com</a>
                          <span>•</span>
                          <a href="https://www.instagram.com/lagoutanerie" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">Instagram @Lagoutanerie</a>
                        </dd>
                      </div>
                    </dl>
                    <div>
                      <h2 className="text-lg font-semibold mt-6">Hébergeur du site</h2>
                      <address className="not-italic mt-2">
                        <div><strong>GANDI SAS</strong></div>
                        <div>63–65 Boulevard Masséna, 75013 Paris, France</div>
                        <div>Site web : <a href="https://www.gandi.net/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">www.gandi.net</a></div>
                      </address>
                    </div>
                  </div>
                </section>

                {/* CGV */}
                <section id="cgv" className="max-w-5xl mx-auto px-4 py-8">
                  <h2 className="text-2xl font-bold">Conditions Générales de Vente (CGV)</h2>
                  <p className="mt-2 text-sm text-gray-500">Dernière mise à jour : août 2025</p>
                  <div className="mt-4 space-y-6 text-gray-700">
                    <p>Les présentes conditions régissent les relations contractuelles entre Kevyn Goutanier (SIREN 803&nbsp;356&nbsp;997) et toute personne souhaitant effectuer une précommande sur <strong>www.espanté.fr</strong>.</p>

                    <div>
                      <h3 className="font-semibold">1. Objet</h3>
                      <p>Le site propose la précommande de l’œuvre « Espanté » via différents packs. Les ventes sont ouvertes exclusivement en ligne et dans la limite des stocks disponibles.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold">2. Produits proposés</h3>
                      <p>Les produits sont proposés sous forme de packs (description, contenu et prix affichés sur le site). Les visuels et descriptions sont fournis à titre indicatif et peuvent évoluer lors de la production finale.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold">3. Commande</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>La commande s’effectue via le site.</li>
                        <li>En validant la commande, l’acheteur accepte pleinement les présentes CGV.</li>
                        <li>Un e‑mail de confirmation est envoyé après validation du paiement.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">4. Prix et paiement</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Les prix sont indiqués en euros TTC.</li>
                        <li>Paiement en ligne sécurisé via Stripe (carte bancaire).</li>
                        <li>Aucune commande n’est expédiée sans validation complète du paiement.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">5. Précommande et livraison</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Produits vendus en précommande, livraison estimée à l’automne 2025 (sous réserve de production).</li>
                        <li>Information par e‑mail sur l’avancement et l’expédition.</li>
                        <li>Frais de port : indiqués lors de la commande (inclus ou en supplément selon le pack).</li>
                        <li>Zone de livraison : France métropolitaine (autres zones si précisées sur le site).</li>
                        <li>En cas de retard ou force majeure, l’auteur peut modifier les délais d’envoi.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">6. Droit de rétractation</h3>
                      <p>Conformément à l’article L221‑28 du Code de la consommation, les précommandes de biens personnalisés ou produits à la demande (ex. exemplaires signés/limités) ne donnent pas lieu à un droit de rétractation après paiement. Toute demande d’annulation sera examinée au cas par cas avant impression. Après lancement de production, aucun remboursement n’est dû, sauf indisponibilité du produit.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold">7. Responsabilité</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Retard de livraison lié au transporteur (La Poste ou autre).</li>
                        <li>Perte, vol ou détérioration après expédition.</li>
                        <li>Dysfonctionnement temporaire du site ou du paiement.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">8. Données personnelles</h3>
                      <p>Les données collectées sont utilisées pour la gestion des précommandes, la livraison et la communication liée au projet. Voir la <Link href="#politique-de-confidentialite" className="underline underline-offset-4 hover:no-underline">Politique de confidentialité</Link>.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold">9. Propriété intellectuelle</h3>
                      <p>L’œuvre « Espanté » et les éléments du site (textes, images, illustrations, logo) sont protégés par le droit d’auteur. Toute reproduction ou diffusion non autorisée est interdite.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold">10. Loi applicable et litiges</h3>
                      <p>Les CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée ; à défaut, les tribunaux français seront compétents.</p>
                    </div>
                  </div>
                </section>

                {/* Politique de confidentialité */}
                <section id="politique-de-confidentialite" className="max-w-5xl mx-auto px-4 py-8">
                  <h2 className="text-2xl font-bold">Politique de confidentialité</h2>
                  <p className="mt-2 text-sm text-gray-500">Dernière mise à jour : août 2025</p>
                  <div className="mt-4 space-y-6 text-gray-700">
                    <div>
                      <h3 className="font-semibold">1. Responsable du traitement</h3>
                      <p>Kevyn Goutanier – Artiste indépendant (SIREN 803&nbsp;356&nbsp;997). Contact : <a href="mailto:lagoutanerie@gmail.com" className="underline underline-offset-4 hover:no-underline">lagoutanerie@gmail.com</a> – Instagram : <a href="https://www.instagram.com/lagoutanerie" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">@Lagoutanerie</a>.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">2. Données personnelles collectées</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Identité (prénom, nom).</li>
                        <li>Adresse postale (livraison).</li>
                        <li>Adresse e‑mail.</li>
                        <li>Numéro de téléphone (facultatif).</li>
                        <li>Adresse IP.</li>
                        <li>Informations de commande (produit, options, montant, date).</li>
                        <li>Informations de paiement (via Stripe, de manière sécurisée) – aucune donnée bancaire n’est stockée sur ce site.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">3. Finalité de la collecte</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Gérer les précommandes et assurer la livraison.</li>
                        <li>Envoyer des e‑mails liés à la commande et à la sortie du projet.</li>
                        <li>Émettre des factures (obligations comptables).</li>
                        <li>Améliorer l’expérience utilisateur sur le site.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">4. Base légale</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Exécution du contrat (précommande).</li>
                        <li>Consentement (formulaires, bannière cookies).</li>
                        <li>Obligation légale (archivage comptable).</li>
                        <li>Intérêt légitime (suivi de trafic, lutte contre la fraude).</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">5. Partage des données</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Stripe (paiement sécurisé).</li>
                        <li>Hébergeur : GANDI SAS.</li>
                        <li>Transporteurs (La Poste ou autre).</li>
                      </ul>
                      <p className="mt-2">Aucune donnée n’est cédée ni vendue à des tiers.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">6. Durée de conservation</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Données de commande : 6 ans (obligations fiscales et comptables).</li>
                        <li>Données de contact : 3 ans après dernier contact.</li>
                        <li>Données de navigation : 13 mois (cookies analytiques).</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">7. Vos droits</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Accès, rectification, suppression (dans certains cas).</li>
                        <li>Opposition, limitation, portabilité.</li>
                      </ul>
                      <p className="mt-2">Pour exercer vos droits : <a href="mailto:lagoutanerie@gmail.com" className="underline underline-offset-4 hover:no-underline">lagoutanerie@gmail.com</a>. Vous pouvez saisir la CNIL (<a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">www.cnil.fr</a>).</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">8. Cookies</h3>
                      <p>Voir la <Link href="#cookies" className="underline underline-offset-4 hover:no-underline">Politique de gestion des cookies</Link>.</p>
                    </div>
                  </div>
                </section>

                {/* Politique de gestion des cookies */}
                <section id="cookies" className="max-w-5xl mx-auto px-4 py-8">
                  <h2 className="text-2xl font-bold">Politique de gestion des cookies</h2>
                  <p className="mt-2 text-sm text-gray-500">Dernière mise à jour : août 2025</p>
                  <div className="mt-4 space-y-6 text-gray-700">
                    <div>
                      <h3 className="font-semibold">1. Qu’est‑ce qu’un cookie ?</h3>
                      <p>Petit fichier texte déposé sur votre appareil (ordinateur, tablette, mobile) lors de la visite d’un site web. Il stocke temporairement des informations de navigation.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">2. Cookies utilisés sur ce site</h3>
                      <h4 className="mt-2 font-medium">a) Cookies strictement nécessaires (obligatoires)</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fonctionnement du site (navigation, panier, validation de commande).</li>
                        <li>Paiement sécurisé via Stripe.</li>
                        <li>Préservation de vos choix (ex. consentement cookies).</li>
                      </ul>
                      <h4 className="mt-4 font-medium">b) Cookies analytiques (avec consentement)</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Mesure d’audience (outil type Google Analytics ou équivalent, si utilisé).</li>
                        <li>Suivi anonyme du trafic pour améliorer le contenu et les performances.</li>
                      </ul>
                      <p className="mt-2">Ces cookies sont désactivés par défaut et ne sont activés qu’avec votre accord.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">3. Gestion du consentement</h3>
                      <p>Lors de la première visite, un bandeau permet d’accepter, refuser ou personnaliser les cookies non essentiels. Vous pouvez modifier vos choix à tout moment via le lien « Gestion des cookies » en pied de page.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">4. Durée de conservation</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Cookies fonctionnels : jusqu’à 12 mois.</li>
                        <li>Cookies analytiques : jusqu’à 13 mois (recommandations CNIL).</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">5. Vos droits</h3>
                      <p>Vous pouvez retirer votre consentement à tout moment et demander l’accès, la modification ou la suppression des données collectées via ces cookies. Contact : <a href="mailto:lagoutanerie@gmail.com" className="underline underline-offset-4 hover:no-underline">lagoutanerie@gmail.com</a>.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">6. Plus d’infos</h3>
                      <p>Pour en savoir plus sur vos droits : <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">www.cnil.fr</a>.</p>
                    </div>
                  </div>
                </section>



                <footer className="bg-[#FFF3D6]">
                  <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
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
                        <li><Link href="/cgv#mentions-legales"><a className="hover:underline">Mentions légales</a></Link></li>
                        <li><Link href="/cgv#cgv"><a className="hover:underline">CGV</a></Link></li>
                        <li><Link href="/cgv#politique-de-confidentialite"><a className="hover:underline">Politique de confidentialité</a></Link></li>
                        <li><Link href="/cgv#cookies"><a className="hover:underline">Gestion de cookies</a></Link></li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600">Contact</p>
                      <ul className="mt-2 space-y-1 text-gray-500">
                        <li>
                          <a href="https://instagram.com/LaGoutanerie" target="_blank" rel="noopener noreferrer" className="hover:underline">@ LaGoutanerie</a>
                        </li>
                        <li>
                          <a href="mailto:lagoutanerie@gmail.com" className="hover:underline">lagoutanerie@gmail.com</a>
                        </li>
                      </ul>
                    </div>

                    <div className="justify-self-end">
                      <Image src={LogoPng} width={140} height={70} alt="Espante logo" />
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
                        <Image src={Bronchade} layout="fill" objectFit="contain" alt="" />
                    </div>
                )}
            </main>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx global>{`
              :root { --anchor-offset: 40px; }
              html { scroll-padding-top: var(--anchor-offset); scroll-behavior: smooth; }
              [id] { scroll-margin-top: var(--anchor-offset) !important; }
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

export default Cgv
