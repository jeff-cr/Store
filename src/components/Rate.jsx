
import Rating from '@mui/material/Rating';


export const Rate = ({value}) => {
   const rate = Number(value)
  return (
    <Rating name="read-only" value={rate} readOnly />
  )
}
