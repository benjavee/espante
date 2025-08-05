// data/packs.ts
import Image from 'next/image'
import starter_preview from '../assets/packs/starter/preview.svg'
import tuConnais_preview from '../assets/packs/tuConnais/preview.svg'
import unBon_preview from '../assets/packs/unBon/preview.svg'
import triple_preview from '../assets/packs/triple/preview.svg'
import starter_logo from '../assets/packs/starter/logo.png'
import tuConnais_logo from '../assets/packs/tuConnais/logo.png'
import unBon_logo from '../assets/packs/unBon/logo.png'
import triple_logo from '../assets/packs/triple/logo.png'
import casquetteThumb from '../assets/packs/items/casquette small.jpg'
import printsThumb from '../assets/packs/items/Prints small.jpg'
import stickersThumb from '../assets/packs/items/stickers small.jpg'
import tshirtThumb from '../assets/packs/items/t-shirt small.jpg'

export const STICKERS_DESC = '4 Stickers\n– design inédits, haute qualité (eggshell)'
export const PRINTS_DESC = '2 Dessins imprimés\n– design inédits, formats A5, Papiers à grain 450gr.'
export const TSHIRT_DESC = "1 T-shirt Espanté\n– Logo brodé dos, deux coloris, coupe oversize, taille au choix, 400gr."
export const CASQUETTE_DESC = "1 Casquette Espanté\n– Logo brodé, deux coloris, 6 panels, taille unique."

export type Pack = {
    id: number
    slug: string
    title: string
    price: string
    preview: any
    logo: any
    stripeUrl: { label: string; url: string }[]
    items: { label: string; image: any }[]
    color: string
}

export const packs: Pack[] = [
    {
        id: 1,
        slug: 'starter',
        title: 'Starter',
        price: '10€',
        preview: starter_preview,
        logo: starter_logo,
        items: [
            {label: STICKERS_DESC, image: stickersThumb}
        ],
        color: '#E0C165',
        stripeUrl: [
            {
                label: 'Précommander', url: 'https://buy.stripe.com/fZudRacNegjXfiE69QcZa04'
            }
        ]
    },
    {
        id: 2,
        slug: 'tuConnais',
        title: 'Tu Connais !',
        price: '20€',
        preview: tuConnais_preview,
        logo: tuConnais_logo,
        items: [
            {label: STICKERS_DESC, image: stickersThumb},
            {label: PRINTS_DESC, image: printsThumb},
        ],
        color: '#F29730',
        stripeUrl: [
            {
                label: 'Précommander', url: 'https://buy.stripe.com/dRm3cw5kM0kZb2ofKqcZa03'
            }
        ]

    },
    {
        id: 3,
        slug: 'unBon',
        title: "T'y es un Bon",
        price: '50€',
        preview: unBon_preview,
        logo: unBon_logo,
        items: [
            {label: STICKERS_DESC, image: stickersThumb},
            {label: PRINTS_DESC, image: printsThumb},
            {label: CASQUETTE_DESC, image: casquetteThumb},
            {label: TSHIRT_DESC, image: tshirtThumb},
        ],
        color: '#6E688C',
        stripeUrl:
            [
                {
                    label: 'pack tshirt', url: 'https://buy.stripe.com/9B65kE9B28Rv9Yk0PwcZa02'
                },
                {
                    label: 'pack casquette', url: 'https://buy.stripe.com/aFa4gAcNeffT0nKdCicZa01'
                }
            ]

    },
    {
        id: 4,
        slug: 'triple',
        title: 'Triple Monstre',
        price: '80€',
        preview: triple_preview,
        logo: triple_logo,
        items: [
            {label: STICKERS_DESC, image: stickersThumb},
            {label: PRINTS_DESC, image: printsThumb},
            {label: CASQUETTE_DESC, image: casquetteThumb},
            {label: TSHIRT_DESC, image: tshirtThumb},
        ],
        color: '#D64545',
        stripeUrl: [
            {
                label: 'pack tshirt', url: 'https://buy.stripe.com/bJe9AU5kM2t72vSfKqcZa00'
            }
        ]
    },
]