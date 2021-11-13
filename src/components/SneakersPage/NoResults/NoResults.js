import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import SearchNoResults from './Search/Search'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import { v4 as uuidv4 } from 'uuid'
import noResultsData from '../../../helpers/noResultsData'
import ItemElement from './ItemElement'
import SadSearchIcon from './SadSearchIcon'

export default function NoResults() {
    return (
        <Grid container direction='row'>
            <Grid item xs={12} md={6}>
                <Box mt={2}>
                    <Typography variant='h4' component='h2' gutterBottom>
                        Try another search?
                    </Typography>
                    <SearchNoResults />
                </Box>
                <Box my={8}>
                    <Typography variant='h5' component='h2' mb={2}>
                        If you still can&apos;t find your Sneaker we suggest
                    </Typography>
                    <List>
                        {noResultsData.map(({ text, icon }) => (
                            <ItemElement text={text} Icon={icon} key={uuidv4()} />
                        ))}
                    </List>
                </Box>
            </Grid>
            <SadSearchIcon />
        </Grid>
    )
}