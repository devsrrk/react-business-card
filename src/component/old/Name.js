import React, { Component } from 'react';

class Name extends Component {

    render() {
		return ( 
			<div>
				이름 : <input 
					type="text" 
					className="name" 
					name={ this.props.name }
					onChange={ (event) => {
						this.props.handleKeyChange( event );
					}} 
				/>
			</div>
		);
    }

}

export default Name;