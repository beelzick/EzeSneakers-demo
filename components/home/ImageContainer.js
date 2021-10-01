import Image from 'next/image'
import styles from './home.module.css'

export default function ImageContainer({ src }) {
    return <div className={styles['image-container']}>
        <Image
            src={src}
            height={1000}
            width={1500}
            layout='responsive'
            objectFit='cover'
            quality={100}
            className={styles.image}
        />
    </div>

}
