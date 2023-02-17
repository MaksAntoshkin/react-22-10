type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image: "/images/iPhone-black.webp",
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: "/images/iPhone-green.webp",
    },
    {
        id: 3,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: "/images/iPhone-yellow.webp",
    },
    {
        id: 4,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '256',
        price: 1200,
        image: "/images/iPhone-red.webp",
    },
    {
        id: 5,
        title: 'iPhone 14 Pro Max',
        description: 'This is iPhone 14 Pro Max',
        type: 'phone',
        capacity: '1024',
        price: 2500,
        image: "/images/iPhone-purple.webp",
    },
    {
        id: 6,
        title: 'iPhone XR',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '512',
        price: 700,
        image: "/images/iPhone-white.webp",
    },
]

export default productsArray