import { Box } from '@mui/material'
import BigRamy from '../../assets/bigramy.png'
export const Home = () => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <img src={BigRamy} style={{ width: '50vh', height: '50vh' }} alt="" />
        </Box>
    )
}
