import React from 'react';
import { makeStyles } from '@material-ui/core';

import PostCard from '../componentspub/index';
const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

const posts = [
    {id:1, 
    author: {
        id:1,
        name: 'João',
        username: 'JavoãoScript',
        avatar: '../../images/avatars/avatar_1.jpeg',
    },
    title: "Criando um app do zero",
    date:'September 1, 2020',
    description:'Salve! Qual o seu framework favorito?',
    hashtags: '#dotnet, #javascript, #reactjs, #developer',
    image: '/images/posts/post9.jpeg',
},
    {id:2, 
        author: {
            id: 1,
            name: 'João',
            username: 'JavoãoScript',
            avatar: '/images/avatars/avatar_1.jpeg',
        },
        title: "Comparativo entre React e Vue - Performance",
        date:'August 20, 2020',
        description:'Bootcamp gratuito rapeize',
        hashtags: '#frameword, #javascript, #reactjs, #vuejs',
        image: '/images/posts/post8.png',}
];
const Feed = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (<PostCard post={post} key={post.id}/>
                ))
            }
        </div>
    )
};

export default Feed;