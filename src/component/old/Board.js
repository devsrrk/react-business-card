import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Tel from './Tel';
import Regist from './Regist';
import "../Board.css";

class Board extends Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            name: '',
            email: '',
            tel: ''
        };
        
        this.handleRegistClick.bind(this);
        this.handleKeyChange.bind(this);
        
    }

    handleKeyChange( event ) {
        console.log(event);
        // this.setState({
        //     name: event.target.name
        // });
        // console.log(this.state);
    }

    handleRegistClick( event ) {
        alert( event );
    }

    render() {
        return (
            <div className="board">
                <Name 
                    name={ this.state.name }
                    handleKeyChange={ this.handleKeyChange }
                />
				<Email />
				<Tel />
				<Regist 
                    onClick={ this.handleRegistClick }
                />
            </div>
        );
    }

}


export default Board;