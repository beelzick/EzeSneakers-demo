import SwiperSneakers from '../Swipers/SwiperSneakers'

export default function Section4({ summerSneakers }) {
    return (
        <section>
            <SwiperSneakers sneakers={summerSneakers} title='Summer' />
        </section>
    )
}