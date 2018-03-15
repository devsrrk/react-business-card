import React from 'react';

const buttonUi = ( props ) => {
    return (
        <button
            type={ props.type }
            id={ props.id }
            onClick={ index => props.clicked( index ) }
        >
            { props.name }
        </button>
    );
}

export default buttonUi; 