import makeStyles from '@mui/styles/makeStyles';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles({
    button: {
        '&:disabled': {
            color: 'rgba(0,0,0,0.4)'
        }
    }
})



export default function DisabledHeartMobile() {
    const classes = useStyles()
    return (
        <Tooltip disableFocusListener title='Log in to save favorites'>
            <MenuItem>
                <span>
                    <IconButton disabled className={classes.button} size='large' aria-label='Log in to save favorites' aria-disabled='true'>
                        <FavoriteIcon />
                    </IconButton>
                </span>

                <p style={{color: 'rgba(0,0,0,0.5)'}}>Favorites</p>
            </MenuItem>
        </Tooltip>
    );
}