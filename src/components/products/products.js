'use client'
import { useEffect, useState } from "react"
import Product from "./product"

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        
        fetch('/api/products').then(res => res.json()).then( (data) => setProducts(data));

    }, [setProducts])

    return (
        
        <div>
            {products.map( (product) => <Product key={product.id} data={product}></Product>)} 
        </div>
    )

}

export default Products