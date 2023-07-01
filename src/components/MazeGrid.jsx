import React from 'react'
import { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { GRID_ROWS, GRID_COLS, KEYS, ROW_KEYS } from '../utils/constants';
import { Box } from '@mui/material';


const MazeGrid = () => {    

    const [grid, setGrid] = useState([]);
    const [isActive, setIsActive] = useState([]);

    useEffect(() => {
        const initialGrid = [];
        const initialState = [];
        for(let r = 0;r<GRID_ROWS;r++) {
            initialGrid[r] = [];
            initialState[r] = [];
            for(let c = 0;c<GRID_COLS;c++) {
                initialGrid[r][c] = 0;
                initialState[r][c] = false;
            }
        }
        setGrid(initialGrid);
        setIsActive(initialState);
    }, []);

    const containerStyling = css`
        height :90vh ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    const gridStyling = css`
        padding: 12px;
        border: medium solid purple;
        border-radius: 1%;
    `;

    const cellStyling = (isActive) => css`
        width:  25px;
        height: 25px;
        padding: 1px;
        border: thin solid darkcyan;
        ${isActive === true ? css`background-color:#023047`: css`background-color: white`}
        transition: background-color 0.1s ;//ease-in 0.3s;
    `;
    
    const rowStyling = css`
        display: flex;
    `;

    const handleCellClick = (ridx, cidx) => () => {
        const newStateArray = isActive.map((row, _ridx) => {
            const rowStateArray = row.map((currState, _cidx) => {
                if(ridx === _ridx && cidx === _cidx) {
                    return !currState;
                } else {
                    return currState;
                }
            })
            return rowStateArray;
        })
        setIsActive(newStateArray);
    }
    return (
        <Box>
        <div className='container' css={containerStyling}>
        <div className='grid' css={gridStyling}>
            {grid.map((row, ridx) => (
                <div key={ROW_KEYS[ridx]} className='row' css={rowStyling}>
                {row.map((col, cidx) => (
                    <div key={KEYS[ridx][cidx]} className='cell' css={cellStyling(isActive[ridx][cidx])} onClick={handleCellClick(ridx,cidx)}></div>
                ))}
                </div>
            ))}
            </div>
            </div>
        </Box>
    )
}


export default MazeGrid