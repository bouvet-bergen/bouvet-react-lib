import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Methods = props => {
    const { mod, id } = props.data;
    const fileName = id + '.js';
    const filterMods = mod.filter(x => x.meta.filename === fileName && x.kind === 'function');

    const memberData = filterMods
        .filter(x => x.kind === 'function')
        .map(x => (
            {
                name: x.name,
                description: x.description,
                examples: x.examples ? x.examples : [],
                params: x.params ? x.params : [],
                returns: x.returns ? x.returns[0].type.names[0] : 'void'
            }));

    return (
        <div className='methods'>

            <h3>Methods</h3>
            {memberData.map(row => (
                <div key={row.name} className='methods-container'>
                    <h5>Definition: </h5>
                    <TableContainer component={Paper} className='methods-table'>
                        <Table className='table' aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Returns</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>{row.name}</b></TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.returns}</TableCell>
                                </TableRow>
                                {row.examples && row.examples.length > 0 &&
                                    <TableRow>
                                        <TableCell colSpan={3}>
                                            {row.examples.map(line => (
                                                <p key={line}>{line}</p>
                                            ))}
                                        </TableCell>
                                    </TableRow>
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>

                    {row.params && row.params.length > 0 &&
                        <div>
                            <h5> Parameters: </h5>
                            <TableContainer component={Paper} className='methods-table'>
                                <Table className='table' aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Description</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.params && row.params.map(param => (
                                            <TableRow key={param.name}>
                                                <TableCell component="th" scope="row">{param.name}</TableCell>
                                                <TableCell>{param.type.names[0]}</TableCell>
                                                <TableCell>{param.description}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    }

                </div>
            ))}
        </div >
    )
}

Methods.propTypes = {
    data: PropTypes.object.isRequired
};

export default Methods;
