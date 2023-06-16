'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const BasketItem = ({product, basketProduct}) => {

    return (
        <div>
            <Image src={'/' + product.media.url} width={100} height={100} alt={product.media.alt}></Image>
            <div>Title: {product.title}</div>
            <div>Price: {product.price}</div>
            <div>Amount: {basketProduct.amount}</div>
            <hr/>
        </div>
    )

}

const BasketProduct = ({basketProduct}) => {

    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch(`/api/product/?id=${basketProduct.id}`).then(res => res.json()).then((data) => {

            setProduct(data)

        })

    }, []);

    return (
        <div>
            {product ? <BasketItem product={product} basketProduct={basketProduct}></BasketItem> : null}
        </div>
    )

}

export default BasketProduct