import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import SearchNoResults from './SearchNoResults'
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchSvg from '../../svg/SearchSvg'

export default function NoResults() {
    return <Grid container direction='row'>
        <Grid item xs={12} md={6}>
            <Box mt={2}>
                <Typography variant='h4' component='h2' gutterBottom>
                    Try another search?
                </Typography>
                <SearchNoResults />
            </Box>
            <Box my={8}>
                <Box mb={2}>
                    <Typography variant='h5' component='h2'>
                        If you still can't find your Sneaker we suggest
                    </Typography>
                </Box>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.849)' }}>
                                <SearchIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            Using different search term
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.849)' }}>
                                <VpnKeyIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            Trying more general keywords
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.849)' }}>
                                <ErrorOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            Checking search for any typos or spellig errors
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.849)' }}>
                                <MailOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText >
                            You can also contact us at <strong>ezesneakers@gmail.com</strong>
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Grid container alignItems='center' justifyContent='center'>
                <SearchSvg />
            </Grid>
        </Grid>
    </Grid>
}