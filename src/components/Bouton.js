import React, { Component } from 'react';

class Bouton extends Component {
    constructor(props) {
        super(props);
        this.texteBouton = props.texteBouton;
    }

    render() {
        return (
            <button onClick={this.props.fonction}>
                {this.texteBouton}
            </button>
        );
    }
}

export default Bouton;