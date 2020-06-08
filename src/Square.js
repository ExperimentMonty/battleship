import React from "react";

export const STATUS = {
    HIT: 'X',
    MISS: 'O',
    UNKNOWN: '',
}

export function Square(props) {
    return (
        <button className="square">
            {props.status}
        </button>
    );
}