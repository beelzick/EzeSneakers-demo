import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link'

const StyledLink = styled(Link)(() => ({
    '&.MuiTypography-root.MuiLink-root': {
        color: '#7e7e7e',
        width: 'fit-content'
    },
    '&.MuiTypography-root.MuiLink-root:hover': {
        color: 'black'
    }
}))

export default StyledLink