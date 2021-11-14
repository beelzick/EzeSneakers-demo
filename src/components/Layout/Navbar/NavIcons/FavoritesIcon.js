import DisabledHeart from '../DisabledHeart/DisabledHeart';
import FavoritesBtn from './FavoritesBtn';

export default function FavoritesIcon({ status, favQty }) {
    return (
        <>
            {status === 'authenticated' ? (
                <FavoritesBtn favQty={favQty} />
            ) : (
                <DisabledHeart  />
            )}
        </>
    )
}