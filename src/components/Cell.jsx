import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CELL_STATE, CELL_COLORS } from "../utils/constants";

const Cell = ({
    ridx,
    cidx,
    gridState,
    setGridState,
}) => {

    const handleCellClick = () => {
        const newStateArray = gridState.map((row, r) => {
            const rowStateArray = row.map((cell, c) => {
                if (r === ridx && c === cidx) {
                    if (cell === CELL_STATE.BLANK) {
                        return CELL_STATE.OBSTACLE;
                    } else {
                        return CELL_STATE.BLANK;
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
        ${cellState === CELL_STATE.BLANK
            ? css`
                  background-color: ${CELL_COLORS.BLANK};
              `
            : cellState === CELL_STATE.SOURCE
            ? css`
                  background-color: ${CELL_COLORS.SOURCE};
              `
            : css`
                  background-color: ${CELL_COLORS.OBSTACLE};
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
