import Image from 'next/image'
import styles from './home.module.css'

export default function ImageContainer({ src }) {
    // return <img src={src}
    //     style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px', maxHeight: '90vh' }}
    // />
    return <div className={styles['image-mobile-container']}>
        <Image
            src={src}
            height={1000}
            width={667}
            layout='responsive'
            objectFit='cover'
            quality={100}
            className={styles['image-mobile']}
        />
    </div>

}
