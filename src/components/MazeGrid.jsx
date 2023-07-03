import React from "react";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { KEYS, ROW_KEYS } from "../utils/constants";
import Cell from "./Cell";

const MazeGrid = ({
    addEdit,
    weight,

    grid,
    setGrid,
    gridState,
    setGridState,

    currSource,
    currDestination,
    setCurrSource,
    setCurrDestination,

    currCheckpoint1,
    setCurrCheckpoint1,
    currCheckpoint2,
    setCurrCheckpoint2,
}) => {
    const containerStyling = css`
        height: 89vh;
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
                    <div key={ROW_KEYS[ridx]} className="row" css={rowStyling}>
                        {row.map((cell, cidx) => (
                            <Cell
                                key={KEYS[ridx][cidx]}
                                ridx={ridx}
                                cidx={cidx}
                                gridState={gridState}
                                setGridState={setGridState}
                                addEdit={addEdit}
                                weight={weight}
                                currSource={currSource}
                                currDestination={currDestination}
                                setCurrSource={setCurrSource}
                                setCurrDestination={setCurrDestination}
                                currCheckpoint1={currCheckpoint1}
                                setCurrCheckpoint1={setCurrCheckpoint1}
                                currCheckpoint2={currCheckpoint2}
                                setCurrCheckpoint2={setCurrCheckpoint2}
                            ></Cell>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MazeGrid;
