import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, makeStyles, Button, Box, ListItemText, ListItemAvatar, ListItem, Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import { getCurrentUser } from '../services/AuthService';
import { Person } from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';

const useStyle = makeStyles({
    header: {
        background: '#BFCABE'
    },
    tabs: {
        color: 'white',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    },
    buttonPersonalizado: {
        marginInline: '20px',
        background: '#d785a2', 
        border: 'none',
        color: 'white'
    },
    tab_end: {
        color: 'gray',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20,
        alignItems: 'end'

    }
})

const initialValue = {
    email: ""
}

export function NavBar() {

    const [user, setUser] = useState(initialValue);
    const classes = useStyle();

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    const logout = () => {
        localStorage.clear();
        window.location = "/";
    }
    return (
        <Box sx={{ display: 'flex', p: 1 }}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>

                    <Box sx={{ flexGrow: 1 }}>
                        <NavLink className={classes.tabs} to="/">Inicio</NavLink>
                        <NavLink className={classes.tabs} to="/usuario">Usuarios</NavLink>
                        
                    </Box>
                    {!user && (
                        <>
                            <NavLink className={classes.tab_end} to="/registrarse">
                                <Button variant="contained" color="primary">
                                    registrarse
                                </Button>
                            </NavLink>
                            <NavLink className={classes.tab_end} to="/login">
                                <Button variant="contained" color="primary">
                                    Login
                                </Button>
                            </NavLink>
                        </>)}
                    {user && (
                        <>
                            <Button className={classes.tab_end} >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                            <Person />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={user.email} />
                                </ListItem>
                            </Button>
                            <Button variant="contained" className={classes.buttonPersonalizado} onClick={() => logout()}>
                                Logout
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>

    )
}
