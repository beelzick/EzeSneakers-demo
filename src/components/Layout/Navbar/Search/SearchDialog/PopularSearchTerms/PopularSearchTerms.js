import Typography from '@mui/material/Typography';
import NextLink from 'next/link'
import { v4 as uuidv4 } from 'uuid';
import StyledLink from '../../../../../StyledComponents/StyledLink'
import PopularSearchContainer from './PopularSearchContainer';
export default function PopularSearchTerms({ onClick }) {
    return (
        <PopularSearchContainer>
            <Typography variant='h5' component='span' gutterBottom sx={{ fontWeight: 500 }} mt={2}>
                Popular search terms
            </Typography>
            {['adidas', 'puma men', 'nike air max'].map((term) => (
                <NextLink href={`/search/${term}`} passHref key={uuidv4()}>
                    <StyledLink color='primary' underline='none' variant='button' fontSize='large' onClick={onClick}>
                        {term}
                    </StyledLink>
                </NextLink>
            ))}
            <NextLink href='/sneakers/women/women-love' passHref>
                <StyledLink color='primary' underline='none' variant='button' fontSize='large' onClick={onClick}>
                    women love
                </StyledLink>
            </NextLink>
        </PopularSearchContainer>
    )
}