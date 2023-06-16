import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import Product from "@/components/products/product";
import Products from "@/components/products/products";

const Page = () => {
    return (
        <div>
            <h1>Design</h1>
            <p>Her er en samling af de elementer, som er blevet designet til hjemmesiden.</p>

            <h2>Elementer</h2>

            <h3>Navigation</h3>
            <Navigation></Navigation>

            <h3>Products</h3>
            <Products></Products>
            
            <h3>Footer</h3>
            <Footer></Footer>     
                     
        </div>
    );

}

export default Page;