import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite';

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
        <Tooltip disableFocusListener title='Log in to use favorites'>
            <span>
                <IconButton disabled className={classes.button}>
                    <FavoriteIcon />
                </IconButton>
            </span>
        </Tooltip>
    )
}