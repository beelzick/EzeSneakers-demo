import NextImage from 'next/image'
import styles from './image.module.css'

export default function CustomImage({ width, maxWidth, maxHeight, ...rest }) {
    let widths = {}
    width ? widths.width = width : '100%'
    maxWidth ? widths.maxWidth = maxWidth : '100%'
    maxHeight ? widths.maxHeight = maxHeight : null
    return (
        <div className={styles.imageContainer}>
            <NextImage className={styles.image} style={widths} {...rest} />
        </div>
    )
}