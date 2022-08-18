function AddCrab() {

    if (clickAvailable) {
      let x = floor(mouseX / resolution);
      let y = floor(mouseY / resolution);
      if (ValidateMousePosition(x, y) == 1) {
        grid[x][y] = 1;
        drawCell(x, y);
        grid[(x + cols)%cols][(y-3 + rows)%rows] = 1;
        drawCell((x + cols)%cols, (y-3 + rows)%rows);
        grid[(x+1 + cols)%cols][(y-3 + rows)%rows] = 1;
        drawCell((x+1 + cols)%cols, (y-3 + rows)%rows);
        grid[(x+2+ cols)%cols][(y-3 + rows)%rows] = 1;
        drawCell((x+2 + cols)%cols, (y-3 + rows)%rows);
  
        grid[(x+3+cols)%cols][(y-2+rows)%rows] = 1;
        drawCell((x+3+cols)%cols, (y-2+rows)%rows);
        grid[(x+3+cols)%cols][(y-1+rows)%rows] = 1;
        drawCell((x+3+cols)%cols, (y-1 + rows)%rows);
        grid[(x+3+cols)%cols][(y + rows)%rows] = 1;
        drawCell((x+3+cols)%cols, (y+rows)%rows);
  
        grid[(x-1+cols)%cols][(y-2+rows)%rows] = 1;
        drawCell((x-1+cols)%cols, (y-2+rows)%rows);
        grid[(x-2+cols)%cols][(y-1+rows)%rows] = 1;
        drawCell((x-2+cols)%cols, (y-1+rows)%rows);
        grid[(x+2+cols)%cols][(y+1+rows)%rows] = 1;
        drawCell((x+2+cols)%cols, (y+1+rows)%rows);
        grid[(x+1+cols)%cols][(y+2+rows)%rows] = 1;1
        drawCell((x+1+cols)%cols, (y+2+rows)%rows);
  
        grid[(x-3+cols)%cols][y] = 1;
        drawCell((x-3+cols)%cols, y);
        grid[(x-3+cols)%cols][(y+1+rows)%rows] = 1;
        drawCell((x-3+cols)%cols, (y+1+rows)%rows);
        grid[(x-3+cols)%cols][(y+2+rows)%rows] = 1;
        drawCell((x-3+cols)%cols, (y+2+rows)%rows);
  
        grid[(x-2+cols)%cols][(y+3+rows)%rows] = 1;
        drawCell((x-2+cols)%cols,(y+3+rows)%rows);
        grid[(x-1+cols)%cols][(y+3+rows)%rows] = 1;
        drawCell(x-1, y+3);
        grid[x][(y+3+rows)%rows] = 1;
        drawCell(x, (y+3+rows)%rows);
        randomMode = 0;
      }
    }
} // 1
  
