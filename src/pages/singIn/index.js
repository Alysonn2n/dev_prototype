import React, {useState} from 'react';
import {Link, makeStyles} from  '@material-ui/core'
import  Typography  from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import  Box  from '@material-ui/core/Box';
import  Avatar  from '@material-ui/core/Avatar';
import  LockOutlinedIcon  from '@material-ui/icons/LockOutlined';
import  TextField  from '@material-ui/core/TextField';
import  Button  from '@material-ui/core/Button';
import { useNavigate } from 'react-router';

import authService from '../../services/authServices'

const useStyles = makeStyles((theme) => ({
     root: {
        height: '100vh',
    },

    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },

    button: {
        marginTop: theme.spacing(1)
    },

    form: {
        margin: theme.spacing(0, 4)
    },

    link: {
        marginTop: theme.spacing(2)
    }

    /* left: {
        background: 'blue',
        flexBasis: '58%',

        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        background: 'yellow',
        flexBasis: '42%',
    },
    form: {
        display:'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center'
    } */
}));

const CopyRight = () => {
    return (
        <Typography variant='body2' align='center'>
            {'CopyRight '}
            <a color='inherit' href='https://github.com/alysonn2n'>
                Joãozito
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
};

function SingIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSingIn(){
        try {
            await authService.signIn(email, password);
            navigate('/')
        } catch (error) {
            console.log(error.response)
        }
    } 

    return (
        <Grid container className={classes.root}>
            <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                md={7}
                className={classes.image}
            >
                <Typography 
                    style={{ color: '#fff',  fontSize: 35, lineHeight: '45px' }}>
                <strong className= {classes.title}>
                    Simplificando a forma de conectar desenvolvedores de software!
                </strong>
                </Typography>
                <Typography
                variant="body2"
                style={{
                    color: 'rgb(255,255,255, 0.7)',
                    marginTop: 30,
                    fontSize: 15,
                    lineHeight: '30px',
                }}
                >
                Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
                software.
                </Typography>
            </Grid>
            <Grid item md={5}>
                <Box 
                display='flex' flexDirection='column' alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant='h5'>
                        Acesso
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(event) => (setEmail(event.target.value))}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => (setPassword(event.target.value))}
                        />
                        <Button onClick={handleSingIn}
                        className={classes.button} fullWidth
                        variant='contained'
                        color='primary'
                        >
                            Entrar
                        </Button>
                        <Grid container className={classes.link}>
                            <Grid item>
                                <Link>Esqueceu sua senha? </Link>
                            </Grid>
                            <Grid item>
                                <Link> Não tem uma conta? Registre-se</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <CopyRight/>
                </Box>
            </Grid>

        </Grid>
        /* <div className={classes.root}>
                
                <div className={classes.left}>
                    <Typography style={{ color: '#fff', fontSize: 24, lineHeight: '25px' }}>
                           <strong> Simplificando a forma de conectar desenvolvedores de software!</strong>

                    </Typography>
                    <Typography
                        variant="body2"
                        style={{
                        color: 'rgb(255,255,255, 0.7)',
                        marginTop: 30,
                        fontSize: 15,
                        lineHeight: '30px',
                        }}
                    >
                        Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
                        software.
                    </Typography>
                </div>

            <div className={classes.right}>
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input type='text'/>
                    <input type='text'/>
                </form>
            </div>

        </div> */
    )
}

export default SingIn