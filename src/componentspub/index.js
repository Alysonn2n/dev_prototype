import React from 'react'
import { CardActionArea, makeStyles } from '@material-ui/core';
import  Card  from '@material-ui/core/Card';
import  CardHeader  from '@material-ui/core/CardHeader';
import  CardContent  from '@material-ui/core/CardContent';
import  CardActions  from '@material-ui/core/CardActions';
import  Typography  from '@material-ui/core/Typography';
import  Avatar  from '@material-ui/core/Avatar';

import IconButton  from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon  from '@material-ui/icons/Message';
import Bookmark from '@material-ui/icons/Bookmark';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        display:'flex',
        alignItems:'center',
    },
    caption: {
        marginRight: theme.spacing(1),
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px'
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%'
    },
    content: {
        padding: 0,
    },
    favorite: {
        marginLeft: 'auto'
    }
}));


const PostCard = ({post}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader 
                avatar={<Avatar src= {post.author.avatar} />}
                title={<Typography variant='h6'> {post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                      <Typography variant="caption" className={classes.caption}>
                        Escrito por
                      </Typography>
                      <Typography variant="subtitle2" className={classes.caption}>
                        {post.author.name}
                      </Typography>
                      <Typography variant="caption" className={classes.caption}>
                        {post.date}
                      </Typography>
                    </div>
                }
            />
            <CardContent className={classes.content}>
                <Typography className={classes.message} 
                variant='body1'>
                    {post.hashtags}
                </Typography>
            </CardContent>
            <CardActionArea>
                <img src={post.image} className={classes.image} alt='img'/>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton aria-label='like'>
                <FavoriteIcon />
                <Typography
                style={{ cursor: 'pointer' }}
                color="textSecondary"
                variant="body2"
                >
                    {'10'}
                {post.likes}
                </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                <MessageIcon />
                <Typography
                className={classes.reactions}
                color="textSecondary"
                variant="body2"
                >
                    {'38'}
                {post.comments}
                </Typography>
                </IconButton>
                <IconButton aria-label='favorite' className={classes.favorite}>
                    <BookmarkIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
};

export default PostCard;