function AddShip() {
    if (clickAvailable) {
      let x = floor(mouseX / resolution);
      let y = floor(mouseY / resolution);
      if (ValidateMousePosition(x, y) == 1) {
        grid[(x -6  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x -6 + cols)%cols, (y + rows)%rows);
        grid[(x -5  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x -5 + cols)%cols, (y + rows)%rows);
        grid[(x -6  + cols)%cols][(y - 1 +rows)%rows] = 1;
        drawCell((x -6 + cols)%cols, (y - 1 + rows)%rows);
        grid[(x - 5  + cols)%cols][(y -1 + rows)%rows] = 1;
        drawCell((x - 5 + cols)%cols, (y - 1 + rows)%rows);
  
        grid[(x - 3  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x - 3 + cols)%cols, (y + rows)%rows);
        grid[(x - 3  + cols)%cols][(y + 1 + rows)%rows] = 1;
        drawCell((x - 3 + cols)%cols, (y + 1 + rows)%rows);
        grid[(x - 3  + cols)%cols][(y -1 + rows)%rows] = 1;
        drawCell((x - 3 + cols)%cols, (y - 1 + rows)%rows);
        grid[(x - 3  + cols)%cols][(y -2 + rows)%rows] = 1;
        drawCell((x - 3 + cols)%cols, (y -2 + rows)%rows);
  
        grid[(x - 2  + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x - 2 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x - 2  + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x - 2 + cols)%cols, (y - 3 + rows)%rows);
        grid[(x - 2  + cols)%cols][(y + 1 + rows)%rows] = 1;
        drawCell((x - 2 + cols)%cols, (y + 1 + rows)%rows);
        grid[(x - 2  + cols)%cols][(y + 2 + rows)%rows] = 1;
        drawCell((x - 2 + cols)%cols, (y + 2 + rows)%rows);
  
        grid[(x - 1  + cols)%cols][(y - 4 + rows)%rows] = 1;
        drawCell((x - 1 + cols)%cols, (y - 4 + rows)%rows);
        grid[(x - 1  + cols)%cols][(y + 3 +rows)%rows] = 1;
        drawCell((x - 1 + cols)%cols, (y + 3 + rows)%rows);
  
        grid[(x + 1  + cols)%cols][(y -4 + rows)%rows] = 1;
        drawCell((x + 1 + cols)%cols, (y -4 + rows)%rows);
        grid[(x + 1  + cols)%cols][(y + 3 + rows)%rows] = 1;
        drawCell((x + 1 + cols)%cols, (y + 3 + rows)%rows);
  
        grid[(x + 2  + cols)%cols][(y -2 + rows)%rows] = 1;
        drawCell((x + 2 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x + 2  + cols)%cols][(y - 4 + rows)%rows] = 1;
        drawCell((x + 2 + cols)%cols, (y - 4 + rows)%rows);
        grid[(x + 2  + cols)%cols][(y + 1 + rows)%rows] = 1;
        drawCell((x + 2 + cols)%cols, (y + 1 + rows)%rows);
        grid[(x + 2  + cols)%cols][(y + 3 + rows)%rows] = 1;
        drawCell((x + 2 + cols)%cols, (y + 3 + rows)%rows);
  
        grid[(x + 3  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x + 3 + cols)%cols, (y + rows)%rows);
        grid[(x + 3  + cols)%cols][(y - 1 + rows)%rows] = 1;
        drawCell((x + 3 + cols)%cols, (y - 1 + rows)%rows);
  
        grid[(x + 4  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x + 4 + cols)%cols, (y + rows)%rows);
        grid[(x + 4  + cols)%cols][(y - 1 + rows)%rows] = 1;
        drawCell((x + 4 + cols)%cols, (y - 1 + rows)%rows);
  
        grid[(x + 5  + cols)%cols][(y + 1 + rows)%rows] = 1;
        drawCell((x + 5 + cols)%cols, (y + 1 + rows)%rows);
        grid[(x + 5  + cols)%cols][(y + 2 + rows)%rows] = 1;
        drawCell((x + 5 + cols)%cols, (y + 2 + rows)%rows);
        grid[(x + 5  + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x + 5 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x + 5  + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x + 5 + cols)%cols, (y - 3 + rows)%rows);
  
      }
    }
} // 2
  
