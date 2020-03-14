import React from 'react';
import PropTypes from 'prop-types';

const Constructor = props => {
    const { mod, id } = props.data;
    const fileName = id + '.js';
    const filterMods = mod.filter(x => x.meta.filename === fileName);
    const constructorData = filterMods.filter(x => x.kind === 'class')[0];

    return (
        <div className='constructor'>
            {constructorData &&
                <div>
                    <h3>Constructor</h3>
                    <p className='description'>{id} (
                        {constructorData.meta.code.paramnames &&
                            <span>{constructorData.meta.code.paramnames.map(x => <span>{x} </span>)}</span>
                        }
                        )</p>
                </div>                
            }           
        </div>
    )
}

Constructor.propTypes = {
    data: PropTypes.object.isRequired
};

export default Constructor;
