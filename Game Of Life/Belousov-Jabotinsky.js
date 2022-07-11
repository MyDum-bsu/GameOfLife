var grid;
var cols;
var rows;
var resolution;

function BJ_Initialization() {
    resolution = 16;
    cols = floor(width / resolution);
    rows = floor(height / resolution);
    grid = BJ_makeGrid(cols, rows);   
    BJ_fillGrid(grid);
   //grid = [[2, 1, 2, 0, 1], [2, 1, 0, 1, 2], [0, 1, 1, 1, 2], [1, 0, 0, 2, 2], [1, 2, 0, 1, 2]];
}

function BJ_makeGrid(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < cols; i++) {
      arr[i] = new Array(rows)
      for (let j = 0; j < rows; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
}

function BJ_fillGrid(grid) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = floor(random(0,3));
      }
    }
}

function BJ_countNeighbors(x, y) {
    let sum = 0;
    if (grid[x][y] == 2) {
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
              let col = (x + i + cols) % cols;
              let row = (y + j + rows) % rows;
              if (grid[col][row] == 0) {
                sum += 1;
            }
        }
        
        }
    } else {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
          if (grid[col][row] == grid[x][y] + 1) {
            sum += 1;
        }
      }
    }
}
    return sum;
}

function BJ_drawCell(i, j) {
    let x = i * resolution;
    let y = j * resolution;
    if (grid[i][j] == 0) {
        fill('red');
    noStroke();
    rect(x, y, resolution - 1, resolution - 1 );
    } else if (grid[i][j] == 1) {
        fill('green');
    noStroke();
    rect(x, y, resolution - 1, resolution - 1 );
    } else if (grid[i][j] == 2) {
        fill('blue');
    noStroke();
    rect(x, y, resolution - 1, resolution - 1 );
    }
    
}
  
function BJ_drawGrid(grid) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
          BJ_drawCell(i, j);
        
        
      }
    } 
}

function BJ_cellEvolve(next, i, j) {
    let state = grid[i][j];
    let neighbors = BJ_countNeighbors(i,j);
    if (neighbors >= 3) {
        if (state = 1) {
            next[i][j] = 2;
        }
        else if (state = 0) {
            next[i][j] = 1;
        }
        else if (state = 2) {
            next[i][j] = 0;
    } else {
        next[i][j] = state;
    } 
}

}
function BJ_nextGeneration() {
    let next = BJ_makeGrid(cols, rows);  
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        BJ_cellEvolve(next, i, j);
      }
    }
    return next;
}

function BJReaction() {
    //background(30, 30, 30);
    BJ_drawGrid(grid);
    grid = BJ_nextGeneration();
}