function AddGliderGun() {
    if (clickAvailable) {
      let x = floor(mouseX / resolution);
      let y = floor(mouseY / resolution);
      if (ValidateMousePosition(x, y) == 1) {
        grid[(x + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x + cols)%cols, (y + rows)%rows);
  
        grid[(x - 14  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x - 14 + cols)%cols, (y + rows)%rows);
        grid[(x - 14  + cols)%cols][(y - 1 + rows)%rows] = 1;
        drawCell((x - 14 + cols)%cols, (y - 1 + rows)%rows);
  
        grid[(x - 13  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x - 13 + cols)%cols, (y + rows)%rows);
        grid[(x - 13  + cols)%cols][(y - 1 + rows)%rows] = 1;
        drawCell((x - 13 + cols)%cols, (y - 1 + rows)%rows);
  
        grid[(x - 4  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x - 4 + cols)%cols, (y + rows)%rows);
        grid[(x - 4  + cols)%cols][(y + 1 + rows)%rows] = 1;
        drawCell((x - 4 + cols)%cols, (y + 1 + rows)%rows);
        grid[(x - 4  + cols)%cols][(y  - 1 + rows)%rows] = 1;
        drawCell((x - 4 + cols)%cols, (y - 1 + rows)%rows);
  
        grid[(x - 3  + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x - 3 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x - 3  + cols)%cols][(y + 2 + rows)%rows] = 1;
        drawCell((x - 3 + cols)%cols, (y + 2 + rows)%rows);
  
        grid[(x - 2  + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x - 2 + cols)%cols, (y - 3 + rows)%rows);
        grid[(x - 2  + cols)%cols][(y + 3 + rows)%rows] = 1;
        drawCell((x - 2 + cols)%cols, (y + 3 + rows)%rows);
  
        grid[(x - 1  + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x - 1 + cols)%cols, (y - 3 + rows)%rows);
        grid[(x - 1  + cols)%cols][(y + 3 + rows)%rows] = 1;
        drawCell((x - 1 + cols)%cols, (y + 3 + rows)%rows);
  
        grid[(x + 1  + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x + 1 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x + 1  + cols)%cols][(y + 2 + rows)%rows] = 1;
        drawCell((x + 1 + cols)%cols, (y + 2 + rows)%rows);
  
        grid[(x + 2  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x - 2 + cols)%cols, (y + rows)%rows);
        grid[(x + 2  + cols)%cols][(y - 1 + rows)%rows] = 1;
        drawCell((x + 2 + cols)%cols, (y - 1 + rows)%rows);
        grid[(x + 2  + cols)%cols][(y + 1 + rows)%rows] = 1;
        drawCell((x + 2 + cols)%cols, (y + 1 + rows)%rows);
  
        grid[(x + 3  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x + 3 + cols)%cols, (y + rows)%rows);
  
        grid[(x + 6  + cols)%cols][(y - 1 + rows)%rows] = 1;
        drawCell((x + 6 + cols)%cols, (y - 1 + rows)%rows);
        grid[(x + 6  + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x + 6 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x + 6  + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x + 6 + cols)%cols, (y - 3 + rows)%rows);
  
        grid[(x + 7  + cols)%cols][(y - 1 + rows)%rows] = 1;
        drawCell((x + 7 + cols)%cols, (y - 1 + rows)%rows);
        grid[(x + 7  + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x + 7 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x + 7  + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x + 7 + cols)%cols, (y - 3 + rows)%rows);
  
        grid[(x + 8  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x + 8 + cols)%cols, (y + rows)%rows);
        grid[(x + 8  + cols)%cols][(y - 4 + rows)%rows] = 1;
        drawCell((x + 8 + cols)%cols, (y - 4 + rows)%rows);
  
  
        grid[(x + 10  + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x + 10 + cols)%cols, (y + rows)%rows);
        grid[(x + 10  + cols)%cols][(y + 1 + rows)%rows] = 1;
        drawCell((x + 10 + cols)%cols, (y + 1 + rows)%rows);
  
        grid[(x + 10  + cols)%cols][(y - 5 + rows)%rows] = 1;
        drawCell((x + 10 + cols)%cols, (y - 5 + rows)%rows);
        grid[(x + 10  + cols)%cols][(y - 4 + rows)%rows] = 1;
        drawCell((x + 10 + cols)%cols, (y - 4 + rows)%rows);
  
        grid[(x + 20  + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x + 20 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x + 20  + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x + 20 + cols)%cols, (y - 3 + rows)%rows);
  
        grid[(x + 21  + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x + 21 + cols)%cols, (y - 2 + rows)%rows);
        grid[(x + 21  + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x + 21 + cols)%cols, (y - 3 + rows)%rows);
  
      }
    }
} // 3

