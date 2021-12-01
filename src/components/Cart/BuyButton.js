import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { demoDialogOpen } from '../../redux/slices/demoDialogSlice'

export default function BuyButton({ subtotal }) {
    const dispatch = useDispatch()
    return (
        <Box mt={2.5}>
            <Button
                fullWidth
                type='button'
                variant='contained'
                size='large'
                color='primary'
                onClick={() => dispatch(demoDialogOpen())}
                disabled={subtotal === 0 ? true : false}
            >
                Buy
            </Button>
        </Box>
    )
}