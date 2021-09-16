import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SearchNoResults from './SearchNoResults'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BoxSvg from '../../svg/BoxSvg'

export default function NoResults() {

    return <Grid container direction='row'>
        <Grid item xs={6}>
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
                            <Avatar>
                                <SearchIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            Using different search term
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <VpnKeyIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            Trying more general keywords
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ErrorOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            Checking search for any typos or spellig errors
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
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
        <Grid item xs={6}>
            <Grid container alignItems='center' justifyContent='center'>
                <BoxSvg />
            </Grid>
        </Grid>
    </Grid>
}