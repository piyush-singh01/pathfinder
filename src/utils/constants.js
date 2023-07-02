import { v4 as uuidv4 } from 'uuid';

export const GRID_ROWS = 26;
export const GRID_COLS = 63;

// Selected Option
export const ALGO_SELECT = {
    DEFAULT: 0,
    A_STAR : 0,
    DIJKSTRA : 1,
    BFS : 2,
    DFS : 3,
    GREEDY_BEST_FIRST: 4
}

export const ADD_EDIT_SELECT = {
    OBSTACLE: 0,
    SOURCE: 1,
    DESTINATION: 2,
    WEIGHTED_CELL: 3,
    CHECKPOINT: 4,
    DEFAULT: 1
}


export const SPEED_SELECT = {
    SLOW: 1,
    NORMAL: 2,
    FAST: 3,
    DEFAULT: 2
}

// Cell State and Color
export const GRID_VALUE = {
    BLANK: 0,
    OBSTACLE: -1,
    
    // actual cell value will be the weight of the cell.
    SOURCE: -100,
    DESTINATION: -101,
    ENQUEUED: -102,
    VISITED: -103,
    SHORTEST: -104
}

export const CELL_STATE = {
    BLANK:0,
    SOURCE: 1,
    OBSTACLE: 2,
    DESTINATION: 3,
    CHECKPOINT: 4,
    ENQUEUED: 5,
    VISITED: 6,
    SHORTEST: 7
}

export const CELL_COLORS = {
    BLANK: "white",
    SOURCE: "#1231e1",
    OBSTACLE: "#023047",
    DESTINATION: "#F86F03",
    CHECKPOINT: "#ff1212",
    WEIGHTED_CELL: {
        WEIGHT_1: "#cad2c5",
        WEIGHT_2: "#84a98c",
        WEIGHT_3: "#52796f",
        WEIGHT_4: "#354f52",
        WEIGHT_5: "#2f3e46",
    },
    ENQUEUED: "#17594A",
    VISITED:"#B31312",
    SHORTEST: "#11009E",
}

export const DELAY = {
    SLOW: 500,
    NORMAL: 250,
    FAST: 50
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

export const BUTTON_COLOR = "#64CCC5";