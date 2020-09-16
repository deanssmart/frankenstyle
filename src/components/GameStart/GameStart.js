import React, { Component } from 'react';
import Button from '../Button/Button';

class GameStart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: props.word,
            image: props.image,
            round: props.round,            
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleSubmit(e) {
        e.preventDefault();     
        const { round } = this.state;
        this.props.handleStart(round);
    };

    render() {
        const { word, image } = this.state;

        return (
            <>
                <img
                    className="container" 
                    src={ image } 
                />
                <p>{ word }</p>
                <Button
                    handleClick={ this.handleSubmit }
                    buttonClass="btn btn-primary"
                    label="Start"
                />
            </>
        );
    }
}

export default GameStart;