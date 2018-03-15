import React from 'react';

const inputUi = ( props ) => {
    return (
        <div>
            <label htmlFor={ props.id }>{ props.name }</label>
            <input
                type="text"
                id={ props.id }
                value={ props.value }
                onChange={ event => props.changed( event ) }
            />
        </div>
    );
}

export default inputUi;