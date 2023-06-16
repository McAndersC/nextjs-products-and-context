import { NextResponse } from "next/server";
import { products} from '@/lib/mockdata'

export async function GET(request) {

    const {searchParams } = new URL(request.url)

    let id = searchParams.get('id');

    console.log('products', products)

    let product = products.find( (product) => product.id ==  id);

    if(product === undefined) {
        return NextResponse.json({'error' : 'Product not found'})
    }
    
    return NextResponse.json(product)

}   