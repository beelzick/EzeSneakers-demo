import { Paper, Box, Typography, Breadcrumbs, FormControl, InputLabel, MenuItem, Select, } from '@material-ui/core'
import Img from 'next/image'
import { useState } from 'react'
import styles from './cartProduct.module.css'

const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function CartProduct({ imgUrl, name, price, sex, tag, sizes }) {
    const [sneakerSize, setSneakerSize] = useState('')
    const [qty, setQty] = useState('')
    const handleSizeChange = (event) => {
        setSneakerSize(event.target.value)
    }
    const handleQtyChange = (event) => {
        setQty(event.target.value)
    }

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 200,
                width: 80,
            },
        },
    };
    return (
        <>
            <Box className={styles.paper}>
                <Box p={1} className={styles.imgContainer}>
                    <Img
                        src={'https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_200/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg'}
                        width='200'
                        height='200'
                    />
                </Box>
                <Box p={1}>
                    <Typography variant='h6' component='h2'>
                        {name}
                    </Typography>
                    <Breadcrumbs aria-label='breadcrumb'>
                        <Typography color='textPrimary' className={styles.breadcrumbs}>{sex}</Typography>
                        {tag && <Typography color='textPrimary' className={styles.breadcrumbs}>{tag}</Typography>}
                    </Breadcrumbs>
                    <Typography variant='h6' component='h2' gutterBottom>
                        {price} $
                    </Typography>
                    <FormControl className={styles.formControl}>
                        <InputLabel id='size-selec-labelt'>Size</InputLabel>
                        <Select
                            labelId='size-select-label'
                            id='size-select'
                            value={sneakerSize}
                            onChange={handleSizeChange}
                            autoWidth
                            MenuProps={MenuProps}
                        >
                            {sizes.map(size => size.qty && <MenuItem key={size._id} value={size.size}>{size.size}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl className={styles.formControlQty}>
                        <InputLabel id='size-selec-labelt'>Quantity</InputLabel>
                        <Select
                            labelId='size-select-label'
                            id='size-select'
                            value={qty}
                            onChange={handleQtyChange}
                            autoWidth
                            MenuProps={MenuProps}
                        >
                            {quantities.map(qty => <MenuItem key={qty} value={qty}>{qty}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </>
    )
}