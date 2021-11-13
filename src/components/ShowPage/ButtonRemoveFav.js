import Button from '@mui/material/Button'
import { useState } from 'react'
import { IoMdHeartDislike } from '@react-icons/all-files/io/IoMdHeartDislike'
import { IoMdHeart } from '@react-icons/all-files/io/IoMdHeart'

export default function ButtonRemoveFav({ onClick }) {
    const [heartDislike, setHeartDislike] = useState(false)

    const handleMouseEnter = () => {
        setHeartDislike(true)
    }

    const handleMouseLeave = () => {
        setHeartDislike(false)
    }


    return (
        <Button
            type='button'
            variant='outlined'
            size='large'
            color='primary'
            endIcon={
                heartDislike ? <IoMdHeartDislike /> : <IoMdHeart style={{ color: 'ef476f' }} />
            }
            className='w-100'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            Remove from favorites
        </Button>
    )
}