// data/packs.ts
import Image from 'next/image'
import starterImg from '../assets/packs/starter/preview.svg'
import tuConnaisImg from '../assets/packs/tuConnais/preview.svg'
import unBonImg from '../assets/packs/unBon/preview.svg'
import tripleImg from '../assets/packs/triple/preview.svg'

export type Pack = {
    id: number
    slug: string
    title: string
    price: string
    image: any
}

export const packs: Pack[] = [
    {
        id: 1,
        slug: 'starter',
        title: 'Starter',
        price: '10€',
        image: starterImg,
    },
    {
        id: 2,
        slug: 'tuConnais',
        title: 'Tu Connais !',
        price: '20€',
        image: tuConnaisImg,
    },
    {
        id: 3,
        slug: 'unBon',
        title: "T'y es un Bon",
        price: '50€',
        image: unBonImg,
    },
    {
        id: 4,
        slug: 'triple',
        title: 'Triple Monstre',
        price: '80€',
        image: tripleImg,
    },
]