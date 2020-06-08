import React from "react";
import {Square, STATUS} from "./Square";

const SHIPS = {
    CARRIER: 'C',
    BATTLESHIP: 'B',
    DESTROYER: 'D',
    SUBMARINE: 'S',
    PATROL_BOAT: 'P',
}

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipLocations: this.randomizeShips(),
            boardState: Array(10).fill(undefined).map(x => Array(10).fill(STATUS.UNKNOWN))
        }
    }

    randomizeShips() {
        return [
            [SHIPS.BATTLESHIP, SHIPS.BATTLESHIP, SHIPS.BATTLESHIP, SHIPS.BATTLESHIP, ...new Array(6).fill(undefined)],
            ...Array(9).map(x => Array(10).fill(undefined))
            ]
            //new Array(10).fill(undefined),
    }

    renderRow(row) {
        return row.map(x => <Square status={x} />);
    }

    render() {
        const squares = this.state.boardState.map(x => {
            return (
                <div className="board-row">
                    {this.renderRow(x)}
                </div>
            );
        });

        return (
            <div>
                {squares}
            </div>
        )
    }
};