function AddSpaceShip() {
    if (clickAvailable) {
        let x = floor(mouseX / resolution);
        let y = floor(mouseY / resolution);
        if (ValidateMousePosition(x, y) == 1) {
            grid[(x - 35 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 35 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x - 35 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x - 35 + cols)%cols, (y + 7 + rows)%rows);

            grid[(x - 34 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x - 34 + cols)%cols, (y + 6 + rows)%rows);
            grid[(x - 34 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 34 + cols)%cols, (y + 4 + rows)%rows);

            grid[(x - 33 + cols)%cols][(y + 9 + rows)%rows] = 1;
            drawCell((x - 33 + cols)%cols, (y + 9 + rows)%rows);
            grid[(x - 33 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x - 33 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x - 33 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 33 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x - 33 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 33 + cols)%cols, (y + 2 + rows)%rows);

            grid[(x - 32 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x - 32 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y + 7 + rows)%rows);
            grid[(x - 32 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y + 6 + rows)%rows);
            grid[(x - 32 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x - 32 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y + 4 + rows)%rows);

            grid[(x - 29 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 29 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x - 29 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x - 29 + cols)%cols, (y + 6 + rows)%rows);

            grid[(x - 28 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 28 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x - 28 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 28 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x - 28 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 28 + cols)%cols, (y + 2 + rows)%rows);

            grid[(x - 27 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 27 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x - 27 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 27 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x - 27 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 27 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x - 27 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 27 + cols)%cols, (y + 2 + rows)%rows);

            grid[(x - 26 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 26 + cols)%cols, (y + 2 + rows)%rows);

            grid[(x - 25 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x - 25 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x - 25 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 25 + cols)%cols, (y + 3 + rows)%rows);

            grid[(x - 24 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 24 + cols)%cols, (y + 3 + rows)%rows);

            grid[(x - 23 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 23 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 23 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 23 + cols)%cols, (y + 2 + rows)%rows);

            grid[(x - 22 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 22 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 21 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 21 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 20 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 20 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 19 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 19 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 18 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 18 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 17 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 16 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 16 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 15 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 15 + cols)%cols, (y + 1 + rows)%rows);

            grid[(x - 21 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 21 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x - 21 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 21 + cols)%cols, (y + 4 + rows)%rows);

            grid[(x - 20 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x - 20 + cols)%cols, (y + 5 + rows)%rows);

            grid[(x - 19 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 19 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x - 19 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x - 19 + cols)%cols, (y + 7 + rows)%rows);

            grid[(x - 18 + cols)%cols][(y + 9 + rows)%rows] = 1;
            drawCell((x - 18 + cols)%cols, (y + 9 + rows)%rows);
            grid[(x - 18 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x - 18 + cols)%cols, (y + 7 + rows)%rows);

            grid[(x - 17 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x - 17 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y + 7 + rows)%rows);
            grid[(x - 17 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x - 17 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y + 3 + rows)%rows);

            grid[(x - 16 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 16 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x - 16 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 16 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x - 16 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 16 + cols)%cols, (y + 8 + rows)%rows);
            
            grid[(x - 15 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 15 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x - 15 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x - 15 + cols)%cols, (y + 7 + rows)%rows);

            grid[(x - 14 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x - 14 + cols)%cols, (y + 8 + rows)%rows);

            grid[(x - 13 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x - 13 + cols)%cols, (y + 7 + rows)%rows);
            grid[(x - 13 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 13 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x - 12 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 12 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x - 11 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 11 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x - 11 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 11 + cols)%cols, (y + 1 + rows)%rows);

            grid[(x - 13 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 13 + cols)%cols, (y + 2 + rows)%rows);

            grid[(x - 9 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 9 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x - 9 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 9 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x - 8 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 8 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x - 8 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 8 + cols)%cols, (y + 4 + rows)%rows);

            grid[(x - 7 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x - 7 + cols)%cols, (y + 6 + rows)%rows);

            grid[(x - 6 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x - 6 + cols)%cols, (y + 6 + rows)%rows);
            grid[(x - 6 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 6 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x - 5 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x - 5 + cols)%cols, (y + 6 + rows)%rows);
            grid[(x - 5 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 5 + cols)%cols, (y + 4 + rows)%rows);

            grid[(x - 3 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x - 3 + cols)%cols, (y + 7 + rows)%rows);
            grid[(x - 3 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x - 3 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x - 3 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 3 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x - 3 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 3 + cols)%cols, (y + 2 + rows)%rows);

            grid[(x - 2 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y + 6 + rows)%rows);
            grid[(x - 2 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x - 2 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x - 2 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x - 2 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y + 1 + rows)%rows);

            grid[(x - 1 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x - 1 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x - 1 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x - 1 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x - 1 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x - 1 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x - 1 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x - 1 + cols)%cols, (y + 5 + rows)%rows);

            grid[(x + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x + cols)%cols, (y + 6 + rows)%rows);
            grid[(x + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x + cols)%cols, (y + 5 + rows)%rows);

            grid[(x + 1 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x + 1 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x + 1 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x + 1 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x + 1 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y + 5 + rows)%rows);

            grid[(x + 2 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x + 2 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x + 2 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x + 2 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y + 6 + rows)%rows);
            grid[(x + 2 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y + 8 + rows)%rows);

            grid[(x + 3 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x + 3 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x + 3 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y + 6 + rows)%rows);
            grid[(x + 3 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y + 7 + rows)%rows);
            grid[(x + 3 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y + 8 + rows)%rows);

            grid[(x + 4 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x + 4 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x + 4 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x + 4 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x + 4 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x + 4 + cols)%cols, (y + 6 + rows)%rows);

            grid[(x + 5 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x + 5 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x + 5 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x + 5 + cols)%cols, (y + 5 + rows)%rows);

            grid[(x + 7 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x + 7 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x + 7 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x + 7 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x + 7 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 7 + cols)%cols, (y + 1 + rows)%rows);

            grid[(x + 8 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x + 8 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x + 8 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 8 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x + 9 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 9 + cols)%cols, (y + 1 + rows)%rows);
            grid[(x + 10 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 10 + cols)%cols, (y + 1 + rows)%rows);

            grid[(x + 9 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x + 9 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x + 9 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x + 9 + cols)%cols, (y + 3 + rows)%rows);

            grid[(x + 10 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x + 10 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x + 10 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x + 10 + cols)%cols, (y + 4 + rows)%rows);
            grid[(x + 10 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x + 10 + cols)%cols, (y + 6 + rows)%rows);

            grid[(x + 11 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x + 11 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x + 11 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x + 11 + cols)%cols, (y + 7 + rows)%rows);

            grid[(x + 12 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x + 12 + cols)%cols, (y + 6 + rows)%rows);
            grid[(x + 12 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x + 12 + cols)%cols, (y + 5 + rows)%rows);

            grid[(x + 13 + cols)%cols][(y + 4 + rows)%rows] = 1;
            drawCell((x + 13 + cols)%cols, (y + 4 + rows)%rows);

            grid[(x + 14 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x + 14 + cols)%cols, (y + 6 + rows)%rows);

            grid[(x + 15 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x + 15 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x + 15 + cols)%cols][(y + 7 + rows)%rows] = 1;
            drawCell((x + 15 + cols)%cols, (y + 7 + rows)%rows);

            grid[(x + 16 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x + 16 + cols)%cols, (y + 8 + rows)%rows);
            grid[(x + 16 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x + 16 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x + 17 + cols)%cols][(y + 9 + rows)%rows] = 1;
            drawCell((x + 17 + cols)%cols, (y + 9 + rows)%rows);
            grid[(x + 18 + cols)%cols][(y + 8 + rows)%rows] = 1;
            drawCell((x + 18 + cols)%cols, (y + 8 + rows)%rows);

            grid[(x + 18 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x + 18 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x + 18 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x + 18 + cols)%cols, (y + 3 + rows)%rows);

            grid[(x + 19 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x + 19 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x + 19 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x + 19 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x + 19 + cols)%cols][(y + 5 + rows)%rows] = 1;
            drawCell((x + 19 + cols)%cols, (y + 5 + rows)%rows);
            grid[(x + 19 + cols)%cols][(y + 6 + rows)%rows] = 1;
            drawCell((x + 19 + cols)%cols, (y + 6 + rows)%rows);

            grid[(x + 20 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x + 20 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x + 20 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 20 + cols)%cols, (y + 1 + rows)%rows);

            grid[(x + 22 + cols)%cols][(y + 2 + rows)%rows] = 1;
            drawCell((x + 22 + cols)%cols, (y + 2 + rows)%rows);
            grid[(x + 22 + cols)%cols][(y + 3 + rows)%rows] = 1;
            drawCell((x + 22 + cols)%cols, (y + 3 + rows)%rows);
            grid[(x + 22 + cols)%cols][(y + 1 + rows)%rows] = 1;
            drawCell((x + 22 + cols)%cols, (y + 1 + rows)%rows);





            grid[(x - 35 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 35 + cols)%cols, (y -8 + rows)%rows);
            grid[(x - 35 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x - 35 + cols)%cols, (y -7 + rows)%rows);

            grid[(x - 34 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x - 34 + cols)%cols, (y -6 + rows)%rows);
            grid[(x - 34 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 34 + cols)%cols, (y -4 + rows)%rows);

            grid[(x - 33 + cols)%cols][(y -9 + rows)%rows] = 1;
            drawCell((x - 33 + cols)%cols, (y -9 + rows)%rows);
            grid[(x - 33 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x - 33 + cols)%cols, (y -5 + rows)%rows);
            grid[(x - 33 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 33 + cols)%cols, (y -3 + rows)%rows);
            grid[(x - 33 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 33 + cols)%cols, (y -2 + rows)%rows);

            grid[(x - 32 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y -8 + rows)%rows);
            grid[(x - 32 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y -7 + rows)%rows);
            grid[(x - 32 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y -6 + rows)%rows);
            grid[(x - 32 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y -5 + rows)%rows);
            grid[(x - 32 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 32 + cols)%cols, (y -4 + rows)%rows);

            grid[(x - 29 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 29 + cols)%cols, (y -8 + rows)%rows);
            grid[(x - 29 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x - 29 + cols)%cols, (y -6 + rows)%rows);

            grid[(x - 28 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 28 + cols)%cols, (y -8 + rows)%rows);
            grid[(x - 28 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 28 + cols)%cols, (y -4 + rows)%rows);
            grid[(x - 28 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 28 + cols)%cols, (y -2 + rows)%rows);

            grid[(x - 27 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 27 + cols)%cols, (y -8 + rows)%rows);
            grid[(x - 27 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 27 + cols)%cols, (y -4 + rows)%rows);
            grid[(x - 27 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 27 + cols)%cols, (y -3 + rows)%rows);
            grid[(x - 27 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 27 + cols)%cols, (y -2 + rows)%rows);

            grid[(x - 26 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 26 + cols)%cols, (y -2 + rows)%rows);

            grid[(x - 25 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x - 25 + cols)%cols, (y -5 + rows)%rows);
            grid[(x - 25 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 25 + cols)%cols, (y -3 + rows)%rows);

            grid[(x - 24 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 24 + cols)%cols, (y -3 + rows)%rows);

            grid[(x - 23 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 23 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 23 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 23 + cols)%cols, (y -2 + rows)%rows);

            grid[(x - 22 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 22 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 21 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 21 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 20 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 20 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 19 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 19 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 18 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 18 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 17 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 16 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 16 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 15 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 15 + cols)%cols, (y -1 + rows)%rows);

            grid[(x - 21 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 21 + cols)%cols, (y -3 + rows)%rows);
            grid[(x - 21 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 21 + cols)%cols, (y -4 + rows)%rows);

            grid[(x - 20 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x - 20 + cols)%cols, (y -5 + rows)%rows);

            grid[(x - 19 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 19 + cols)%cols, (y -8 + rows)%rows);
            grid[(x - 19 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x - 19 + cols)%cols, (y -7 + rows)%rows);

            grid[(x - 18 + cols)%cols][(y -9 + rows)%rows] = 1;
            drawCell((x - 18 + cols)%cols, (y -9 + rows)%rows);
            grid[(x - 18 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x - 18 + cols)%cols, (y -7 + rows)%rows);

            grid[(x - 17 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y -8 + rows)%rows);
            grid[(x - 17 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y -7 + rows)%rows);
            grid[(x - 17 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y -4 + rows)%rows);
            grid[(x - 17 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 17 + cols)%cols, (y -3 + rows)%rows);

            grid[(x - 16 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 16 + cols)%cols, (y -4 + rows)%rows);
            grid[(x - 16 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 16 + cols)%cols, (y -3 + rows)%rows);
            grid[(x - 16 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 16 + cols)%cols, (y -8 + rows)%rows);
            
            grid[(x - 15 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 15 + cols)%cols, (y -8 + rows)%rows);
            grid[(x - 15 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x - 15 + cols)%cols, (y -7 + rows)%rows);

            grid[(x - 14 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x - 14 + cols)%cols, (y -8 + rows)%rows);

            grid[(x - 13 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x - 13 + cols)%cols, (y -7 + rows)%rows);
            grid[(x - 13 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 13 + cols)%cols, (y -2 + rows)%rows);
            grid[(x - 12 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 12 + cols)%cols, (y -2 + rows)%rows);
            grid[(x - 11 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 11 + cols)%cols, (y -2 + rows)%rows);
            grid[(x - 11 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 11 + cols)%cols, (y -1 + rows)%rows);

            grid[(x - 13 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 13 + cols)%cols, (y -2 + rows)%rows);

            grid[(x - 9 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 9 + cols)%cols, (y -3 + rows)%rows);
            grid[(x - 9 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 9 + cols)%cols, (y -4 + rows)%rows);
            grid[(x - 8 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 8 + cols)%cols, (y -3 + rows)%rows);
            grid[(x - 8 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 8 + cols)%cols, (y -4 + rows)%rows);

            grid[(x - 7 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x - 7 + cols)%cols, (y -6 + rows)%rows);

            grid[(x - 6 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x - 6 + cols)%cols, (y -6 + rows)%rows);
            grid[(x - 6 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 6 + cols)%cols, (y -4 + rows)%rows);
            grid[(x - 5 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x - 5 + cols)%cols, (y -6 + rows)%rows);
            grid[(x - 5 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 5 + cols)%cols, (y -4 + rows)%rows);

            grid[(x - 3 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x - 3 + cols)%cols, (y -7 + rows)%rows);
            grid[(x - 3 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x - 3 + cols)%cols, (y -5 + rows)%rows);
            grid[(x - 3 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 3 + cols)%cols, (y -3 + rows)%rows);
            grid[(x - 3 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 3 + cols)%cols, (y -2 + rows)%rows);

            grid[(x - 2 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y -6 + rows)%rows);
            grid[(x - 2 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y -5 + rows)%rows);
            grid[(x - 2 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y -4 + rows)%rows);
            grid[(x - 2 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y -2 + rows)%rows);
            grid[(x - 2 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 2 + cols)%cols, (y -1 + rows)%rows);

            grid[(x - 1 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x - 1 + cols)%cols, (y -2 + rows)%rows);
            grid[(x - 1 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x - 1 + cols)%cols, (y -1 + rows)%rows);
            grid[(x - 1 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x - 1 + cols)%cols, (y -3 + rows)%rows);
            grid[(x - 1 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x - 1 + cols)%cols, (y -5 + rows)%rows);

            grid[(x + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x + cols)%cols, (y -6 + rows)%rows);
            grid[(x + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x + cols)%cols, (y -5 + rows)%rows);

            grid[(x + 1 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y -1 + rows)%rows);
            grid[(x + 1 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y -2 + rows)%rows);
            grid[(x + 1 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y -3 + rows)%rows);
            grid[(x + 1 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y -4 + rows)%rows);
            grid[(x + 1 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x + 1 + cols)%cols, (y -5 + rows)%rows);

            grid[(x + 2 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y -1 + rows)%rows);
            grid[(x + 2 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y -4 + rows)%rows);
            grid[(x + 2 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y -5 + rows)%rows);
            grid[(x + 2 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y -6 + rows)%rows);
            grid[(x + 2 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x + 2 + cols)%cols, (y -8 + rows)%rows);

            grid[(x + 3 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y -1 + rows)%rows);
            grid[(x + 3 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y -2 + rows)%rows);
            grid[(x + 3 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y -6 + rows)%rows);
            grid[(x + 3 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y -7 + rows)%rows);
            grid[(x + 3 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x + 3 + cols)%cols, (y -8 + rows)%rows);

            grid[(x + 4 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x + 4 + cols)%cols, (y -3 + rows)%rows);
            grid[(x + 4 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x + 4 + cols)%cols, (y -2 + rows)%rows);
            grid[(x + 4 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x + 4 + cols)%cols, (y -6 + rows)%rows);

            grid[(x + 5 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x + 5 + cols)%cols, (y -4 + rows)%rows);
            grid[(x + 5 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x + 5 + cols)%cols, (y -5 + rows)%rows);

            grid[(x + 7 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x + 7 + cols)%cols, (y -4 + rows)%rows);
            grid[(x + 7 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x + 7 + cols)%cols, (y -3 + rows)%rows);
            grid[(x + 7 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 7 + cols)%cols, (y -1 + rows)%rows);

            grid[(x + 8 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x + 8 + cols)%cols, (y -5 + rows)%rows);
            grid[(x + 8 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 8 + cols)%cols, (y -1 + rows)%rows);
            grid[(x + 9 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 9 + cols)%cols, (y -1 + rows)%rows);
            grid[(x + 10 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 10 + cols)%cols, (y -1 + rows)%rows);

            grid[(x + 9 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x + 9 + cols)%cols, (y -4 + rows)%rows);
            grid[(x + 9 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x + 9 + cols)%cols, (y -3 + rows)%rows);

            grid[(x + 10 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x + 10 + cols)%cols, (y -2 + rows)%rows);
            grid[(x + 10 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x + 10 + cols)%cols, (y -4 + rows)%rows);
            grid[(x + 10 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x + 10 + cols)%cols, (y -6 + rows)%rows);

            grid[(x + 11 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x + 11 + cols)%cols, (y -3 + rows)%rows);
            grid[(x + 11 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x + 11 + cols)%cols, (y -7 + rows)%rows);

            grid[(x + 12 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x + 12 + cols)%cols, (y -6 + rows)%rows);
            grid[(x + 12 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x + 12 + cols)%cols, (y -5 + rows)%rows);

            grid[(x + 13 + cols)%cols][(y -4 + rows)%rows] = 1;
            drawCell((x + 13 + cols)%cols, (y -4 + rows)%rows);

            grid[(x + 14 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x + 14 + cols)%cols, (y -6 + rows)%rows);

            grid[(x + 15 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x + 15 + cols)%cols, (y -8 + rows)%rows);
            grid[(x + 15 + cols)%cols][(y -7 + rows)%rows] = 1;
            drawCell((x + 15 + cols)%cols, (y -7 + rows)%rows);

            grid[(x + 16 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x + 16 + cols)%cols, (y -8 + rows)%rows);
            grid[(x + 16 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x + 16 + cols)%cols, (y -5 + rows)%rows);
            grid[(x + 17 + cols)%cols][(y -9 + rows)%rows] = 1;
            drawCell((x + 17 + cols)%cols, (y -9 + rows)%rows);
            grid[(x + 18 + cols)%cols][(y -8 + rows)%rows] = 1;
            drawCell((x + 18 + cols)%cols, (y -8 + rows)%rows);

            grid[(x + 18 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x + 18 + cols)%cols, (y -2 + rows)%rows);
            grid[(x + 18 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x + 18 + cols)%cols, (y -3 + rows)%rows);

            grid[(x + 19 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x + 19 + cols)%cols, (y -2 + rows)%rows);
            grid[(x + 19 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x + 19 + cols)%cols, (y -3 + rows)%rows);
            grid[(x + 19 + cols)%cols][(y -5 + rows)%rows] = 1;
            drawCell((x + 19 + cols)%cols, (y -5 + rows)%rows);
            grid[(x + 19 + cols)%cols][(y -6 + rows)%rows] = 1;
            drawCell((x + 19 + cols)%cols, (y -6 + rows)%rows);

            grid[(x + 20 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x + 20 + cols)%cols, (y -2 + rows)%rows);
            grid[(x + 20 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 20 + cols)%cols, (y -1 + rows)%rows);

            grid[(x + 22 + cols)%cols][(y -2 + rows)%rows] = 1;
            drawCell((x + 22 + cols)%cols, (y -2 + rows)%rows);
            grid[(x + 22 + cols)%cols][(y -3 + rows)%rows] = 1;
            drawCell((x + 22 + cols)%cols, (y -3 + rows)%rows);
            grid[(x + 22 + cols)%cols][(y -1 + rows)%rows] = 1;
            drawCell((x + 22 + cols)%cols, (y -1 + rows)%rows);

        }
    }
} // 4

