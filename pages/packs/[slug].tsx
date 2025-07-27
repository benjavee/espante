// pages/packs/[slug].tsx

import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { packs, Pack } from '../../model/packs'
import LogoPng from "../../assets/logo.png";

type PackPageProps = {
  pack: Pack
}

const PackPage: NextPage<PackPageProps> = ({ pack }) => (
    <>
        <Head>
            <title>{pack.title} – Espante</title>
            <meta name="description" content={`Page de détails pour ${pack.title}`} />
        </Head>
        <header className="relative overflow-visible mt-12">
            {/* Top bar background */}
            <div className="bg-black h-12 mx-[5%] rounded-t-md"></div>
            {/* Logo and nav floating above the bar */}
            <div className="absolute left-[5%] right-[10%] top-0 flex items-center justify-between" style={{ height: '96px' }}>
                <div className="relative z-10 -translate-y-4">
                    <Image src={LogoPng} width={200} height={80} alt="Espante logo" />
                </div>
                <nav className="space-x-6 text-white z-10 -translate-y-5">
                    <a href=".." className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href=".." className="hover:underline">Shop</a>
                </nav>
            </div>
        </header>
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="w-3/4 max-w-md relative pb-[75%] mb-6">
                <Image
                    src={pack.image}
                    layout="fill"
                    objectFit="contain"
                    alt={pack.title}
                />
            </div>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-md">
                Précommander
            </button>
        </main>
    </>
)

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: packs.map(p => ({ params: { slug: p.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<PackPageProps> = async ({ params }) => {
  // @ts-ignore
    const slugParam = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || ''
  const pack = packs.find(p => p.slug === slugParam)
  if (!pack) return { notFound: true }
  return { props: { pack } }
}

export default PackPage