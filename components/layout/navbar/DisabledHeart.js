import makeStyles from '@mui/styles/makeStyles';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles({
    button: {
        "&:disabled": {
            color: "rgba(255,255,255,0.3)"
        }
    }
})

export default function DisabledHeart() {
    const classes = useStyles()
    return (
        <Tooltip disableFocusListener title='Log in to save favorites'>
            <span>
                <IconButton disabled className={classes.button} size="large">
                    <FavoriteIcon />
                </IconButton>
            </span>
        </Tooltip>
    );
}