import React, { Component } from 'react';
import Button from '../Button/Button';

class ReadyPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: props.players,
            round: props.round,
            ready: props.ready,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const { ready } = this.state;
        this.props.handleReady(ready);
    };

    render() {
        const { round, players } = this.state;

        return (
            <>
                {round === 2 ?
                    <h1>{`It's your turn ${players[1]}`}</h1> :
                    round === 3 ?
                        <h1>{`It's your turn ${players[2]}`}</h1> :
                        round === 4 ?
                            <h1>{`It's your turn ${players[3]}`}</h1> :
                            null
                }

                <Button
                    label="Ready"
                    buttonClass="btn btn-primary"
                    handleClick={this.handleClick}
                />
            </>
        );
    }
}

export default ReadyPage;