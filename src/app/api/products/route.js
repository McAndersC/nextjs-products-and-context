import { NextResponse } from "next/server";
import { products} from '@/lib/mockdata'

export async function GET() {

    return NextResponse.json(products)

}