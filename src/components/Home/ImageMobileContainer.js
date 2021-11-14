import Image from 'next/image'
import styles from './Home.module.css'

export default function ImageContainer({ src, alt }) {
    return (
        <div className={styles.imageMobileContainer}>
            <Image
                src={src}
                height={1000}
                width={667}
                layout='responsive'
                objectFit='cover'
                quality={100}
                className={styles.imageMobile}
                alt={alt}
                title={alt}
                placeholder='blur'
                blurDataURL={src.replace('h_1200', 'h_100,q_10')}
            />
        </div>
    )
}
