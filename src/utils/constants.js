import { v4 as uuidv4 } from 'uuid';

export const GRID_ROWS = 25;
export const GRID_COLS = 60;


export const KEYS = [];
export const ROW_KEYS = [];
for(let r = 0;r<GRID_ROWS;r++) {
    KEYS[r] = [];
    ROW_KEYS[r] = uuidv4();
    for(let c = 0;c<GRID_COLS;c++) {
        KEYS[r][c] = uuidv4();
    }
}
