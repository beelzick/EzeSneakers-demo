import CardActionArea from '@mui/material/CardActionArea';
import NextLink from 'next/link'
import Image from 'next/image'
import { createBlurDataUrl } from '../../helpers/imgHelpers';
import styles from './ProductCard.module.css'

export default function ProductCardImage({ id, name, imgUrl }) {
    return (
        <NextLink href={`/sneakers/${id}`} passHref>
            <CardActionArea sx={{ borderRadius: '10px' }}>
                <Image
                    quality={100}
                    src={imgUrl}
                    alt={name}
                    title={name}
                    width={800}
                    height={800}
                    className={styles.image}
                    placeholder='blur'
                    blurDataURL={createBlurDataUrl(imgUrl)}
                />
            </CardActionArea>
        </NextLink>
    )
}