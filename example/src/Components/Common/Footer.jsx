import React, { Component } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Policy, Contactless } from '@material-ui/icons';

class Footer extends Component {

    render() {
        return (
            <footer className='fixed-bottom'>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Private policy" icon={<Policy />} />
                    <BottomNavigationAction label="Contact" icon={<Contactless />} />
                </BottomNavigation>
            </footer>
        )
    }
}

export default Footer;