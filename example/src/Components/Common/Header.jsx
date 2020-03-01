import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBox from '@material-ui/icons/AccountBox';
import LiveHelp from '@material-ui/icons/LiveHelp';
import Forum from '@material-ui/icons/Forum';
import Button from '@material-ui/core/Button';

import logo from './../../Assets/images/logo.png'
import './common.scss';

class Header extends Component {

    render() {
        return (
            <header className='root'>
                <AppBar position="static">
                    <Toolbar>
                        <div className="logo__container">
                            <img className="logo__img clearfix" src={logo} alt="Bouvet React Lib" />
                        </div>
                        <Button className="button__toolbar">
                            <Forum fontSize="large"></Forum>
                            <Typography variant="button">Forum</Typography>
                        </Button>
                        <Button className="button__toolbar">
                            <LiveHelp fontSize="large"></LiveHelp>
                            <Typography variant="button">FAQ</Typography>
                        </Button>
                        <Button className="button__toolbar">
                            <AccountBox fontSize="large"></AccountBox>
                            <Typography variant="button">Account</Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}

export default Header;