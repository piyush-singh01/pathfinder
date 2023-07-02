import React from "react";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
    GRID_ROWS,
    GRID_COLS,
    KEYS,
    ROW_KEYS,
    SELECT_STATE,
    CELL_SELECT_MODE,
} from "../utils/constants";
import Cell from "./Cell";

const MazeGrid = () => {
    const [grid, setGrid] = useState([]);
    const [gridState, setGridState] = useState([]);
    const [cellSelectMode, setCellSelectMode] = useState(CELL_SELECT_MODE.DEFAULT);

    const [sourceSelected, setSourceSelected] = useState(false);

    useEffect(() => {
        const initialGrid = [];
        const initialState = [];
        for (let r = 0; r < GRID_ROWS; r++) {
            initialGrid[r] = [];
            initialState[r] = [];
            for (let c = 0; c < GRID_COLS; c++) {
                initialGrid[r][c] = 0;
                initialState[r][c] = SELECT_STATE.BLANK;
            }
        }
        setGrid(initialGrid);
        setGridState(initialState);
    }, []);

    const containerStyling = css`
        height: 87vh;
        width: 90vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    const gridStyling = css`
        padding: 1px;
        border: medium solid purple;
        /* border-radius: 1%; */
    `;

    const rowStyling = css`
        display: flex;
    `;

    return (
            <div className="container" css={containerStyling}>
                <div className="grid" css={gridStyling}>
                    {grid.map((row, ridx) => (
                        <div
                            key={ROW_KEYS[ridx]}
                            className="row"
                            css={rowStyling}
                        >
                            {row.map((col, cidx) => (
                                <Cell
                                    key={KEYS[ridx][cidx]}
                                    ridx={ridx}
                                    cidx={cidx}
                                    gridState={gridState}
                                    setGridState={setGridState}
                                    sourceSelected={sourceSelected}
                                    setSourceSelected={setSourceSelected}
                                ></Cell>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default MazeGrid;
