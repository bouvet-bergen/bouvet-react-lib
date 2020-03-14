import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Members = props => {
    const { mod, id } = props.data;
    const fileName = id + '.js';
    const filterMods = mod.filter(x => x.meta.filename === fileName);

    const memberData = filterMods
        .filter(x => x.kind === 'member')
        .map(x => ({ name: x.name, description: x.description, type: x.type.names[0], defaultvalue: x.defaultvalue }));

    return (
        <div className='constructor'>

            <h3>Members</h3>
            <TableContainer component={Paper}>
                <Table className='table' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Default</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {memberData.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.defaultvalue}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

Members.propTypes = {
    data: PropTypes.object.isRequired
};

export default Members;
