import Grid from '@mui/material/Grid'
import CardActionArea from '@mui/material/CardActionArea'
import Image from 'next/image'
import { createBlurDataUrl } from '../../helpers/imgHelpers'
import { prepareCartProductImg } from '../../helpers/cartProductHelpers'
import NextLink from 'next/link'
import styles from './CartProduct.module.css'

export default function CartImage({ imgUrl, productId, name }) {
    return (
        <Grid item xs={12} md={7} lg={6}>
            <NextLink href={`/sneakers/${productId}`} passHref>
                <CardActionArea sx={{ borderRadius: '10px', width: 'fit-content' }}>
                    <Image
                        src={prepareCartProductImg(imgUrl)}
                        width={600}
                        height={600}
                        className={styles.image}
                        alt={name}
                        title={name}
                        placeholder='blur'
                        blurDataURL={createBlurDataUrl(imgUrl)}
                    />
                </CardActionArea>
            </NextLink>
        </Grid>
    )
}