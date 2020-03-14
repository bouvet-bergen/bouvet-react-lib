import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link} from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
                    <ListItem>
                        <ListItemText primary='Components' />
                    </ListItem>
                    {/* <ListItem className='no-top-bottom-padding'>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary='Demo' />
                    </ListItem>
                    <ListItem className='no-top-bottom-padding'>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary='Test' />
                    </ListItem> */}

                </List>
                <Divider />
                <List>
                    <ListItem key='modules__header'>
                        <ListItemText primary='Modules' />
                    </ListItem>

                    {this.props.moduleNames && this.props.moduleNames.map(mod => (
                        <ListItem className='no-top-bottom-padding' key={mod} component={Link} to={'/module/' + mod} button>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={mod} />
                        </ListItem>

                    ))}

                </List>
            </Drawer>
        )
    }
}

const mapStateToProps = state => {
    return {
        moduleNames: state.application.moduleNames
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // initApplication: () => dispatch({ type: types.application.INIT_APPLICATION, payload: null })
    };
}

Navigation.propTypes = {
    // Properties
    moduleNames: PropTypes.array

    // Functions
    // initApplication: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

