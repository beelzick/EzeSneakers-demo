import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CardActions, Button, CardMedia, Card, IconButton, FormControlLabel, Checkbox } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NextLink from 'next/link'


const useStyles = makeStyles({
    root: {
        width: 370,
    },
    cardImg: {
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    cardActions: {
        justifyContent: 'flex-end'
    }
});

export default function ProductCard({ imgUrl, id, name }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <NextLink href={`/sneakers/${id}`} passHref>
                <CardActionArea>
                    <CardMedia
                        className={classes.cardImg}
                        component='img'
                        alt={name}
                        image='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_450/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg'
                        title={name}
                    />
                </CardActionArea>
            </NextLink>
            <CardActions className={classes.cardActions}>
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon style={{ color: 'ef476f' }} />} name="checkedH" />}
                />
            </CardActions>
        </Card>
    );
}