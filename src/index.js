import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TimeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeStart: new Date().getTime(),
            timeEnd: null,
        }
    };

    render() {
        const timeStartMsg = "Start time: ";

        return (
            <div className="timedisplay">
                {timeStartMsg}
                {this.state.timeStart}
            </div>
            );
    }

}

class ScoreCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        }
    }

    render() {
        return (
            <div className="scorecounter">
                {this.state.score}
            </div>
            );
    }

    
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moleMath: Math.random(),
            moleValue: "",
        };
        if (this.state.moleMath > 0.5) {
            this.state.moleValue = "X";
        }
    }

    render() {

        return (
            <button className="square" onClick={() => { console.log('click'); this.setState({ moleValue: "" }); this.setState({ state: this.state }); }}>
                {this.state.moleValue}
            </button>
        );
    }
}

class Board extends React.Component {

    renderSquare() {
       let sqr = <Square />;
        return sqr;
    }

    render() {
        const status = 'Whack-uhh-Mole';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="timer">
                <TimeDisplay />
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
