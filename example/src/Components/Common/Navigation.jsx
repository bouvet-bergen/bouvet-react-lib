import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import InboxIcon from '@material-ui/icons/MoveToInbox';

class Navigation extends Component {

    render() {
        return (
            <Drawer
                className='navigation'
                variant="permanent"
                classes={{
                    paper: 'drawer-paper',
                }}
            >
                <div className='toolbar' />
                <List>
                    <ListItem button key='Demo'>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary='Demo' />
                    </ListItem>
                    <Link button to="/demo">
                        <ListItem button key='Test'>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Test' />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <ListItem button key='Form'>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary='Form' />
                    </ListItem>
                </List>
            </Drawer>
        )
    }
}

export default Navigation;
