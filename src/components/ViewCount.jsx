import Badge from '@mui/material/Badge';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../styles/ViewCount.css'

export const ViewCount = ({value}) => {
  return (
    <div className='boxViewCount'>
   <Badge badgeContent={value} color="primary" max={1000000}>
      <VisibilityIcon color="action" />
 
    </Badge>

    </div>
 
  )
}
