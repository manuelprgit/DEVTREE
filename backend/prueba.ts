interface Product {
    id: number,
    description: string,
    price: number
}

type ProductPrice = Pick<Product, 'price'>

interface FullProduct extends Product {
    image: string
}

const product1: Product = {
    id: 1,
    description: "Tableta",
    price: 121
}

const productPrice: ProductPrice = {
    price: 2500
}

const product2: FullProduct = {
    id: 1,
    description: "Tableta",
    price: 121,
    image: 'imagen.jpg'
}