import React, { Component } from 'react';

class Regist extends Component {

    render() {
        return (
            <div>
                <button 
                    className="regist"
                    onClick={ (event) => {
                        alert(event);
                    } }
                >
                    명함등록
                </button>
            </div>
        );
    }

}

export default Regist;