import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { iconsData } from '../../../helpers/footerHelpers'
import { v4 as uuidv4 } from 'uuid';

export default function IconsSection() {
    return (
        <Grid item xs={12} md={4} lgf={3} sx={{ marginTop: { xs: '20px', lgf: 'unset' } }}>
            <Grid container direction='row' spacing={3} sx={{ justifyContent: { xs: 'unset', md: 'center', xl: 'unset' } }}>
                {iconsData.map(icon => (
                    <Grid item key={uuidv4()}>
                        <Link
                            className='link'
                            href={icon.href ? icon.href : null}
                            underline='none'
                            sx={{ cursor: 'pointer' }}
                        >
                            <Box sx={{ display: 'flex' }} mb={2}>
                                <icon.component />
                                <Typography sx={{ display: 'inline-block' }} mt={0.15} ml={0.5} >{icon.text}</Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}