import { useContext, useState, useEffect } from "react"
import { ModeContext } from "../context/mode/ModeContext"
import { AdCard } from "../components/AdCard"
import { fetchProducts } from "../services/ProductService.js"
import { Loading } from '../components/Loading.jsx'

import { env } from "../helpers/constants.js"
import { cartItems, totalAmount, totalQuantity } from "../app/features/cart/cartSlice.js"
import { useSelector } from "react-redux"
console.log("env ", env);

import '../styles/Home.css'
export const Home = () => {

  const { style } = useContext(ModeContext)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const items = useSelector(cartItems)
  // console.log("CartItems state ",items);
 
  const quantity = useSelector(totalAmount)
  // console.log("quantity state ",quantity);

  const amount = useSelector(totalQuantity)
  // console.log("amount state ",amount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();


        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  
  // if (loading) return <Loading/>;
  if (error) return <p>Error: {error}</p>;




  return (
    <div>
      {
        loading ? (
          <Loading />
        ) : (
          <div className={`boxGallery ${style.gallery.boxGalleryMode}   `}>

            {
              products.map((product, i) => (
                <AdCard key={i} product={product} />
              ))
            }

          </div>
        )
      }

    </div>
  )
}
