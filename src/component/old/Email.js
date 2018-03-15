import React, { Component } from 'react';

class Email extends Component {

    render() {
		return ( 
			<div>
				이메일 : <input 
					type="text" 
					className="email" 
                    
				/>
			</div>
		);
    }

}

export default Email;