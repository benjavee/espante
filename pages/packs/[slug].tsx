// pages/packs/[slug].tsx

import {NextPage, GetStaticPaths, GetStaticProps} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import {packs, Pack} from '../../model/packs'
import {useState} from 'react'
import LogoPng from "../../assets/logo.png";

type PackPageProps = {
    pack: Pack
}

const PackPage: NextPage<PackPageProps> = ({pack}) => {
    const {slug, title, price, items, color, logo, preview, stripeUrl, detail} = pack
    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = [{label: 'preview', image: detail}, ...items]
    return (
        <>
            <Head>
                <title>{title} – Espante</title>
                <meta name="description" content={`Page de détails pour ${title}`}/>
            </Head>
            <header className="fixed top-4 left-0 w-full overflow-visible z-50">
                {/* Top bar background */}
                <div className="bg-[#6e688c] h-12 mx-[5%] rounded-t-md"></div>
                {/* Logo and nav floating above the bar */}
                <div className="absolute left-[5%] right-[10%] top-0 flex items-center justify-between"
                     style={{height: '96px'}}>
                    <Link href="/">
                        <a className="relative z-10 -translate-y-4">
                            <Image src={LogoPng} width={200} height={80} alt="Espante logo"/>
                        </a>
                    </Link>
                    <nav className="space-x-6 text-white z-10 -translate-y-5">
                        <Link href="/">
                            <a className="hover:underline">Home</a>
                        </Link>
                        <Link href="/#instagram">
                            <a className="hover:underline">Contact</a>
                        </Link>
                        <Link href="/#packs">
                            <a className="hover:underline">Shop</a>
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="pt-32 min-h-screen py-12">
                <div
                    className="relative mx-[10px] md:mx-auto max-w-5xl p-18 rounded-lg shadow-lg"
                    style={{backgroundColor: color}}
                >
                    <button
                        className="absolute -top-4 left-4 bg-gray-800 text-white uppercase px-4 py-2 rounded-full shadow-md">
                        {title}
                    </button>
                    <div className="pt-8"></div>
                    <div className="lg:grid lg:grid-cols-10 lg:gap-8">
                        {/* Preview + price */}
                        <div className="col-span-7 relative bg-white rounded-lg overflow-hidden p-3">
                            <div className="relative w-full h-[450px] bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src={slides[currentIndex].image}
                                    layout="fill"
                                    objectFit="contain"
                                    alt={`${title} detail ${currentIndex + 1}`}
                                />
                                {/* Thumbnails on right */}
                                <div className="absolute top-0 right-0 h-full flex flex-col p-2 space-y-2 bg-white/50">
                                    {slides.map((slide, idx) => (
                                        <button
                                            key={slide.label}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                                                idx === currentIndex ? 'border-white' : 'border-gray-300'
                                            }`}
                                        >
                                            <Image
                                                src={slide.image}
                                                layout="fill"
                                                objectFit="cover"
                                                alt={slide.label}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Insert new price badge here */}
                        {/* Price badge overlapping bottom-left of colored block */}
                        <button
                            className="absolute bottom-[-30px] left-5 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md"
                            onClick={() => {
                            }}
                        >
                            {price}
                        </button>

                        {/* Details list and call to action */}
                        <aside className="col-span-3 text-white p-4">
                            <ul className="list-disc p-4 space-y-2 mb-6 text-lg">
                                <li>
                                    Fanzine 48 pages<br/>Impressions couleurs offset 90gr.
                                </li>
                                <li>
                                    Couverture rigide<br/>Dos carré collé, demi mat 250gr.
                                </li>

                                {items.map((item, i) => (
                                    <li key={i} className="text-lg">
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                            <div className="absolute bottom-[-30px] right-5 flex space-x-4">
                                {stripeUrl.map((button) => (
                                    <a
                                        key={button.url}
                                        href={button.url}
                                        className="bg-gray-800 text-white uppercase px-6 py-3 rounded-full shadow-md"
                                    >
                                        {button.label}
                                    </a>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
                <div className="relative mx-[10px] md:mx-auto max-w-5xl px-8 py-6 md:py-0 mt-24 rounded-lg shadow-lg"
                     style={{backgroundColor: color}}>
                    <button
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white uppercase px-6 py-2 whitespace-nowrap rounded-full shadow-md">
                        Les autres packs
                    </button>
                    <div className="mt-8 flex justify-around items-center">
                        {packs.filter((p) => p.slug !== slug).map((otherPack) => (
                            <Link key={otherPack.slug} href={`/packs/${otherPack.slug}`}>
                                <a className="block px-1">
                                    <Image
                                        src={otherPack.logo}
                                        alt={`${otherPack.title} logo`}
                                    />
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="py-8 flex justify-center">
                    <Image src={LogoPng} width={120} height={60} alt="Espante logo"/>
                </div>
            </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: packs.map(p => ({params: {slug: p.slug}})),
    fallback: false,
})

export const getStaticProps: GetStaticProps<PackPageProps> = async ({params}) => {
    // @ts-ignore
    const slugParam = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || ''
    const pack = packs.find(p => p.slug === slugParam)
    if (!pack) return {notFound: true}
    return {props: {pack}}
}

export default PackPage