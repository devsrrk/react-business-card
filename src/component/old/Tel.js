import React, { Component } from 'react';

class Tel extends Component {

    render() {
		return ( 
			<div>
				연락처 : <input 
					type="text" 
					className="tel" 
				/>
			</div>
		);
    }

}

export default Tel;