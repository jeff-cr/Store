import { useContext } from 'react'
import { ModeContext } from '../context/mode/ModeContext'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'


import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../app/features/cart/cartSlice';
import '../styles/AdCard.css'

export const AdCard = ({ product }) => {
    const dispatch = useDispatch();
    const { style } = useContext(ModeContext)
    const navigate = useNavigate()

    const handleDetail = (id)=>{
        navigate(`product/${id}`)
    }

    const addToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <>
            <Card className='box-card' sx={{ maxWidth: 345 }}>
                <div className='box-img'>
              
                <img className='card-img' src={product.image} alt="" />
                </div>
                <CardContent className='card-content'>
                    <Typography gutterBottom variant="h5" component="div">
                        ${product.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.title}
                    </Typography>
                </CardContent>
                <CardActions className='card-actions'>
                    <Button onClick={addToCart} size="small">Agregar</Button>
                    <Button onClick={() =>handleDetail(product.id)} size="small">Ver</Button>
                </CardActions>
            </Card>

        </>
    )
}
