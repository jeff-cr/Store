
import { useSelector, useDispatch } from 'react-redux'
import { cartItems, totalAmount, totalQuantity, removeItem, clearCart } from '../app/features/cart/cartSlice'
import Icon from '@mui/material/Icon';
import '../styles/Cart.css'
export const Cart = () => {

    const items = useSelector(cartItems)
    const dispatch = useDispatch()
    // console.log("CartItems state ",items);

    const amount = useSelector(totalAmount)
    // console.log("quantity state ",quantity);

    const quantity = useSelector(totalQuantity)

    const isEmpty = items.length === 0 ? true:false

    return (
        <div className='boxCart container'>
            {
                !isEmpty &&  <h2 className='title'>Carrito de Compras</h2>
                
                
                
            }
            {isEmpty && (
                <div className='boxEmpty'>
                <Icon className='icon'>production_quantity_limits</Icon>
                <p className='emptyCart'>Carrito vacío</p>
            </div> 
            )
            
            
            }
            <ul className='boxItems'>
                {items.map(item => (
                    <li className='boxItem card' key={item.id}>
                        <h4 className='name'>
                            Artículo: {item.title}</h4>

                        <div className='content'>
                            <p className='price'>Precio: ${item.price}</p>
                            <p className='quantity'>Cantidad: {item.quantity}</p>
                        </div>
                        <div className='footer'>


                            <p className='total'>Total: ${item.totalPrice}</p>
                            <button className='action remove' onClick={() => dispatch(removeItem(item.id))}>

                                <Icon className='icon'>remove_shopping_cart</Icon>
                            </button>
                        </div>


                    </li>
                ))}
            </ul>
            

            {
                !isEmpty && <div className='footer'>
                <h3 className='totalCart'>Total: ${amount.toFixed(2)}</h3>
                {/* <button className='action clear' onClick={() => dispatch(clearCart())}><Icon className='icon'>restart_alt</Icon></button> */}
                </div>
            }
        </div>
    )
}
