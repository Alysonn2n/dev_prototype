import React from 'react';
import { ListItem, ListSubheader, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2),
    },
    button: {
        width: '100%',
    }
}));
const tags = [
    {id: 1, name: 'reactj'},
    {id: 2, name: 'reactjda'},
    {id: 3, name: 'reafctj'},
    {id: 4, name: 'reacsstj'},
    {id: 5, name: 'reacjsjsjstj'},
]
const Navbar = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>    
            <Button variant='outlined' color='secondary' className={classes.button}> Registrar</Button>
            <ListSubheader> TAGS EM ALTA</ListSubheader>
            {
            tags.map((item) => (
                <ListItem dense button key={`item-${item.id}-${item.name}`}>
                    <ListItemText primary={`#${item.name}`}/>
                </ListItem>
            ))
            }
            <ListItem button> 
                Exibir mais tags
            </ListItem>
        </Paper>
    );
}

export default Navbar