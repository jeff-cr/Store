
import { useParams } from "react-router-dom";
import { getProductoDetail } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Rate } from "./Rate";
import { ViewCount } from "./ViewCount";

import '../styles/Product.css'

export const Product = () => {

  const { id } = useParams()
  const [detail, setDetail] = useState(null); // Estado para guardar el detalle del producto
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const productDetail = await getProductoDetail(id);
        setDetail(productDetail); // Guardar el detalle en el estado
        setLoading(false); // Dejar de cargar cuando los datos estén disponibles
      } catch (err) {
        setError(err.message); // Manejar errores
        setLoading(false); // Dejar de cargar si hay un error
      }
    };

    fetchDetail();
  }, [id]); // Dependencia correcta: se ejecuta cada vez que cambia `id`

  if (loading) {
    return <Loading /> // Mostrar un mensaje mientras se carga
  }

  if (error) {
    return <p>Error: {error}</p>; // Mostrar un mensaje de error si ocurre uno
  }

  // Si ya se tiene el detalle
  const { category, description, price, image, rating, title } = detail || {};

  return (
    <div className="box-product">
      
      <div className="box-picture">
        <img src={image} alt="" />


      </div>
      <div className="box-info">
        <div className="box-head">
          <p className="price">${price}</p>
          <p className="category">{category}</p>
        </div>

        <div className="content">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>


        <div className="boxFoot">
          <Rate value={rating.rate} />
          <ViewCount value={rating.count} />
        </div>

      </div>
    </div>
  );
};
