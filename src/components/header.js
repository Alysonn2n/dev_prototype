import React from 'react'
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { Bell } from 'react-feather';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    AppBar: {
        boxShadow:'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: '1',
    },
    button: {
        marginRight: 10,
    },
    userSect: {
        display:'flex',
        alignItems: 'center',

    },
    bell: {
        marginRight: 10,
    }

});
const Header = () => {
    const classes = useStyles();
    return(
        <AppBar position='fixed' color='inherit' className={classes.AppBar}>
                <Toolbar>
                    <img src='/images/logo.png' alt='logo' className={classes.img}/>
                    <div className={classes.grow}></div>
                    <div className={classes.userSect}>
                        <Button variant='contained' color='primary' className={classes.button}>
                            Novo Post
                        </Button>
                        <SvgIcon className= {classes.bell}>
                            <Bell></Bell>
                        </SvgIcon>
                        <Avatar alt='Remy Sharp' src='/'></Avatar>
                    </div>
                    {/* <div>
                        <a href='/'>Conecta-débirus</a>

                    </div>

                    <div className='avatar'>
                        <input></input>
                        <Button variant='contained' color='primary'>Default</Button>
                        <span>img1</span>
                        <span>img2</span>
                    </div> */}
                </Toolbar>

            </AppBar>
    )
};

export default Header;