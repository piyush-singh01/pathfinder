import { v4 as uuidv4 } from 'uuid';

export const GRID_ROWS = 26;
export const GRID_COLS = 63;

export const CELL_SELECT_MODE = {
    DEFAULT:1,
    OBSTACLE:1,
    SOURCE:2,
    DESTINATION:3,
    WEIGHTED_CELL:4,
    CHECKPOINT:5
}

export const SELECT_STATE = {
    BLANK:0,
    SOURCE_SELECT:1,
    OBSTACLE_SELECT:2,
    DESTINATION_SELECT:3
}

export const KEYS = [];
export const ROW_KEYS = [];
for(let r = 0;r<GRID_ROWS;r++) {
    KEYS[r] = [];
    ROW_KEYS[r] = uuidv4();
    for(let c = 0;c<GRID_COLS;c++) {
        KEYS[r][c] = uuidv4();
    }
}
