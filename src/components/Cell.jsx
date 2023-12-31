import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CELL_STATE, CELL_COLORS, ADD_EDIT_SELECT, GRID_VALUE } from "../utils/constants";

const Cell = ({
    ridx,
    cidx,


    grid,
    setGrid,
    gridState,
    setGridState,
    addEdit,
    weight,

    currSource,
    currDestination,
    setCurrSource,
    setCurrDestination,

    currCheckpoint1,
    setCurrCheckpoint1,
    currCheckpoint2,
    setCurrCheckpoint2,
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
        } else if (addEdit === ADD_EDIT_SELECT.CHECKPOINT_1) {
            const newStateArray = gridState.map((row, r) => {
                const rowStateArray = row.map((cell, c) => {
                    if (r === currCheckpoint1[0] && c === currCheckpoint1[1]) {
                        if (r === ridx && c === cidx) {
                            const newCheckpoint1 = [-1, -1];
                            setCurrCheckpoint1(newCheckpoint1);
                        }
                        return CELL_STATE.BLANK;
                    } else if (r === ridx && c === cidx) {
                        const newCheckpoint1 = [r, c];
                        setCurrCheckpoint1(newCheckpoint1);
                        return CELL_STATE.CHECKPOINT_1;
                    } else {
                        return cell;
                    }
                });
                return rowStateArray;
            });
            setGridState(newStateArray);
        } else if (addEdit === ADD_EDIT_SELECT.CHECKPOINT_2) {
            const newStateArray = gridState.map((row, r) => {
                const rowStateArray = row.map((cell, c) => {
                    if (r === currCheckpoint2[0] && c === currCheckpoint2[1]) {
                        if (r === ridx && c === cidx) {
                            const newCheckpoint2 = [-1, -1];
                            setCurrCheckpoint2(newCheckpoint2);
                        }
                        return CELL_STATE.BLANK;
                    } else if (r === ridx && c === cidx) {
                        const newCheckpoint2 = [r, c];
                        setCurrCheckpoint2(newCheckpoint2);
                        return CELL_STATE.CHECKPOINT_2;
                    } else {
                        return cell;
                    }
                });
                return rowStateArray;
            });
            setGridState(newStateArray);
        } else if (addEdit === ADD_EDIT_SELECT.WEIGHTED_CELL) {
            const newStateArray = gridState.map((row, r) => {
                const rowStateArray = row.map((cell, c) => {
                    if (r === ridx && c === cidx) {
                        if (cell === CELL_STATE.WEIGHTED_CELL) {
                            return CELL_STATE.BLANK;
                        } else {
                            return CELL_STATE.WEIGHTED_CELL;
                        }
                    } else {
                        return cell;
                    }
                });
                return rowStateArray;
            });
            setGridState(newStateArray);
        }
                    
        const newGridArray = grid.map((row, r) => {
            const rowGridArray = row.map((cell, c) => {
                if(gridState[r][c] === CELL_STATE.BLANK) {
                    return GRID_VALUE.BLANK;
                } else if(gridState[r][c] === CELL_STATE.SOURCE) {
                    return GRID_VALUE.SOURCE;
                } else if(gridState[r][c] === CELL_STATE.DESTINATION) {
                    return GRID_VALUE.DESTINATION;
                } else if(gridState[r][c] === CELL_STATE.OBSTACLE) {
                    return GRID_VALUE.OBSTACLE;
                } else if(gridState[r][c] === CELL_STATE.CHECKPOINT_1) {
                    return GRID_VALUE.CHECKPOINT_1;
                } else if(gridState[r][c] === CELL_STATE.CHECKPOINT_2) {
                    return GRID_VALUE.CHECKPOINT_2;
                } else if(gridState[r][c] === CELL_STATE.WEIGHTED_CELL) {
                    return Number(weight);
                } else {
                    return GRID_VALUE.BLANK;
                }
            })
            return rowGridArray;
        })
        setGrid(newGridArray);
    };

    const cellStyling = (cellState) => css`
        width: 20px;
        height: 20px;
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
            : cellState === CELL_STATE.CHECKPOINT_1
            ? css`
                  background-color: ${CELL_COLORS.CHECKPOINT.CHECKPOINT_1};
              `
            : cellState === CELL_STATE.CHECKPOINT_2
            ? css`
                  background-color: ${CELL_COLORS.CHECKPOINT.CHECKPOINT_2};
              `
            : css`
                  background-color: ${CELL_COLORS.BLANK};
              `}
        /* transition: background-color 0.1s; //ease-in 0.3s; */
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
