import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CELL_STATE, CELL_COLORS, ADD_EDIT_SELECT } from "../utils/constants";

const Cell = ({
    ridx,
    cidx,
    gridState,
    setGridState,
    addEdit,
    currSource,
    currDestination,
    setCurrSource,
    setCurrDestination,
}) => {
    const handleCellClick = () => {
        if (addEdit === ADD_EDIT_SELECT.SOURCE) {
            const newStateArray = gridState.map((row, r) => {
                const rowStateArray = row.map((cell, c) => {
                    if (r === currSource[0] && c === currSource[1]) {
                        if (r === ridx && c === cidx) {
                            const newSource = [-1, -1];
                            setCurrSource(newSource);
                        }
                        return CELL_STATE.BLANK;
                    } else if (r === ridx && c === cidx) {
                        const newSource = [r, c];
                        setCurrSource(newSource);
                        return CELL_STATE.SOURCE;
                    } else {
                        return cell;
                    }
                });
                return rowStateArray;
            });
            setGridState(newStateArray);
        } else if (addEdit === ADD_EDIT_SELECT.DESTINATION) {
            const newStateArray = gridState.map((row, r) => {
                const rowStateArray = row.map((cell, c) => {
                    if (r === currDestination[0] && c === currDestination[1]) {
                        if (r === ridx && c === cidx) {
                            const newDestination = [-1, -1];
                            setCurrDestination(newDestination);
                        }
                        return CELL_STATE.BLANK;
                    } else if (r === ridx && c === cidx) {
                        const newDestination = [r, c];
                        setCurrDestination(newDestination);
                        return CELL_STATE.DESTINATION;
                    } else {
                        return cell;
                    }
                });
                return rowStateArray;
            });
            setGridState(newStateArray);
        } else if (addEdit === ADD_EDIT_SELECT.OBSTACLE) {
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
        } else if (
            addEdit === ADD_EDIT_SELECT.CHECKPOINT ||
            addEdit === ADD_EDIT_SELECT.WEIGHTED_CELL
        ) {
            const newStateArray = gridState.map((row, r) => {
                const rowStateArray = row.map((cell, c) => {
                    if (r === ridx && c === cidx) {
                        if (addEdit === ADD_EDIT_SELECT.CHECKPOINT) {
                            if (cell === CELL_STATE.CHECKPOINT) {
                                return CELL_STATE.BLANK;
                            } else {
                                return CELL_STATE.CHECKPOINT;
                            }
                        } else if (addEdit === ADD_EDIT_SELECT.WEIGHTED_CELL) {
                            if (cell === CELL_STATE.WEIGHTED_CELL) {
                                return CELL_STATE.BLANK;
                            } else {
                                return CELL_STATE.WEIGHTED_CELL;
                            }
                        }
                    } else {
                        return cell;
                    }
                });
                return rowStateArray;
            });
            setGridState(newStateArray);
        }
    };

    const cellStyling = (cellState) => css`
        width: 24px;
        height: 24px;
        padding: 1px;
        border: thin solid darkcyan;
        ${cellState === CELL_STATE.SOURCE
            ? css`
                  background-color: ${CELL_COLORS.SOURCE};
              `
            : cellState === CELL_STATE.OBSTACLE
            ? css`
                  background-color: ${CELL_COLORS.OBSTACLE};
              `
            : cellState === CELL_STATE.DESTINATION
            ? css`
                  background-color: ${CELL_COLORS.DESTINATION};
              `
            : cellState === CELL_STATE.WEIGHTED_CELL
            ? css`
                  background-color: ${CELL_COLORS.WEIGHTED_CELL.WEIGHT_1};
              `
            : cellState === CELL_STATE.CHECKPOINT
            ? css`
                  background-color: ${CELL_COLORS.CHECKPOINT};
              `
            : css`
                  background-color: ${CELL_COLORS.BLANK};
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
