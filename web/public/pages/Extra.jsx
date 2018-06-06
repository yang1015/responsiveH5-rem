import React, {Component} from 'react';
import {hashHistory} from 'react-router';

class Extra extends React.Component {
    constructor() {
        super();
    }
    directTo3(){
        hashHistory.push("/Page3")
    }
    render(){
        return (
            <div>
            <p>extra pages
            </p>
                <button onClick = {() => this.directTo3()}>click it to directTo3</button>
        </div>
    )
    }
}

export default Extra;