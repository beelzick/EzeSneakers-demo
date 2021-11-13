import Image from 'next/image'
import styles from './Home.module.css'

export default function ImageContainer({ src, alt }) {
    return (
        <div className={styles.imageContainer}>
            <Image
                src={src}
                height={1000}
                width={1500}
                layout='responsive'
                objectFit='cover'
                quality={100}
                className={styles.image}
                alt={alt}
                title={alt}
                placeholder='blur'
                blurDataURL={src.replace('h_1000', 'h_100,q_10')}
            />
        </div>
    )
}
