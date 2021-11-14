import Chip from '@mui/material/Chip'
import { v4 as uuidv4 } from 'uuid'
import Grid from '@mui/material/Grid'

export default function Tags({ tags, gender }) {
    return (
        <Grid container mb={1}>
            <Chip
                color='primary'
                size='small'
                label={gender === 'man' ? 'men\'s sneakers' : 'women\'s sneakers'}
                sx={{ marginRight: '8px' }}
            />
            {tags.map(tag => (
                <Chip
                    key={uuidv4()}
                    color='primary'
                    size='small'
                    label={tag}
                    sx={{ marginRight: '8px' }}
                />
            ))}
        </Grid>
    )
}