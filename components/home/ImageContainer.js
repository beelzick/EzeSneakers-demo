

export default function ImageContainer({ src }) {
    return <img src={src}
        loading='lazy'
        style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px', maxHeight: '80vh' }}
    />
}