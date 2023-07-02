import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SELECT_STATE } from "../utils/constants";

const Cell = ({
    ridx,
    cidx,
    gridState,
    setGridState,
    sourceSelected,
    setSourceSelected,
}) => {
    const handleCellClick = () => {
        const newStateArray = gridState.map((row, r) => {
            const rowStateArray = row.map((cell, c) => {
                if (r === ridx && c === cidx) {
                    if (cell === SELECT_STATE.BLANK) {
                        if (sourceSelected === false) {
                            setSourceSelected(true);
                            return SELECT_STATE.SOURCE_SELECT;
                        } else {
                            return SELECT_STATE.OBSTACLE_SELECT;
                        }
                    } else {
                        return SELECT_STATE.BLANK;
                    }
                } else {
                    return cell;
                }
            });
            return rowStateArray;
        });
        setGridState(newStateArray);
    };

    const cellStyling = (cellState) => css`
        width:  24px;
        height: 24px;
        padding: 1px;
        border: thin solid darkcyan;
        ${cellState === SELECT_STATE.BLANK
            ? css`
                  background-color: white;
              `
            : cellState === SELECT_STATE.SOURCE_SELECT
            ? css`
                  background-color: #d3ed0e;
              `
            : css`
                  background-color: #023047;
              `}
        transition: background-color 0.1s; //ease-in 0.3s;
    `;

    return (
        <div
            className="cell"
            css={cellStyling(gridState[ridx][cidx])}
            onClick={handleCellClick}
        ></div>
    );
};

export default Cell;
