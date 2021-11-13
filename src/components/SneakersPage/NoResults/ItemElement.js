import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function ItemElement({ text, Icon }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.849)' }}>
                    <Icon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText>
                {text}
            </ListItemText>
        </ListItem>
    )
}