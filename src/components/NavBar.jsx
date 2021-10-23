import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import Jeans from "../images/Jeans.png";

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    },
    tab_end: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20,
        alignItems: 'end'

    }
})

export function NavBar() {

    const classes = useStyle();

    return (
        <>
        <Box sx={{ display: 'flex', p: 1 }}>
            <AppBar position="static" className={classes.header}>
                <center>
                <Toolbar>
                        <a href="#">
                            <div className="logo">
                                <img src={Jeans} alt="logo" width="70" />
                                &nbsp;
                                &nbsp;
                            </div>
                        </a>
                    <Box sx={{ flexGrow: 1 }}>
                        <NavLink className={classes.tabs} to="/">Inicio</NavLink>
                        <NavLink className={classes.tabs} to="/productos">Productos</NavLink>
                        <NavLink className={classes.tabs} to="/ventas">Ventas</NavLink>
                        <NavLink className={classes.tabs} to="/administrador">Administrador</NavLink>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                    </Box>
                </Toolbar>
                </center>
            </AppBar>
        </Box>
        
        </>
    )
}