function AddGalaxy() {
  if (clickAvailable) {
    let x = floor(mouseX / resolution);
    let y = floor(mouseY / resolution);
    if (ValidateMousePosition(x, y) == 1) {
      for (let i = -4; i <= 1; i++) {
        grid[(x + i + cols)%cols][(y - 3 + rows)%rows] = 1;
        drawCell((x + i +cols)%cols,(y - 3 + rows)%rows);
        grid[(x + i + cols)%cols][(y - 4 + rows)%rows] = 1;
        drawCell((x + i + cols)%cols,(y - 4 + rows)%rows);
      }
      for (let i = -4; i <= 1; i++) {
        grid[(x + 3 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 3 +cols)%cols,(y + i + rows)%rows);
        grid[(x + 4 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 4 + cols)%cols,(y + i + rows)%rows);
      }
      for (let i = -1; i <= 4; i++) {
        grid[(x + i + cols)%cols][(y + 3 + rows)%rows] = 1;
        drawCell((x + i +cols)%cols,(y + 3 + rows)%rows);
        grid[(x + i + cols)%cols][(y + 4 + rows)%rows] = 1;
        drawCell((x + i + cols)%cols,(y + 4 + rows)%rows);
      }
      for (let i = -1; i <= 4; i++) {
        grid[(x - 3 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x - 3 +cols)%cols,(y + i + rows)%rows);
        grid[(x - 4 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x - 4 + cols)%cols,(y + i + rows)%rows);
      }
    }
  }
} // 5

function EraseField() {
    grid = makeGrid();
    //ChangeMode();
} // E