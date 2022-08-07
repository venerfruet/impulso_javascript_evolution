import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core/';
import Cart from './Cart';
import TituloLogo from '../components/TituloLogo';
import GridHeader from '../components/GridHeader';

const Header = () => {
    return (
        <GridHeader>
            <TituloLogo />
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />
        </GridHeader>
    )
}

export default Header;
