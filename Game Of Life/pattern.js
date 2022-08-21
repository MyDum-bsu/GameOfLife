function AddGlider(i = mouseX, j = mouseY) {
  if (clickAvailable) {
    let x = floor(i / resolution);
    let y = floor(j / resolution);
    if (ValidateMousePosition(x, y) == 1) {
      grid[(x + cols)%cols][(y - 1 + rows)%rows] = 1;
      drawCell((x + cols)%cols, (y - 1 + rows)%rows);
      grid[(x + 1 + cols)%cols][(y + rows)%rows] = 1;
      drawCell((x + 1 + cols)%cols, (y + rows)%rows);
      grid[(x + 1 + cols)%cols][(y + 1 + rows)%rows] = 1;
      drawCell((x + 1 + cols)%cols, (y + 1 + rows)%rows);
      grid[(x + cols)%cols][(y + 1 + rows)%rows] = 1;
      drawCell((x + cols)%cols, (y + 1 + rows)%rows);
      grid[(x - 1 + cols)%cols][(y + 1 + rows)%rows] = 1;
      drawCell((x - 1 + cols)%cols, (y + 1 + rows)%rows);
    }
  }
} // 1

function AddGliderGun(i = mouseX, j = mouseY) {
  if (clickAvailable) {
    let x = floor(i / resolution);
    let y = floor(j / resolution);
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
      drawCell((x + 2 + cols)%cols, (y + rows)%rows);
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
} // 2

function AddGalaxy(i = mouseX, j = mouseY) {
  if (clickAvailable) {
    let x = floor(i / resolution);
    let y = floor(j / resolution);
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
  } // 3

function AddShip(i = mouseX, j = mouseY) {
  if (clickAvailable) {
    let x = floor(i / resolution);
    let y = floor(j / resolution);
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
} // 4

function AddSpaceShip(i = mouseX, j = mouseY) {
  if (clickAvailable) {
      let x = floor(i / resolution);
      let y = floor(j / resolution);
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
} // 5

function AddCrab(i = mouseX, j = mouseY) {

  if (clickAvailable) {
    let x = floor(i / resolution);
    let y = floor(j / resolution);
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
      
    }
  }
} // 6

function AddAnimationForMenu(i = mouseX, j = mouseY) {
  let x = floor(i/resolution);
  let y = floor(j/resolution);
  if (ValidateMousePosition(x, y) == 1) {
    grid[x][y] = 1;
    drawCell(x, y);

    grid[(x-2 + cols)%cols][y] = 1;
    drawCell((x-2+cols )%cols, y);
    grid[(x-4+cols)%cols][y] = 1;
    drawCell((x-4+cols)%cols, y);

    grid[(x+2+cols)%cols][y] = 1;
    drawCell((x+2+cols)%cols, y);
    grid[(x+4+cols)%cols][y] = 1;
    drawCell((x+4+cols)%cols, y);

    grid[(x+2+cols)%cols][(y+1+rows)%rows] = 1;
    drawCell((x+2+cols)%cols, (y+1+rows)%rows);
    grid[(x+2+cols)%cols][(y+3+rows)%rows] = 1;
    drawCell((x+2+cols)%cols, (y+3+rows)%rows);
    grid[(x+3+cols)%cols][(y+1+rows)%rows] = 1;
    drawCell((x+3+cols)%cols, (y+1+rows)%rows);
    grid[(x+3+cols)%cols][(y+2+rows)%rows] = 1;
    drawCell((x+3+cols)%cols, (y+2+rows)%rows);

    grid[(x+6+cols)%cols][(y+1+rows)%rows] = 1;
    drawCell((x+6+cols)%cols, (y+1+rows)%rows);
    grid[(x+6+cols)%cols][(y+2+rows)%rows] = 1;
    drawCell((x+6+cols)%cols, (y+2+rows)%rows);
    grid[(x+6+cols)%cols][(y+3+rows)%rows] = 1;
    drawCell((x+6+cols)%cols, (y+3+rows)%rows);

    grid[(x+5+cols)%cols][(y+3+rows)%rows] = 1;
    drawCell((x+5+cols)%cols, (y+3+rows)%rows);

    grid[(x+cols)%cols][(y+2+rows)%rows] = 1;
    drawCell((x+cols)%cols, (y+2+rows)%rows);
    grid[(x+cols)%cols][(y+4+rows)%rows] = 1;
    drawCell((x+cols)%cols, (y+4+rows)%rows);

    grid[(x-1+cols)%cols][(y+2+rows)%rows] = 1;
    drawCell((x-1+cols)%cols, (y+2+rows)%rows);
    grid[(x-1+cols)%cols][(y+3+rows)%rows] = 1;
    drawCell((x-1+cols)%cols, (y+3+rows)%rows);
    grid[(x-1+cols)%cols][(y+6+rows)%rows] = 1;
    drawCell((x-1+cols)%cols, (y+6+rows)%rows);
    grid[(x-2+cols)%cols][(y+6+rows)%rows] = 1;
    drawCell((x-2+cols)%cols, (y+6+rows)%rows);
    grid[(x-3+cols)%cols][(y+6+rows)%rows] = 1;
    drawCell((x-3+cols)%cols, (y+6+rows)%rows);

    grid[(x-3+cols)%cols][(y+5+rows)%rows] = 1;
    drawCell((x-3+cols)%cols, (y+5+rows)%rows);
    grid[(x-3+cols)%cols][(y+2+rows)%rows] = 1;
    drawCell((x-3+cols)%cols, (y+2+rows)%rows);

    grid[(x-2+cols)%cols][(y+3+rows)%rows] = 1;
    drawCell((x-2+cols)%cols, (y+3+rows)%rows);

    grid[(x-6+cols)%cols][(y-1+rows)%rows] = 1;
    drawCell((x-6+cols)%cols, (y-1+rows)%rows);
    grid[(x-6+cols)%cols][(y-2+rows)%rows] = 1;
    drawCell((x-6+cols)%cols, (y-2+rows)%rows);
    grid[(x-6+cols)%cols][(y-3+rows)%rows] = 1;
    drawCell((x-6+cols)%cols, (y-3+rows)%rows);

    grid[(x-5+cols)%cols][(y-3+rows)%rows] = 1;
    drawCell((x-5+cols)%cols, (y-3+rows)%rows);

    grid[(x-2+cols)%cols][(y-1+rows)%rows] = 1;
    drawCell((x-2+cols)%cols, (y-1+rows)%rows);
    grid[(x-3+cols)%cols][(y-1+rows)%rows] = 1;
    drawCell((x-3+cols)%cols, (y-1+rows)%rows);
    grid[(x-3+cols)%cols][(y-2+rows)%rows] = 1;
    drawCell((x-3+cols)%cols, (y-2+rows)%rows);
    grid[(x-2+cols)%cols][(y-3+rows)%rows] = 1;
    drawCell((x-2+cols)%cols, (y-3+rows)%rows);

    grid[(x+cols)%cols][(y-2+rows)%rows] = 1;
    drawCell((x+cols)%cols, (y-2+rows)%rows);
    grid[(x+cols)%cols][(y-4+rows)%rows] = 1;
    drawCell((x+cols)%cols, (y-4+rows)%rows);

    grid[(x+1+cols)%cols][(y-2+rows)%rows] = 1;
    drawCell((x+1+cols)%cols, (y-2+rows)%rows);
    grid[(x+1+cols)%cols][(y-2+rows)%rows] = 1;
    drawCell((x+1+cols)%cols, (y-2+rows)%rows);
    grid[(x+1+cols)%cols][(y-3+rows)%rows] = 1;
    drawCell((x+1+cols)%cols, (y-3+rows)%rows);
    grid[(x+1+cols)%cols][(y-6+rows)%rows] = 1;
    drawCell((x+1+cols)%cols, (y-6+rows)%rows);

    grid[(x+2+cols)%cols][(y-3+rows)%rows] = 1;
    drawCell((x+2+cols)%cols, (y-3+rows)%rows);
    grid[(x+2+cols)%cols][(y-6+rows)%rows] = 1;
    drawCell((x+2+cols)%cols, (y-6+rows)%rows);

    grid[(x+3+cols)%cols][(y-2+rows)%rows] = 1;
    drawCell((x+3+cols)%cols, (y-2+rows)%rows);
    grid[(x+3+cols)%cols][(y-5+rows)%rows] = 1;
    drawCell((x+3+cols)%cols, (y-5+rows)%rows);
    grid[(x+3+cols)%cols][(y-6+rows)%rows] = 1;
    drawCell((x+3+cols)%cols, (y-6+rows)%rows);
  }
} // 7

function AddSpacefiller(i = mouseX, j = mouseY) {
  if (clickAvailable) {
    let x = floor(i / resolution);
    let y = floor(j / resolution);
    if (ValidateMousePosition(x, y) == 1) {
      for (let i = -5; i <= 5; i++) {
        grid[(x + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + cols )%cols, (y + i + rows)%rows);
      }
      grid[(x - 1 + cols)%cols][(y + 5 + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y + 5 + rows)%rows);
      grid[(x + 1 + cols)%cols][(y - 5 + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y - 5 + rows)%rows);

      grid[(x + 2 + cols)%cols][(y + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y + rows)%rows);
      grid[(x - 2 + cols)%cols][(y + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y + rows)%rows);

      grid[(x + 2 + cols)%cols][(y - 2 + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y - 2 + rows)%rows);
      grid[(x + 2 + cols)%cols][(y - 3 + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y - 3 + rows)%rows);
      grid[(x + 2 + cols)%cols][(y + 2 + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y + 2 + rows)%rows);

      grid[(x + 3 + cols)%cols][(y + 1 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y + 1 + rows)%rows);
      grid[(x + 3 + cols)%cols][(y + 3 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y + 3 + rows)%rows);
      grid[(x + 3 + cols)%cols][(y - 1 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y - 1 + rows)%rows);
      grid[(x + 3 + cols)%cols][(y - 3 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y - 3 + rows)%rows);

      grid[(x + 4 + cols)%cols][(y - 1 + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y - 1 + rows)%rows);
      grid[(x + 4 + cols)%cols][(y - 2 + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y - 2 + rows)%rows);
      grid[(x + 4 + cols)%cols][(y + 2 + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y + 2 + rows)%rows);

      for (let i = - 1; i <= 5; i++) {
        grid[(x + 6 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 6 + cols )%cols, (y + i + rows)%rows);
      }
      grid[(x + 7 + cols)%cols][(y + rows)%rows] = 1;
      drawCell((x + 7 + cols )%cols, (y + rows)%rows);
      grid[(x + 7 + cols)%cols][(y + 4 + rows)%rows] = 1;
      drawCell((x + 7 + cols )%cols, (y + 4 + rows)%rows);
      for (let i = -1; i <=5; i += 2) {
        grid[(x  + 8 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 8 + cols )%cols, (y + i + rows)%rows);
        grid[(x  + 9 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 9 + cols )%cols, (y + i + rows)%rows);
      }
      for (let i = 10; i <=13; i++) {
        grid[(x  + i + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x + i + cols )%cols, (y - 2 + rows)%rows);
        grid[(x  + i + cols)%cols][(y + 6 + rows)%rows] = 1;
        drawCell((x + i + cols )%cols, (y + 6 + rows)%rows);
      }
      grid[(x  + 12 + cols)%cols][(y + 1 + rows)%rows] = 1;
      drawCell((x + 12 + cols )%cols, (y + 1 + rows)%rows);
      grid[(x  + 12 + cols)%cols][(y + 3 + rows)%rows] = 1;
      drawCell((x + 12 + cols )%cols, (y + 3 + rows)%rows);

      grid[(x  + 13 + cols)%cols][(y + rows)%rows] = 1;
      drawCell((x + 13 + cols )%cols, (y + rows)%rows);
      grid[(x  + 13 + cols)%cols][(y - 1 + rows)%rows] = 1;
      drawCell((x + 13 + cols )%cols, (y - 1 + rows)%rows);
      grid[(x  + 13 + cols)%cols][(y + 4 + rows)%rows] = 1;
      drawCell((x + 13 + cols )%cols, (y + 4 + rows)%rows);
      grid[(x  + 13 + cols)%cols][(y + 5 + rows)%rows] = 1;
      drawCell((x + 13 + cols )%cols, (y + 5 + rows)%rows);

      grid[(x  + 1 + cols)%cols][(y + 7 + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y + 7 + rows)%rows);
      grid[(x  + 2 + cols)%cols][(y + 6 + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y + 6 + rows)%rows);
      grid[(x  + 2 + cols)%cols][(y + 5 + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y + 5 + rows)%rows);
      grid[(x  + 3 + cols)%cols][(y + 5 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y + 5 + rows)%rows);
      grid[(x  + 4 + cols)%cols][(y + 6 + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y + 6 + rows)%rows);
      grid[(x  + 4 + cols)%cols][(y + 5 + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y + 5 + rows)%rows);

      grid[(x  + 3 + cols)%cols][(y + 8 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y + 8 + rows)%rows);
      grid[(x  + 3 + cols)%cols][(y + 9 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y + 9 + rows)%rows);
      grid[(x  + 2 + cols)%cols][(y + 10 + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y + 10 + rows)%rows);

      grid[(x  + 1 + cols)%cols][(y + 11 + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y + 11 + rows)%rows);
      grid[(x + cols)%cols][(y + 11 + rows)%rows] = 1;
      drawCell((x + cols )%cols, (y + 11 + rows)%rows);
      
      grid[(x  - 1 + cols)%cols][(y + 11 + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y + 11 + rows)%rows);
      grid[(x  - 1 + cols)%cols][(y + 10 + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y + 10 + rows)%rows);
      grid[(x  - 1 + cols)%cols][(y + 9 + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y + 9 + rows)%rows);

      grid[(x  - 2 + cols)%cols][(y + 8 + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y + 8 + rows)%rows);

      grid[(x  - 2 + cols)%cols][(y + 10 + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y + 10 + rows)%rows);
      grid[(x  - 3 + cols)%cols][(y + 10 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y + 10 + rows)%rows);
      grid[(x  - 3 + cols)%cols][(y + 9 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y + 9 + rows)%rows);

      grid[(x  - 4 + cols)%cols][(y + 8 + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y + 8 + rows)%rows);
      grid[(x  - 4 + cols)%cols][(y + 7 + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y + 7 + rows)%rows);
      grid[(x  - 3 + cols)%cols][(y + 6 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y + 6 + rows)%rows);

      grid[(x  - 2 + cols)%cols][(y + 2 + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y + 2 + rows)%rows);
      grid[(x  - 2 + cols)%cols][(y + 3 + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y + 3 + rows)%rows);
      grid[(x  - 3 + cols)%cols][(y + 3 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y + 3 + rows)%rows);
      grid[(x  - 3 + cols)%cols][(y + 1 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y + 1 + rows)%rows);
      grid[(x  - 4 + cols)%cols][(y + 1 + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y + 1 + rows)%rows);
      grid[(x  - 4 + cols)%cols][(y + 2 + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y + 2 + rows)%rows);

      grid[(x  - 2 + cols)%cols][(y - 2 + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y - 2 + rows)%rows);
      grid[(x  - 4 + cols)%cols][(y - 2 + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y - 2 + rows)%rows);

      grid[(x  - 3 + cols)%cols][(y - 1 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y - 1 + rows)%rows);
      grid[(x  - 3 + cols)%cols][(y - 3 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y - 3 + rows)%rows);
      grid[(x  - 3 + cols)%cols][(y - 5 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y - 5 + rows)%rows);
      grid[(x  - 4 + cols)%cols][(y - 5 + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y - 5 + rows)%rows);
      grid[(x  - 2 + cols)%cols][(y - 5 + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y - 5 + rows)%rows);
      grid[(x  - 4 + cols)%cols][(y - 6 + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y - 6 + rows)%rows);
      grid[(x  - 2 + cols)%cols][(y - 6 + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y - 6 + rows)%rows);
      grid[(x  - 1 + cols)%cols][(y - 7 + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y - 7 + rows)%rows);

      grid[(x  - 3 + cols)%cols][(y - 9 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y - 9 + rows)%rows);
      grid[(x  - 3 + cols)%cols][(y - 8 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y - 8 + rows)%rows);
      grid[(x  - 2 + cols)%cols][(y - 10 + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y - 10 + rows)%rows);

      grid[(x  - 1 + cols)%cols][(y - 11 + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y - 11 + rows)%rows);

      grid[(x + cols)%cols][(y - 11 + rows)%rows] = 1;
      drawCell((x + cols )%cols, (y - 11 + rows)%rows);

      grid[(x  + 1 + cols)%cols][(y - 11 + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y - 11 + rows)%rows);

      grid[(x  + 1 + cols)%cols][(y - 10 + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y - 10 + rows)%rows);
      grid[(x  + 1 + cols)%cols][(y - 9 + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y - 9 + rows)%rows);
      grid[(x  + 1 + cols)%cols][(y - 10 + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y - 10 + rows)%rows);
      grid[(x  + 2 + cols)%cols][(y - 10 + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y - 10 + rows)%rows);
      grid[(x  + 3 + cols)%cols][(y - 10 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y - 10 + rows)%rows);
      grid[(x  + 2 + cols)%cols][(y - 8 + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y - 8 + rows)%rows);
      grid[(x  + 3 + cols)%cols][(y - 9 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y - 9 + rows)%rows);
      grid[(x  + 3 + cols)%cols][(y - 6 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y - 6 + rows)%rows);

      grid[(x  + 4 + cols)%cols][(y - 7 + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y - 7 + rows)%rows);
      grid[(x  + 4 + cols)%cols][(y - 8 + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y - 8 + rows)%rows);
      grid[(x  + 4 + cols)%cols][(y - 12 + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y - 12 + rows)%rows);
      grid[(x  + 5 + cols)%cols][(y - 12 + rows)%rows] = 1;
      drawCell((x + 5 + cols )%cols, (y - 12 + rows)%rows);
      grid[(x  + 6 + cols)%cols][(y - 12 + rows)%rows] = 1;
      drawCell((x + 6 + cols )%cols, (y - 12 + rows)%rows);
      grid[(x  + 5 + cols)%cols][(y - 13 + rows)%rows] = 1;
      drawCell((x + 5 + cols )%cols, (y - 13 + rows)%rows);
      for (let i = -11; i <= -7; i++) {
        grid[(x  + 6 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 6 + cols )%cols, (y + i + rows)%rows);
      }
      grid[(x  + 7 + cols)%cols][(y - 11 + rows)%rows] = 1;
      drawCell((x + 7 + cols )%cols, (y - 11 + rows)%rows);
      grid[(x  + 7 + cols)%cols][(y - 6 + rows)%rows] = 1;
      drawCell((x + 7 + cols )%cols, (y - 6 + rows)%rows);
      for (let i = -10; i <=-8; i++) {
        grid[(x  + 8 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 8 + cols )%cols, (y + i + rows)%rows);
      }
      grid[(x  + 9 + cols)%cols][(y - 10 + rows)%rows] = 1;
      drawCell((x + 9 + cols )%cols, (y - 10 + rows)%rows);
      for (let i = -8; i <=-6; i++) {
        grid[(x  + 10 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 10 + cols )%cols, (y + i + rows)%rows);
        grid[(x  + 11 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x + 11 + cols )%cols, (y + i + rows)%rows);
      }
      grid[(x  + 9 + cols)%cols][(y - 6 + rows)%rows] = 1;
      drawCell((x + 9 + cols )%cols, (y - 6 + rows)%rows);
      grid[(x  + 11 + cols)%cols][(y - 5 + rows)%rows] = 1;
      drawCell((x + 11 + cols )%cols, (y - 5 + rows)%rows);
      grid[(x  + 12 + cols)%cols][(y - 5 + rows)%rows] = 1;
      drawCell((x + 12 + cols )%cols, (y - 5 + rows)%rows);
      for (let i = -13; i <= -10; i++) {
        grid[(x  + i + cols)%cols][(y - 6 + rows)%rows] = 1;
        drawCell((x + i + cols )%cols, (y - 6 + rows)%rows);
        grid[(x  + i + cols)%cols][(y + 2 + rows)%rows] = 1;
        drawCell((x + i + cols )%cols, (y + 2 + rows)%rows);
      }
      grid[(x  -13 + cols)%cols][(y - 5 + rows)%rows] = 1;
      drawCell((x - 13 + cols )%cols, (y - 5 + rows)%rows);
      grid[(x  -13 + cols)%cols][(y - 4 + rows)%rows] = 1;
      drawCell((x - 13 + cols )%cols, (y - 4 + rows)%rows);
      grid[(x  -13 + cols)%cols][(y + 1 + rows)%rows] = 1;
      drawCell((x - 13 + cols )%cols, (y + 1 + rows)%rows);
      grid[(x  -13 + cols)%cols][(y + rows)%rows] = 1;
      drawCell((x - 13 + cols )%cols, (y + rows)%rows);

      grid[(x  -12 + cols)%cols][(y - 3 + rows)%rows] = 1;
      drawCell((x - 12 + cols )%cols, (y - 3 + rows)%rows);
      grid[(x  -12 + cols)%cols][(y - 1 + rows)%rows] = 1;
      drawCell((x - 12 + cols )%cols, (y - 1 + rows)%rows);
      for (let i= -5; i <= 1; i += 2) {
        grid[(x  -9 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x -9 + cols )%cols, (y + i + rows)%rows);
        grid[(x  -8 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x -8 + cols )%cols, (y + i + rows)%rows);
      }
      grid[(x  - 7 + cols)%cols][(y - 4 + rows)%rows] = 1;
      drawCell((x - 7 + cols )%cols, (y - 4 + rows)%rows);
      grid[(x  - 7 + cols)%cols][(y + rows)%rows] = 1;
      drawCell((x - 7 + cols )%cols, (y + rows)%rows);
      for (let i = -5; i <=1; i++) {
        grid[(x  - 6 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x - 6 + cols )%cols, (y + i + rows)%rows);
      }

      for (let i = 7; i <=12; i++) {
        grid[(x  - 6 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x - 6 + cols )%cols, (y + i + rows)%rows);
      }
      grid[(x  - 7 + cols)%cols][(y + 6 + rows)%rows] = 1;
      drawCell((x - 7 + cols )%cols, (y + 6 + rows)%rows);
      grid[(x  - 7 + cols)%cols][(y + 11 + rows)%rows] = 1;
      drawCell((x - 7 + cols )%cols, (y + 11 + rows)%rows);

      grid[(x  - 8 + cols)%cols][(y + 10 + rows)%rows] = 1;
      drawCell((x - 8 + cols )%cols, (y + 10 + rows)%rows);
      grid[(x  - 9 + cols)%cols][(y + 10 + rows)%rows] = 1;
      drawCell((x - 9 + cols )%cols, (y + 10 + rows)%rows);
      grid[(x  - 8 + cols)%cols][(y + 9 + rows)%rows] = 1;
      drawCell((x - 8 + cols )%cols, (y + 9 + rows)%rows);
      grid[(x  - 8 + cols)%cols][(y + 8 + rows)%rows] = 1;
      drawCell((x - 8 + cols )%cols, (y + 8 + rows)%rows);
      for (let i = 6; i <= 8; i++) {
        grid[(x  -10 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x -10 + cols )%cols, (y + i + rows)%rows);
        grid[(x  -11 + cols)%cols][(y + i + rows)%rows] = 1;
        drawCell((x -11 + cols )%cols, (y + i + rows)%rows);
      }
      grid[(x  - 11 + cols)%cols][(y + 5 + rows)%rows] = 1;
      drawCell((x - 11 + cols )%cols, (y + 5 + rows)%rows);
      grid[(x  - 12 + cols)%cols][(y + 5 + rows)%rows] = 1;
      drawCell((x - 12 + cols )%cols, (y + 5 + rows)%rows);
      grid[(x  - 9 + cols)%cols][(y + 6 + rows)%rows] = 1;
      drawCell((x - 9 + cols )%cols, (y + 6 + rows)%rows);

      grid[(x  - 5 + cols)%cols][(y + 12 + rows)%rows] = 1;
      drawCell((x - 5 + cols )%cols, (y + 12 + rows)%rows);
      grid[(x  - 4 + cols)%cols][(y + 12 + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y + 12 + rows)%rows);
      grid[(x  - 5 + cols)%cols][(y + 13 + rows)%rows] = 1;
      drawCell((x - 5 + cols )%cols, (y + 13 + rows)%rows);

    }
  }
} // 8

function AddHalfmax(i = mouseX, j = mouseY) {
  if (clickAvailable) {
    let x = floor(i / resolution);
    let y = floor(j / resolution);
    if (ValidateMousePosition(x, y) == 1) {
      grid[(x + cols)%cols][(y + rows)%rows] = 1;
      drawCell((x + cols )%cols, (y + rows)%rows);
      
      for (let k = -6; k >= -20; k -= 2) {
        for (let l = -24 - k; l <= 0 ; l++) {
          grid[(x + l + cols)%cols][(y + k + rows)%rows] = 1;
          drawCell((x + l + cols )%cols, (y + k + rows)%rows);

          grid[(x - l + cols)%cols][(y + k + rows)%rows] = 1;
          drawCell((x - l + cols )%cols, (y + k + rows)%rows);
        }
      }
      for (let l = -20; l <= -1 ; l++) {
        grid[(x + l + cols)%cols][(y - 4 + rows)%rows] = 1;
        drawCell((x + l + cols )%cols, (y - 4 + rows)%rows);

        grid[(x - l + cols)%cols][(y - 4 + rows)%rows] = 1;
        drawCell((x - l + cols )%cols, (y - 4 + rows)%rows);
      }
      for (let l = -22; l <= -2 ; l++) {
        grid[(x + l + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x + l + cols )%cols, (y - 2 + rows)%rows);

        grid[(x - l + cols)%cols][(y - 2 + rows)%rows] = 1;
        drawCell((x - l + cols )%cols, (y - 2 + rows)%rows);
      }
      for (let l = -24; l <= -4 ; l++) {
        grid[(x + l + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x + l + cols )%cols, (y + rows)%rows);

        grid[(x - l + cols)%cols][(y + rows)%rows] = 1;
        drawCell((x - l + cols )%cols, (y + rows)%rows);
      }
      grid[(x + 1 + cols)%cols][(y - 3 + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y - 3 + rows)%rows);
      grid[(x - 1 + cols)%cols][(y - 3 + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y - 3 + rows)%rows);
    }
    for (let k = -5; k >= -19; k -= 2) {
      grid[(x - 24 - k + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x - 24 - k + cols )%cols, (y + k + rows)%rows);

      grid[(x + 24 + k + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x + 24 + k + cols )%cols, (y + k + rows)%rows);
    }
    grid[(x + cols)%cols][(y - 21 + rows)%rows] = 1;
    drawCell((x + cols )%cols, (y - 21 + rows)%rows);



    grid[(x - 1 + cols)%cols][(y - 22 + rows)%rows] = 1;
    drawCell((x - 1 + cols )%cols, (y - 22 + rows)%rows);
    grid[(x - 2 + cols)%cols][(y - 22 + rows)%rows] = 1;
    drawCell((x - 2 + cols )%cols, (y - 22 + rows)%rows);
    grid[(x - 3 + cols)%cols][(y - 22 + rows)%rows] = 1;
    drawCell((x - 3 + cols )%cols, (y - 22 + rows)%rows);
    grid[(x + 1 + cols)%cols][(y - 22 + rows)%rows] = 1;
    drawCell((x + 1 + cols )%cols, (y - 22 + rows)%rows);
    grid[(x + 2 + cols)%cols][(y - 22 + rows)%rows] = 1;
    drawCell((x + 2 + cols )%cols, (y - 22 + rows)%rows);
    grid[(x + 3 + cols)%cols][(y - 22 + rows)%rows] = 1;
    drawCell((x + 3 + cols )%cols, (y - 22 + rows)%rows);

    grid[(x - 2 + cols)%cols][(y - 23 + rows)%rows] = 1;
    drawCell((x -2 + cols )%cols, (y - 23 + rows)%rows);
    grid[(x + 2 + cols)%cols][(y - 23 + rows)%rows] = 1;
    drawCell((x + 2 + cols )%cols, (y - 23 + rows)%rows);

    for (let k = -3; k <= 3; k += 2) {
      grid[(x + k + cols)%cols][(y - 24 + rows)%rows] = 1;
      drawCell((x + k + cols )%cols, (y - 24 + rows)%rows);
      grid[(x + k + cols)%cols][(y - 25 + rows)%rows] = 1;
      drawCell((x + k + cols )%cols, (y - 25 + rows)%rows);
    }
    for (let k = -29; k <= -26; k++) {
      grid[(x - 4 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x - 4 + cols )%cols, (y + k + rows)%rows);
      grid[(x + 4 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x + 4 + cols )%cols, (y + k + rows)%rows);
    }
    grid[(x - 3 + cols)%cols][(y - 29 + rows)%rows] = 1;
    drawCell((x - 3 + cols )%cols, (y - 29 + rows)%rows);
    grid[(x + 3 + cols)%cols][(y - 29 + rows)%rows] = 1;
    drawCell((x + 3 + cols )%cols, (y - 29 + rows)%rows);
    grid[(x - 2 + cols)%cols][(y - 29 + rows)%rows] = 1;
    drawCell((x - 2 + cols )%cols, (y - 29 + rows)%rows);
    grid[(x + 2 + cols)%cols][(y - 29 + rows)%rows] = 1;
    drawCell((x + 2 + cols )%cols, (y - 29 + rows)%rows);
    grid[(x - 1 + cols)%cols][(y - 28 + rows)%rows] = 1;
    drawCell((x - 1 + cols )%cols, (y - 28 + rows)%rows);
    grid[(x + 1 + cols)%cols][(y - 28 + rows)%rows] = 1;
    drawCell((x + 1 + cols )%cols, (y - 28 + rows)%rows);





  
    grid[(x - 23 + cols)%cols][(y - 3 + rows)%rows] = 1;
    drawCell((x - 23 + cols )%cols, (y - 3 + rows)%rows);
    grid[(x - 24 + cols)%cols][(y - 4 + rows)%rows] = 1;
    drawCell((x - 24 + cols )%cols, (y - 4 + rows)%rows);
    grid[(x - 22 + cols)%cols][(y - 5 + rows)%rows] = 1;
    drawCell((x - 22 + cols )%cols, (y - 5 + rows)%rows);
    grid[(x - 23 + cols)%cols][(y - 6 + rows)%rows] = 1;
    drawCell((x - 23 + cols )%cols, (y - 6 + rows)%rows);
    grid[(x - 25 + cols)%cols][(y - 5 + rows)%rows] = 1;
    drawCell((x - 25 + cols )%cols, (y - 5 + rows)%rows);
    grid[(x - 25 + cols)%cols][(y - 6 + rows)%rows] = 1;
    drawCell((x - 25 + cols )%cols, (y - 6 + rows)%rows);

    grid[(x - 27 + cols)%cols][(y - 5 + rows)%rows] = 1;
    drawCell((x - 27 + cols )%cols, (y - 5 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 6 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 6 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 7 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 7 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 7 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 7 + rows)%rows);

    grid[(x - 30 + cols)%cols][(y - 8 + rows)%rows] = 1;
    drawCell((x - 30 + cols )%cols, (y - 8 + rows)%rows);
//////////////////////////////////////////////////////////
    grid[(x - 30 + cols)%cols][(y - 9 + rows)%rows] = 1;
    drawCell((x - 30 + cols )%cols, (y - 9 + rows)%rows);
    grid[(x - 31 + cols)%cols][(y - 9 + rows)%rows] = 1;
    drawCell((x - 31 + cols )%cols, (y - 9 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 9 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 9 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 9 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 9 + rows)%rows);
    grid[(x - 27 + cols)%cols][(y - 10 + rows)%rows] = 1;
    drawCell((x - 27 + cols )%cols, (y - 10 + rows)%rows);
    grid[(x - 32 + cols)%cols][(y - 10 + rows)%rows] = 1;
    drawCell((x - 32 + cols )%cols, (y - 10 + rows)%rows);
    grid[(x - 32 + cols)%cols][(y - 11 + rows)%rows] = 1;
    drawCell((x - 32 + cols )%cols, (y - 11 + rows)%rows);
    grid[(x - 32 + cols)%cols][(y - 12 + rows)%rows] = 1;
    drawCell((x - 32 + cols )%cols, (y - 12 + rows)%rows);
    grid[(x - 31 + cols)%cols][(y - 13 + rows)%rows] = 1;
    drawCell((x - 31 + cols )%cols, (y - 13 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 11 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 11 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 12 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 12 + rows)%rows);
    grid[(x - 31 + cols)%cols][(y - 13 + rows)%rows] = 1;
    drawCell((x - 31 + cols )%cols, (y - 13 + rows)%rows);
    grid[(x - 30 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x - 30 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x - 27 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x - 27 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 15 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 15 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 16 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 16 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 17 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 17 + rows)%rows);
    grid[(x - 26 + cols)%cols][(y - 17 + rows)%rows] = 1;
    drawCell((x - 26 + cols )%cols, (y - 17 + rows)%rows);
    grid[(x - 25 + cols)%cols][(y - 15 + rows)%rows] = 1;
    drawCell((x - 25 + cols )%cols, (y - 15 + rows)%rows);
    grid[(x - 25 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x - 25 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x - 27 + cols)%cols][(y - 19 + rows)%rows] = 1;
    drawCell((x - 27 + cols )%cols, (y - 19 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 19 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 19 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 19 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 19 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 20 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 20 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 20 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 20 + rows)%rows);
    grid[(x - 27 + cols)%cols][(y - 21 + rows)%rows] = 1;
    drawCell((x - 27 + cols )%cols, (y - 21 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 21 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 21 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 21 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 21 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 23 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 23 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 24 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 24 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 23 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 23 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 25 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 25 + rows)%rows);
    grid[(x - 26 + cols)%cols][(y - 23 + rows)%rows] = 1;
    drawCell((x - 26 + cols )%cols, (y - 23 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x - 30 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x - 30 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x - 27 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x - 27 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x - 25 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x - 25 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x - 25 + cols)%cols][(y - 25 + rows)%rows] = 1;
    drawCell((x - 25 + cols )%cols, (y - 25 + rows)%rows);
    grid[(x - 31 + cols)%cols][(y - 27 + rows)%rows] = 1;
    drawCell((x - 31 + cols )%cols, (y - 27 + rows)%rows);
    grid[(x - 32 + cols)%cols][(y - 28 + rows)%rows] = 1;
    drawCell((x - 32 + cols )%cols, (y - 28 + rows)%rows);
    grid[(x - 32 + cols)%cols][(y - 29 + rows)%rows] = 1; 
   drawCell((x - 32 + cols )%cols, (y - 29 + rows)%rows);
    grid[(x - 32 + cols)%cols][(y - 30 + rows)%rows] = 1;
    drawCell((x - 32 + cols )%cols, (y - 30 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 28 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 28 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 29 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 29 + rows)%rows);
    grid[(x - 30 + cols)%cols][(y - 31 + rows)%rows] = 1;
    drawCell((x - 30 + cols )%cols, (y - 31 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 31 + rows)%rows] = 1; 
    drawCell((x - 29 + cols )%cols, (y - 31 + rows)%rows);
    grid[(x - 27 + cols)%cols][(y - 30 + rows)%rows] = 1;
    drawCell((x - 27 + cols )%cols, (y - 30 + rows)%rows);
    grid[(x - 31 + cols)%cols][(y - 31 + rows)%rows] = 1;
    drawCell((x - 31 + cols )%cols, (y - 31 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 31 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 31 + rows)%rows);
    grid[(x - 30 + cols)%cols][(y - 32 + rows)%rows] = 1;
    drawCell((x - 30 + cols )%cols, (y - 32 + rows)%rows);
    grid[(x - 29 + cols)%cols][(y - 33 + rows)%rows] = 1;
    drawCell((x - 29 + cols )%cols, (y - 33 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 33 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 33 + rows)%rows);
    grid[(x - 28 + cols)%cols][(y - 34 + rows)%rows] = 1;
    drawCell((x - 28 + cols )%cols, (y - 34 + rows)%rows);
    grid[(x - 27 + cols)%cols][(y - 35 + rows)%rows] = 1;
    drawCell((x - 27 + cols )%cols, (y - 35 + rows)%rows);
    grid[(x - 25 + cols)%cols][(y - 35 + rows)%rows] = 1;
    drawCell((x - 25 + cols )%cols, (y - 35 + rows)%rows);
    grid[(x - 25 + cols)%cols][(y - 34 + rows)%rows] = 1;
    drawCell((x - 25 + cols )%cols, (y - 34 + rows)%rows);






    grid[(x + 23 + cols)%cols][(y - 3 + rows)%rows] = 1;
    drawCell((x + 23 + cols )%cols, (y - 3 + rows)%rows);
    grid[(x + 24 + cols)%cols][(y - 4 + rows)%rows] = 1;
    drawCell((x + 24 + cols )%cols, (y - 4 + rows)%rows);
    grid[(x + 22 + cols)%cols][(y - 5 + rows)%rows] = 1;
    drawCell((x + 22 + cols )%cols, (y - 5 + rows)%rows);
    grid[(x + 23 + cols)%cols][(y - 6 + rows)%rows] = 1;
    drawCell((x + 23 + cols )%cols, (y - 6 + rows)%rows);
    grid[(x + 25 + cols)%cols][(y - 5 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y - 5 + rows)%rows);
    grid[(x + 25 + cols)%cols][(y - 6 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y - 6 + rows)%rows);

    grid[(x + 27 + cols)%cols][(y - 5 + rows)%rows] = 1;
    drawCell((x + 27 + cols )%cols, (y - 5 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 6 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 6 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 7 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 7 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 7 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 7 + rows)%rows);

    grid[(x + 30 + cols)%cols][(y - 8 + rows)%rows] = 1;
    drawCell((x + 30 + cols )%cols, (y - 8 + rows)%rows);







    grid[(x +30 + cols)%cols][(y - 9 + rows)%rows] = 1;
    drawCell((x +30 + cols )%cols, (y - 9 + rows)%rows);
    grid[(x +31 + cols)%cols][(y - 9 + rows)%rows] = 1;
    drawCell((x +31 + cols )%cols, (y - 9 + rows)%rows);
    grid[(x +29 + cols)%cols][(y - 9 + rows)%rows] = 1;
    drawCell((x +29 + cols )%cols, (y - 9 + rows)%rows);
    grid[(x +28 + cols)%cols][(y - 9 + rows)%rows] = 1;
    drawCell((x +28 + cols )%cols, (y - 9 + rows)%rows);
    grid[(x +27 + cols)%cols][(y - 10 + rows)%rows] = 1;
    drawCell((x +27 + cols )%cols, (y - 10 + rows)%rows);
    grid[(x +32 + cols)%cols][(y - 10 + rows)%rows] = 1;
    drawCell((x +32 + cols )%cols, (y - 10 + rows)%rows);
    grid[(x +32 + cols)%cols][(y - 11 + rows)%rows] = 1;
    drawCell((x +32 + cols )%cols, (y - 11 + rows)%rows);
    grid[(x +32 + cols)%cols][(y - 12 + rows)%rows] = 1;
    drawCell((x +32 + cols )%cols, (y - 12 + rows)%rows);
    grid[(x +31 + cols)%cols][(y - 13 + rows)%rows] = 1;
    drawCell((x +31 + cols )%cols, (y - 13 + rows)%rows);
    grid[(x +29 + cols)%cols][(y - 11 + rows)%rows] = 1;
    drawCell((x +29 + cols )%cols, (y - 11 + rows)%rows);
    grid[(x +29 + cols)%cols][(y - 12 + rows)%rows] = 1;
    drawCell((x +29 + cols )%cols, (y - 12 + rows)%rows);
    grid[(x +31 + cols)%cols][(y - 13 + rows)%rows] = 1;
    drawCell((x +31 + cols )%cols, (y - 13 + rows)%rows);
    grid[(x +30 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x +30 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x +29 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x +29 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x +28 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x +28 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x +27 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x +27 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x +29 + cols)%cols][(y - 15 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 15 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 16 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 16 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 17 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 17 + rows)%rows);
    grid[(x + 26 + cols)%cols][(y - 17 + rows)%rows] = 1;
    drawCell((x + 26 + cols )%cols, (y - 17 + rows)%rows);
    grid[(x + 25 + cols)%cols][(y - 15 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y - 15 + rows)%rows);
    grid[(x + 25 + cols)%cols][(y - 14 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y - 14 + rows)%rows);
    grid[(x + 27 + cols)%cols][(y - 19 + rows)%rows] = 1;
    drawCell((x + 27 + cols )%cols, (y - 19 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 19 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 19 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 19 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 19 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 20 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 20 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 20 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 20 + rows)%rows);
    grid[(x + 27 + cols)%cols][(y - 21 + rows)%rows] = 1;
    drawCell((x + 27 + cols )%cols, (y - 21 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 21 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 21 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 21 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 21 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 23 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 23 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 24 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 24 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 23 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 23 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 25 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 25 + rows)%rows);
    grid[(x + 26 + cols)%cols][(y - 23 + rows)%rows] = 1;
    drawCell((x + 26 + cols )%cols, (y - 23 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x + 30 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x + 30 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x + 27 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x + 27 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x + 25 + cols)%cols][(y - 26 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y - 26 + rows)%rows);
    grid[(x + 25 + cols)%cols][(y - 25 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y - 25 + rows)%rows);
    grid[(x + 31 + cols)%cols][(y - 27 + rows)%rows] = 1;
    drawCell((x + 31 + cols )%cols, (y - 27 + rows)%rows);
    grid[(x + 32 + cols)%cols][(y - 28 + rows)%rows] = 1;
    drawCell((x + 32 + cols )%cols, (y - 28 + rows)%rows);
    grid[(x + 32 + cols)%cols][(y - 29 + rows)%rows] = 1; 
   drawCell((x + 32 + cols )%cols, (y - 29 + rows)%rows);
    grid[(x + 32 + cols)%cols][(y - 30 + rows)%rows] = 1;
    drawCell((x + 32 + cols )%cols, (y - 30 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 28 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 28 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 29 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 29 + rows)%rows);
    grid[(x + 30 + cols)%cols][(y - 31 + rows)%rows] = 1;
    drawCell((x + 30 + cols )%cols, (y - 31 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 31 + rows)%rows] = 1; 
    drawCell((x + 29 + cols )%cols, (y - 31 + rows)%rows);
    grid[(x + 27 + cols)%cols][(y - 30 + rows)%rows] = 1;
    drawCell((x + 27 + cols )%cols, (y - 30 + rows)%rows);
    grid[(x + 31 + cols)%cols][(y - 31 + rows)%rows] = 1;
    drawCell((x + 31 + cols )%cols, (y - 31 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 31 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 31 + rows)%rows);
    grid[(x + 30 + cols)%cols][(y - 32 + rows)%rows] = 1;
    drawCell((x + 30 + cols )%cols, (y - 32 + rows)%rows);
    grid[(x + 29 + cols)%cols][(y - 33 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y - 33 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 33 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 33 + rows)%rows);
    grid[(x + 28 + cols)%cols][(y - 34 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y - 34 + rows)%rows);
    grid[(x + 27 + cols)%cols][(y - 35 + rows)%rows] = 1;
    drawCell((x + 27 + cols )%cols, (y - 35 + rows)%rows);
    grid[(x + 25 + cols)%cols][(y - 35 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y - 35 + rows)%rows);
    grid[(x + 25 + cols)%cols][(y - 34 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y - 34 + rows)%rows);




    for (let k = 1; k <= 5; k++) {
      grid[(x + 1 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y + k + rows)%rows);
      grid[(x - 1 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y + k + rows)%rows);
    }
    grid[(x + 2 + cols)%cols][(y + 5 + rows)%rows] = 1;
    drawCell((x + 2 + cols )%cols, (y + 5 + rows)%rows);
    grid[(x - 2 + cols)%cols][(y + 5 + rows)%rows] = 1;
    drawCell((x - 2 + cols )%cols, (y + 5 + rows)%rows);

    grid[(x + 3 + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x + 3 + cols )%cols, (y + 4 + rows)%rows);
    grid[(x + 4 + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x + 4 + cols )%cols, (y + 4 + rows)%rows);
    grid[(x + 5 + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x + 5 + cols )%cols, (y + 4 + rows)%rows);
    grid[(x - 3 + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x - 3 + cols )%cols, (y + 4 + rows)%rows);
    grid[(x - 4 + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x - 4 + cols )%cols, (y + 4 + rows)%rows);
    grid[(x - 5 + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x - 5 + cols )%cols, (y + 4 + rows)%rows);

    grid[(x - 3 + cols)%cols][(y + 1 + rows)%rows] = 1;
    drawCell((x - 3 + cols )%cols, (y + 1 + rows)%rows);
    grid[(x + 3 + cols)%cols][(y + 1 + rows)%rows] = 1;
    drawCell((x + 3 + cols )%cols, (y + 1 + rows)%rows);
    grid[(x + 5 + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x + 5 + cols )%cols, (y + 4 + rows)%rows);

    grid[(x - 5 + cols)%cols][(y + 6 + rows)%rows] = 1;
    drawCell((x - 5 + cols )%cols, (y + 6 + rows)%rows);
    grid[(x - 4 + cols)%cols][(y + 6 + rows)%rows] = 1;
    drawCell((x - 4 + cols )%cols, (y + 6 + rows)%rows);
    grid[(x + 5 + cols)%cols][(y + 6 + rows)%rows] = 1;
    drawCell((x + 5 + cols )%cols, (y + 6 + rows)%rows);
    grid[(x + 4 + cols)%cols][(y + 6 + rows)%rows] = 1;
    drawCell((x + 4 + cols )%cols, (y + 6 + rows)%rows);
    for (let k = -5; k <= -2; k++) {
      grid[(x + k + cols)%cols][(y + 7 + rows)%rows] = 1;
      drawCell((x + k + cols )%cols, (y + 7 + rows)%rows);
      grid[(x - k + cols)%cols][(y + 7 + rows)%rows] = 1;
      drawCell((x - k + cols )%cols, (y + 7 + rows)%rows);
    }
    grid[(x + cols)%cols][(y + 6 + rows)%rows] = 1;
    drawCell((x + cols )%cols, (y + 6 + rows)%rows);
    grid[(x + cols)%cols][(y + 6 + rows)%rows] = 1;
    drawCell((x + cols )%cols, (y + 6 + rows)%rows);
    grid[(x + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x + cols )%cols, (y + 7 + rows)%rows);
    for (let k = 8; k <= 10; k++) {
      grid[(x + 1 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x + 1 + cols )%cols, (y + k + rows)%rows);
      grid[(x - 1 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x - 1 + cols )%cols, (y + k + rows)%rows);
    }
    for (let k = 10; k <= 11; k++) {
      grid[(x + 2 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x + 2 + cols )%cols, (y + k + rows)%rows);
      grid[(x - 2 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x - 2 + cols )%cols, (y + k + rows)%rows);

      grid[(x + 3 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y + k + rows)%rows);
      grid[(x - 3 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y + k + rows)%rows);
    }
    grid[(x + 3 + cols)%cols][(y + 9 + rows)%rows] = 1;
      drawCell((x + 3 + cols )%cols, (y + 9 + rows)%rows);
      grid[(x - 3 + cols)%cols][(y + 9 + rows)%rows] = 1;
      drawCell((x - 3 + cols )%cols, (y + 9 + rows)%rows);
  
  for (let k = 10; k <= 11; k++) {
    grid[(x + 7 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 7 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 7 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 7 + cols )%cols, (y + k + rows)%rows);
    grid[(x + 6 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 6 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 6 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 6 + cols )%cols, (y + k + rows)%rows);
  }

  for (let k = -3; k <= -1; k++) {
    grid[(x + k + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + k + cols )%cols, (y + 13 + rows)%rows);
    grid[(x - k + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x - k + cols )%cols, (y + 13 + rows)%rows);
    grid[(x + k + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + k + cols )%cols, (y + 15 + rows)%rows);
    grid[(x - k + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x - k + cols )%cols, (y + 15 + rows)%rows);
    grid[(x + k + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x + k + cols )%cols, (y + 17 + rows)%rows);
    grid[(x - k + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x - k + cols )%cols, (y + 17 + rows)%rows);
  }
  grid[(x + 4 + cols)%cols][(y + 16 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 16 + rows)%rows);
  grid[(x - 4 + cols)%cols][(y + 16 + rows)%rows] = 1;
  drawCell((x - 4 + cols )%cols, (y + 16 + rows)%rows);

  grid[(x + 4 + cols)%cols][(y + 17 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 17 + rows)%rows);
  grid[(x - 4 + cols)%cols][(y + 17 + rows)%rows] = 1;
  drawCell((x - 4 + cols )%cols, (y + 17 + rows)%rows);
  for (let k = 18; k <= 20; k++) {
    grid[(x + 1 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 1 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 1 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 1 + cols )%cols, (y + k + rows)%rows);
    grid[(x + 1 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 1 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 1 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 1 + cols )%cols, (y + k + rows)%rows);
  }
  grid[(x + 2 + cols)%cols][(y + 19 + rows)%rows] = 1;
  drawCell((x + 2 + cols )%cols, (y + 19 + rows)%rows);
  grid[(x - 2 + cols)%cols][(y + 19 + rows)%rows] = 1;
  drawCell((x - 2 + cols )%cols, (y + 19 + rows)%rows);

  grid[(x + 3 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x + 3 + cols )%cols, (y + 20 + rows)%rows);
  grid[(x - 3 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x - 3 + cols )%cols, (y + 20 + rows)%rows);
  grid[(x + 4 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 20 + rows)%rows);
  grid[(x - 4 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x - 4 + cols )%cols, (y + 20 + rows)%rows);

  grid[(x - 6 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x - 6 + cols )%cols, (y + 20 + rows)%rows);
  grid[(x + 6 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x + 6 + cols )%cols, (y + 20 + rows)%rows);
  grid[(x - 6 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x - 6 + cols )%cols, (y + 20 + rows)%rows);

  grid[(x + 10 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x + 10 + cols )%cols, (y + 20 + rows)%rows);
  grid[(x - 10 + cols)%cols][(y + 20 + rows)%rows] = 1;
  drawCell((x - 10 + cols )%cols, (y + 20 + rows)%rows);
  grid[(x + 3 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x + 3 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 3 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x - 3 + cols )%cols, (y + 21 + rows)%rows);

  grid[(x + 2 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x + 2 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 2 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x - 2 + cols )%cols, (y + 21 + rows)%rows);

  grid[(x - 5 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x - 5 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x + 5 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x + 5 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 5 + cols)%cols][(y + 22 + rows)%rows] = 1;
  drawCell((x - 5 + cols )%cols, (y + 22 + rows)%rows);
  grid[(x + 5 + cols)%cols][(y + 22 + rows)%rows] = 1;
  drawCell((x + 5 + cols )%cols, (y + 22 + rows)%rows);

  grid[(x + 6 + cols)%cols][(y + 23 + rows)%rows] = 1;
  drawCell((x + 6 + cols )%cols, (y + 23 + rows)%rows);
  grid[(x - 6 + cols)%cols][(y + 23 + rows)%rows] = 1;
  drawCell((x - 6 + cols )%cols, (y + 23 + rows)%rows);

  grid[(x + 10 + cols)%cols][(y + 23 + rows)%rows] = 1;
  drawCell((x + 10 + cols )%cols, (y + 23 + rows)%rows);
  grid[(x - 10 + cols)%cols][(y + 23 + rows)%rows] = 1;
  drawCell((x - 10 + cols )%cols, (y + 23 + rows)%rows);

  grid[(x + 6 + cols)%cols][(y + 24 + rows)%rows] = 1;
  drawCell((x + 6 + cols )%cols, (y + 24 + rows)%rows);
  grid[(x - 6 + cols)%cols][(y + 24 + rows)%rows] = 1;
  drawCell((x - 6 + cols )%cols, (y + 24 + rows)%rows);

  grid[(x + 5 + cols)%cols][(y + 23 + rows)%rows] = 1;
  drawCell((x + 5 + cols )%cols, (y + 23 + rows)%rows);
  grid[(x + 4 + cols)%cols][(y + 23 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 23 + rows)%rows);
  grid[(x - 5 + cols)%cols][(y + 23 + rows)%rows] = 1;
  drawCell((x - 5 + cols )%cols, (y + 23 + rows)%rows);
  grid[(x - 4 + cols)%cols][(y + 23 + rows)%rows] = 1;
  drawCell((x - 4 + cols )%cols, (y + 23 + rows)%rows);

  grid[(x + 7 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x + 7 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 7 + cols)%cols][(y + 22 + rows)%rows] = 1;
  drawCell((x - 7 + cols )%cols, (y + 22 + rows)%rows);
  grid[(x + 7 + cols)%cols][(y + 22 + rows)%rows] = 1;
  drawCell((x + 7 + cols )%cols, (y + 22 + rows)%rows)
  grid[(x + 9 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x + 9 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 9 + cols)%cols][(y + 22 + rows)%rows] = 1;
  drawCell((x - 9 + cols )%cols, (y + 22 + rows)%rows);
  grid[(x + 9 + cols)%cols][(y + 22 + rows)%rows] = 1;
  drawCell((x + 9 + cols )%cols, (y + 22 + rows)%rows)
  grid[(x + 11 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x + 11 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 11 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x - 11 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 9 + cols)%cols][(y + 21 + rows)%rows] = 1;
  drawCell((x - 9 + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 7 + cols)%cols][(y + 21 + rows)%rows] = 1; // !!!!!!!!!!
  drawCell((x - 7  + cols )%cols, (y + 21 + rows)%rows);
  grid[(x - 11 + cols)%cols][(y + 22 + rows)%rows] = 1; // !!!!!!
  drawCell((x - 11 + cols )%cols, (y + 22 + rows)%rows);
  grid[(x + 11 + cols)%cols][(y + 22 + rows)%rows] = 1;
  drawCell((x + 11 + cols )%cols, (y + 22 + rows)%rows)
  
  for (let k = 23; k <= 25; k++) {
    grid[(x + 8 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 8 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 8 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 8 + cols )%cols, (y + k + rows)%rows);
    grid[(x + 8 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 8 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 8 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 8 + cols )%cols, (y + k + rows)%rows);
  }
  grid[(x + 7 + cols)%cols][(y + 25 + rows)%rows] = 1;
    drawCell((x + 7 + cols )%cols, (y + 25 + rows)%rows);
    grid[(x - 7 + cols)%cols][(y + 25 + rows)%rows] = 1;
    drawCell((x - 7 + cols )%cols, (y + 25 + rows)%rows);
  for (let k = -2; k <= 2; k++) {
    grid[(x + k + cols)%cols][(y + 24 + rows)%rows] = 1;
    drawCell((x + k + cols )%cols, (y + 24 + rows)%rows);
  }
  grid[(x + cols)%cols][(y + 25 + rows)%rows] = 1;
  drawCell((x + cols )%cols, (y + 25 + rows)%rows);

  for (let k = -5; k <= 5; k++) {
    grid[(x + k + cols)%cols][(y + 28 + rows)%rows] = 1;
    drawCell((x + k + cols )%cols, (y + 28 + rows)%rows);
  }
  grid[(x + cols)%cols][(y + 27 + rows)%rows] = 1;
  drawCell((x + cols )%cols, (y + 27 + rows)%rows);

  grid[(x + 2 + cols)%cols][(y + 27 + rows)%rows] = 1;
  drawCell((x + 2 + cols )%cols, (y + 27 + rows)%rows);
  grid[(x - 2 + cols)%cols][(y + 27 + rows)%rows] = 1;
  drawCell((x - 2 + cols )%cols, (y + 27 + rows)%rows);
  grid[(x + 5 + cols)%cols][(y + 27 + rows)%rows] = 1;
  drawCell((x + 5 + cols )%cols, (y + 27 + rows)%rows);
  grid[(x - 5 + cols)%cols][(y + 27 + rows)%rows] = 1;
  drawCell((x - 5 + cols )%cols, (y + 27 + rows)%rows);

  grid[(x + 3 + cols)%cols][(y + 30 + rows)%rows] = 1;
  drawCell((x + 3 + cols )%cols, (y + 30 + rows)%rows);
  grid[(x - 3 + cols)%cols][(y + 30 + rows)%rows] = 1;
  drawCell((x - 3 + cols )%cols, (y + 30 + rows)%rows);

  for (let k = 31; k <= 33; k++) {
    grid[(x + 2 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 2 + cols )%cols, (y + k + rows)%rows);
    grid[(x + 4 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 4 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 2 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 2 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 4 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 4 + cols )%cols, (y + k + rows)%rows);
  }
  for (let k = 32; k <= 33; k++) {
    grid[(x + 1 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 1 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 1 + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 1 + cols )%cols, (y + k + rows)%rows);
  }

  for (let k = 2; k <= 4; k++) {
    grid[(x + k + cols)%cols][(y + 35 + rows)%rows] = 1;
    drawCell((x + k + cols )%cols, (y + 35 + rows)%rows);
    grid[(x - k + cols)%cols][(y + 35 + rows)%rows] = 1;
    drawCell((x - k + cols )%cols, (y + 35 + rows)%rows);
  }
  grid[(x - 5 + cols)%cols][(y + 34 + rows)%rows] = 1;
  drawCell((x - 5 + cols )%cols, (y + 34 + rows)%rows);
  grid[(x + 5 + cols)%cols][(y + 34 + rows)%rows] = 1;
  drawCell((x + 5 + cols )%cols, (y + 34 + rows)%rows);

  grid[(x + 6 + cols)%cols][(y + 33 + rows)%rows] = 1;
  drawCell((x + 6 + cols )%cols, (y + 33 + rows)%rows);
  grid[(x + 7 + cols)%cols][(y + 33 + rows)%rows] = 1;
  drawCell((x + 7 + cols )%cols, (y + 33 + rows)%rows);
  grid[(x - 6 + cols)%cols][(y + 33 + rows)%rows] = 1;
  drawCell((x - 6 + cols )%cols, (y + 33 + rows)%rows);
  grid[(x + 7 + cols)%cols][(y + 34 + rows)%rows] = 1;
  drawCell((x + 7 + cols )%cols, (y + 34 + rows)%rows);
  grid[(x - 7 + cols)%cols][(y + 34 + rows)%rows] = 1;
  drawCell((x - 7 + cols )%cols, (y + 34 + rows)%rows);
  
  grid[(x - 7  + cols)%cols][(y + 35 + rows)%rows] = 1;
  drawCell((x - 7 + cols )%cols, (y + 35 + rows)%rows);
  grid[(x - 6  + cols)%cols][(y + 36 + rows)%rows] = 1;
  drawCell((x - 6 + cols )%cols, (y + 36 + rows)%rows);
  grid[(x - 5  + cols)%cols][(y + 36 + rows)%rows] = 1;
  drawCell((x - 5 + cols )%cols, (y + 36 + rows)%rows);

  for (let k = 37; k <= 39; k++) {
    grid[(x + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + cols )%cols, (y + k + rows)%rows);
  }
  grid[(x - 3  + cols)%cols][(y + 37 + rows)%rows] = 1;
  drawCell((x - 3 + cols )%cols, (y + 37 + rows)%rows);
  grid[(x + 3  + cols)%cols][(y + 37 + rows)%rows] = 1;
  drawCell((x + 3 + cols )%cols, (y + 37 + rows)%rows);
  grid[(x + 4  + cols)%cols][(y + 37 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 37 + rows)%rows);

  grid[(x - 2  + cols)%cols][(y + 38 + rows)%rows] = 1;
  drawCell((x - 2 + cols )%cols, (y + 38 + rows)%rows);
  grid[(x + 2  + cols)%cols][(y + 38 + rows)%rows] = 1;
  drawCell((x + 2 + cols )%cols, (y + 38 + rows)%rows);
  grid[(x - 4  + cols)%cols][(y + 38 + rows)%rows] = 1;
  drawCell((x - 4 + cols )%cols, (y + 38 + rows)%rows);
  grid[(x - 5  + cols)%cols][(y + 38 + rows)%rows] = 1;
  drawCell((x - 5 + cols )%cols, (y + 38 + rows)%rows);
  grid[(x - 6  + cols)%cols][(y + 38 + rows)%rows] = 1;
  drawCell((x - 6 + cols )%cols, (y + 38 + rows)%rows);
  grid[(x - 6  + cols)%cols][(y + 39 + rows)%rows] = 1;
  drawCell((x - 6 + cols )%cols, (y + 39 + rows)%rows);
  grid[(x - 5  + cols)%cols][(y + 40 + rows)%rows] = 1;
  drawCell((x - 5 + cols )%cols, (y + 40 + rows)%rows);
  grid[(x - 4  + cols)%cols][(y + 41 + rows)%rows] = 1;
  drawCell((x - 4 + cols )%cols, (y + 41 + rows)%rows);
  grid[(x - 3  + cols)%cols][(y + 41 + rows)%rows] = 1;
  drawCell((x - 3 + cols )%cols, (y + 41 + rows)%rows);
  grid[(x - 3  + cols)%cols][(y + 40 + rows)%rows] = 1;
  drawCell((x - 3 + cols )%cols, (y + 40 + rows)%rows);

  grid[(x - 2  + cols)%cols][(y + 39 + rows)%rows] = 1;
  drawCell((x - 2 + cols )%cols, (y + 39 + rows)%rows);
  grid[(x - 2  + cols)%cols][(y + 38 + rows)%rows] = 1;
  drawCell((x - 2 + cols )%cols, (y + 38 + rows)%rows);

  grid[(x + 5  + cols)%cols][(y + 38 + rows)%rows] = 1;
  drawCell((x + 5 + cols )%cols, (y + 38 + rows)%rows);
  grid[(x + 5  + cols)%cols][(y + 39 + rows)%rows] = 1;
  drawCell((x + 5 + cols )%cols, (y + 39 + rows)%rows);
  grid[(x + 4  + cols)%cols][(y + 39 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 39 + rows)%rows);

  grid[(x + 5  + cols)%cols][(y + 41 + rows)%rows] = 1;
  drawCell((x + 5 + cols )%cols, (y + 41 + rows)%rows);
  grid[(x + 4  + cols)%cols][(y + 41 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 41 + rows)%rows);
  grid[(x + 4  + cols)%cols][(y + 42 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 42 + rows)%rows);
  grid[(x + 4  + cols)%cols][(y + 43 + rows)%rows] = 1;
  drawCell((x + 4 + cols )%cols, (y + 43 + rows)%rows);
  grid[(x + 2  + cols)%cols][(y + 44 + rows)%rows] = 1;
  drawCell((x + 2 + cols )%cols, (y + 44 + rows)%rows);

  for (let k = 39; k <= 44; k++) {
    grid[(x + 2  + cols)%cols][(y + k + rows)%rows] = 1;
  drawCell((x + 2 + cols )%cols, (y + k + rows)%rows);
  }

  grid[(x + 3  + cols)%cols][(y + 44 + rows)%rows] = 1;
  drawCell((x + 3 + cols )%cols, (y + 44 + rows)%rows);

  grid[(x + cols)%cols][(y + 44 + rows)%rows] = 1;
  drawCell((x + cols )%cols, (y + 44 + rows)%rows);
  grid[(x + cols)%cols][(y + 43 + rows)%rows] = 1;
  drawCell((x + cols )%cols, (y + 43 + rows)%rows);
  grid[(x + cols)%cols][(y + 42 + rows)%rows] = 1;
  drawCell((x + cols )%cols, (y + 42 + rows)%rows);

  grid[(x - 2  + cols)%cols][(y + 43 + rows)%rows] = 1;
  drawCell((x - 2 + cols )%cols, (y + 43 + rows)%rows);
  grid[(x - 2  + cols)%cols][(y + 42 + rows)%rows] = 1;
  drawCell((x - 2 + cols )%cols, (y + 42 + rows)%rows);
  grid[(x - 1  + cols)%cols][(y + 44 + rows)%rows] = 1;
  drawCell((x - 1 + cols )%cols, (y + 44 + rows)%rows);
  grid[(x - 1  + cols)%cols][(y + 41 + rows)%rows] = 1;
  drawCell((x - 1 + cols )%cols, (y + 41 + rows)%rows);



  
  for (let k = 3; k <= 7; k++) {
    grid[(x + k  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x + k + cols )%cols, (y + 2 + rows)%rows);
    grid[(x - k  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x - k + cols )%cols, (y + 2 + rows)%rows);
  }

  for (let k = 2; k <= 3; k++) {
    grid[(x + 9  + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 9 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 9  + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 9 + cols )%cols, (y + k + rows)%rows);
    grid[(x + 10  + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x + 10 + cols )%cols, (y + k + rows)%rows);
    grid[(x - 10  + cols)%cols][(y + k + rows)%rows] = 1;
    drawCell((x - 10 + cols )%cols, (y + k + rows)%rows);
  }
  grid[(x - 11  + cols)%cols][(y + 4 + rows)%rows] = 1;
  drawCell((x - 11 + cols )%cols, (y + 4 + rows)%rows);
  grid[(x + 11  + cols)%cols][(y + 4 + rows)%rows] = 1;
  drawCell((x + 11 + cols )%cols, (y + 4 + rows)%rows);

  grid[(x + 12  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x + 12 + cols )%cols, (y + 2 + rows)%rows);
    grid[(x - 12  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x - 12 + cols )%cols, (y + 2 + rows)%rows);
    grid[(x + 13  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x + 13 + cols )%cols, (y + 2 + rows)%rows);
    grid[(x - 13  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x - 13 + cols )%cols, (y + 2 + rows)%rows);
    for (let k = 2; k <= 3; k++) {
      grid[(x + 15 + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x + 15 + cols )%cols, (y + k + rows)%rows);
      grid[(x - 16  + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x - 16 + cols )%cols, (y + k + rows)%rows);
      grid[(x + 16  + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x + 16 + cols )%cols, (y + k + rows)%rows);
      grid[(x - 15  + cols)%cols][(y + k + rows)%rows] = 1;
      drawCell((x - 15 + cols )%cols, (y + k + rows)%rows);
    }
    grid[(x - 17  + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x - 17 + cols )%cols, (y + 4 + rows)%rows);
    grid[(x + 17  + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x + 17 + cols )%cols, (y + 4 + rows)%rows);

    grid[(x - 18  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x - 18 + cols )%cols, (y + 2 + rows)%rows);
    grid[(x + 18  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x + 18 + cols )%cols, (y + 2 + rows)%rows);
    
    grid[(x - 19  + cols)%cols][(y + 3 + rows)%rows] = 1;
    drawCell((x - 19 + cols )%cols, (y + 3 + rows)%rows);
    grid[(x + 19  + cols)%cols][(y + 3 + rows)%rows] = 1;
    drawCell((x + 19 + cols )%cols, (y + 3 + rows)%rows);

    grid[(x - 21  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x - 21 + cols )%cols, (y + 2 + rows)%rows);
    grid[(x + 21  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x + 21 + cols )%cols, (y + 2 + rows)%rows);
    grid[(x + 21  + cols)%cols][(y + 3 + rows)%rows] = 1;
    drawCell((x + 21 + cols )%cols, (y + 3 + rows)%rows);
    grid[(x - 21  + cols)%cols][(y + 3 + rows)%rows] = 1;
    drawCell((x - 21 + cols )%cols, (y + 3 + rows)%rows);
    grid[(x - 22  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x - 22 + cols )%cols, (y + 2 + rows)%rows);    
    grid[(x + 22  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x + 22 + cols )%cols, (y + 2 + rows)%rows);




    grid[(x + 25  + cols)%cols][(y + 1 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y + 1 + rows)%rows);
    grid[(x + 26  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x + 26 + cols )%cols, (y + 2 + rows)%rows);
    grid[(x + 26  + cols)%cols][(y + 3 + rows)%rows] = 1;
    drawCell((x + 26 + cols )%cols, (y + 3 + rows)%rows);
    grid[(x + 26  + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x + 26 + cols )%cols, (y + 4 + rows)%rows);
    grid[(x + 25  + cols)%cols][(y + 5 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y + 5 + rows)%rows);
    grid[(x + 24  + cols)%cols][(y + 5 + rows)%rows] = 1;
    drawCell((x + 24 + cols )%cols, (y + 5 + rows)%rows);
    grid[(x + 23  + cols)%cols][(y + 5 + rows)%rows] = 1;
    drawCell((x + 23 + cols )%cols, (y + 5 + rows)%rows);
    grid[(x + 23  + cols)%cols][(y + 6 + rows)%rows] = 1;
    drawCell((x + 23 + cols )%cols, (y + 6 + rows)%rows);
    grid[(x + 22  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x + 22 + cols )%cols, (y + 7 + rows)%rows);
    grid[(x + 22  + cols)%cols][(y + 8 + rows)%rows] = 1;
    drawCell((x + 22 + cols )%cols, (y + 8 + rows)%rows);
    grid[(x + 22  + cols)%cols][(y + 9 + rows)%rows] = 1;
    drawCell((x + 22 + cols )%cols, (y + 9 + rows)%rows);
    grid[(x + 21  + cols)%cols][(y + 8 + rows)%rows] = 1;
    drawCell((x + 21 + cols )%cols, (y + 8 + rows)%rows);
    grid[(x + 19  + cols)%cols][(y + 8 + rows)%rows] = 1;
    drawCell((x + 19 + cols )%cols, (y + 8 + rows)%rows);
    grid[(x + 18  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x + 18 + cols )%cols, (y + 7 + rows)%rows);
    grid[(x + 17  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x + 17 + cols )%cols, (y + 7 + rows)%rows);
    grid[(x + 18  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x + 18 + cols )%cols, (y + 10 + rows)%rows);

    grid[(x + 21  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x + 21 + cols )%cols, (y + 10 + rows)%rows);
    grid[(x + 21  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x + 21 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x + 20  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x + 20 + cols )%cols, (y + 11 + rows)%rows);

    grid[(x + 23  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x + 23 + cols )%cols, (y + 10 + rows)%rows);
    grid[(x + 24  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x + 24 + cols )%cols, (y + 10 + rows)%rows);

    grid[(x + 25  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x + 26  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x + 26 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x + 27  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x + 27 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x + 28  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x + 29  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x + 29  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y + 10 + rows)%rows);
    grid[(x + 29  + cols)%cols][(y + 9 + rows)%rows] = 1;
    drawCell((x + 29 + cols )%cols, (y + 9 + rows)%rows);
    grid[(x + 28  + cols)%cols][(y + 8 + rows)%rows] = 1;
    drawCell((x + 28 + cols )%cols, (y + 8 + rows)%rows);
    grid[(x + 26  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x + 26 + cols )%cols, (y + 7 + rows)%rows);
    grid[(x + 25  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x + 25 + cols )%cols, (y + 7 + rows)%rows);

    grid[(x + 18  + cols)%cols][(y + 12 + rows)%rows] = 1;
    drawCell((x + 18 + cols )%cols, (y + 12 + rows)%rows);
    grid[(x + 19  + cols)%cols][(y + 12 + rows)%rows] = 1;
    drawCell((x + 19 + cols )%cols, (y + 12 + rows)%rows);
    grid[(x + 17  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + 17 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x + 16  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + 16 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x + 14  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + 14 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x + 13  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + 13 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x + 13  + cols)%cols][(y + 12 + rows)%rows] = 1;
    drawCell((x + 13 + cols )%cols, (y + 12 + rows)%rows);
    grid[(x + 14  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x + 14 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x + 14  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + 14 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x + 14  + cols)%cols][(y + 14 + rows)%rows] = 1;
    drawCell((x + 14 + cols )%cols, (y + 14 + rows)%rows);

    grid[(x + 12  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + 12 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x + 12  + cols)%cols][(y + 14 + rows)%rows] = 1;
    drawCell((x + 12 + cols )%cols, (y + 14 + rows)%rows);
    grid[(x + 11  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + 11 + cols )%cols, (y + 13 + rows)%rows);

    grid[(x + 12  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x + 12 + cols )%cols, (y + 17 + rows)%rows);
    grid[(x + 13  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x + 13 + cols )%cols, (y + 17 + rows)%rows);
    grid[(x + 12  + cols)%cols][(y + 18 + rows)%rows] = 1;
    drawCell((x + 12 + cols )%cols, (y + 18 + rows)%rows);

    grid[(x + 10  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x + 10 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x + 9  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x + 9 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x + 8 + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x + 8 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x + 7 + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + 7 + cols )%cols, (y + 15 + rows)%rows);

    grid[(x + 14  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x + 14 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x + 14  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + 14 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x + 15  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + 15 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x + 16  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + 16 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x + 17  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + 17 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x + 18  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + 18 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x + 19  + cols)%cols][(y + 14 + rows)%rows] = 1;
    drawCell((x + 19 + cols )%cols, (y + 14 + rows)%rows);
    grid[(x + 19  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x + 19 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x + 20  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x + 20 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x + 18  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x + 18 + cols )%cols, (y + 17 + rows)%rows);

    grid[(x + 21  + cols)%cols][(y + 18 + rows)%rows] = 1;
    drawCell((x + 21 + cols )%cols, (y + 18 + rows)%rows);
    grid[(x + 22  + cols)%cols][(y + 18 + rows)%rows] = 1;
    drawCell((x + 22 + cols )%cols, (y + 18 + rows)%rows);
    grid[(x + 22  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x + 22 + cols )%cols, (y + 17 + rows)%rows);
    grid[(x + 23  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x + 23 + cols )%cols, (y + 17 + rows)%rows);
    grid[(x + 23  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x + 23 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x + 23  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x + 23 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x + 24  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x + 24 + cols )%cols, (y + 16 + rows)%rows);

    grid[(x + 22  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + 22 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x + 21  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x + 21 + cols )%cols, (y + 13 + rows)%rows);
    





    grid[(x -  25  + cols)%cols][(y + 1 + rows)%rows] = 1;
    drawCell((x -  25 + cols )%cols, (y + 1 + rows)%rows);
    grid[(x -  26  + cols)%cols][(y + 2 + rows)%rows] = 1;
    drawCell((x -  26 + cols )%cols, (y + 2 + rows)%rows);
    grid[(x -  26  + cols)%cols][(y + 3 + rows)%rows] = 1;
    drawCell((x -  26 + cols )%cols, (y + 3 + rows)%rows);
    grid[(x -  26  + cols)%cols][(y + 4 + rows)%rows] = 1;
    drawCell((x -  26 + cols )%cols, (y + 4 + rows)%rows);
    grid[(x -  25  + cols)%cols][(y + 5 + rows)%rows] = 1;
    drawCell((x -  25 + cols )%cols, (y + 5 + rows)%rows);
    grid[(x -  24  + cols)%cols][(y + 5 + rows)%rows] = 1;
    drawCell((x -  24 + cols )%cols, (y + 5 + rows)%rows);
    grid[(x -  23  + cols)%cols][(y + 5 + rows)%rows] = 1;
    drawCell((x -  23 + cols )%cols, (y + 5 + rows)%rows);
    grid[(x -  23  + cols)%cols][(y + 6 + rows)%rows] = 1;
    drawCell((x -  23 + cols )%cols, (y + 6 + rows)%rows);
    grid[(x -  22  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x -  22 + cols )%cols, (y + 7 + rows)%rows);
    grid[(x -  22  + cols)%cols][(y + 8 + rows)%rows] = 1;
    drawCell((x -  22 + cols )%cols, (y + 8 + rows)%rows);
    grid[(x -  22  + cols)%cols][(y + 9 + rows)%rows] = 1;
    drawCell((x -  22 + cols )%cols, (y + 9 + rows)%rows);
    grid[(x -  21  + cols)%cols][(y + 8 + rows)%rows] = 1;
    drawCell((x -  21 + cols )%cols, (y + 8 + rows)%rows);
    grid[(x -  19  + cols)%cols][(y + 8 + rows)%rows] = 1;
    drawCell((x -  19 + cols )%cols, (y + 8 + rows)%rows);
    grid[(x -  18  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x -  18 + cols )%cols, (y + 7 + rows)%rows);
    grid[(x -  17  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x -  17 + cols )%cols, (y + 7 + rows)%rows);
    grid[(x -  18  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x -  18 + cols )%cols, (y + 10 + rows)%rows);

    grid[(x -  21  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x -  21 + cols )%cols, (y + 10 + rows)%rows);
    grid[(x -  21  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x -  21 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x -  20  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x -  20 + cols )%cols, (y + 11 + rows)%rows);

    grid[(x -  23  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x -  23 + cols )%cols, (y + 10 + rows)%rows);
    grid[(x -  24  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x -  24 + cols )%cols, (y + 10 + rows)%rows);

    grid[(x -  25  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x -  25 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x -  26  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x -  26 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x -  27  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x -  27 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x -  28  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x -  28 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x -  29  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x -  29 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x -  29  + cols)%cols][(y + 10 + rows)%rows] = 1;
    drawCell((x -  29 + cols )%cols, (y + 10 + rows)%rows);
    grid[(x -  29  + cols)%cols][(y + 9 + rows)%rows] = 1;
    drawCell((x -  29 + cols )%cols, (y + 9 + rows)%rows);
    grid[(x -  28  + cols)%cols][(y + 8 + rows)%rows] = 1;
    drawCell((x -  28 + cols )%cols, (y + 8 + rows)%rows);
    grid[(x -  26  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x -  26 + cols )%cols, (y + 7 + rows)%rows);
    grid[(x -  25  + cols)%cols][(y + 7 + rows)%rows] = 1;
    drawCell((x -  25 + cols )%cols, (y + 7 + rows)%rows);

    grid[(x -  18  + cols)%cols][(y + 12 + rows)%rows] = 1;
    drawCell((x -  18 + cols )%cols, (y + 12 + rows)%rows);
    grid[(x -  19  + cols)%cols][(y + 12 + rows)%rows] = 1;
    drawCell((x -  19 + cols )%cols, (y + 12 + rows)%rows);
    grid[(x -  17  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x -  17 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x -  16  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x -  16 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x -  14  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x -  14 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x -  13  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x -  13 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x -  13  + cols)%cols][(y + 12 + rows)%rows] = 1;
    drawCell((x -  13 + cols )%cols, (y + 12 + rows)%rows);
    grid[(x -  14  + cols)%cols][(y + 11 + rows)%rows] = 1;
    drawCell((x -  14 + cols )%cols, (y + 11 + rows)%rows);
    grid[(x -  14  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x -  14 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x -  14  + cols)%cols][(y + 14 + rows)%rows] = 1;
    drawCell((x -  14 + cols )%cols, (y + 14 + rows)%rows);

    grid[(x -  12  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x -  12 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x -  12  + cols)%cols][(y + 14 + rows)%rows] = 1;
    drawCell((x -  12 + cols )%cols, (y + 14 + rows)%rows);
    grid[(x -  11  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x -  11 + cols )%cols, (y + 13 + rows)%rows);

    grid[(x -  12  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x -  12 + cols )%cols, (y + 17 + rows)%rows);
    grid[(x -  13  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x -  13 + cols )%cols, (y + 17 + rows)%rows);
    grid[(x -  12  + cols)%cols][(y + 18 + rows)%rows] = 1;
    drawCell((x -  12 + cols )%cols, (y + 18 + rows)%rows);

    grid[(x -  10  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x -  10 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x -  9  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x -  9 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x -  8 + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x -  8 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x -  7 + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x -  7 + cols )%cols, (y + 15 + rows)%rows);

    grid[(x -  14  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x -  14 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x -  14  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x -  14 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x -  15  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x -  15 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x -  16  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x -  16 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x -  17  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x -  17 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x -  18  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x -  18 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x -  19  + cols)%cols][(y + 14 + rows)%rows] = 1;
    drawCell((x -  19 + cols )%cols, (y + 14 + rows)%rows);
    grid[(x -  19  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x -  19 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x -  20  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x -  20 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x -  18  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x -  18 + cols )%cols, (y + 17 + rows)%rows);

    grid[(x -  21  + cols)%cols][(y + 18 + rows)%rows] = 1;
    drawCell((x -  21 + cols )%cols, (y + 18 + rows)%rows);
    grid[(x -  22  + cols)%cols][(y + 18 + rows)%rows] = 1;
    drawCell((x -  22 + cols )%cols, (y + 18 + rows)%rows);
    grid[(x -  22  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x -  22 + cols )%cols, (y + 17 + rows)%rows);
    grid[(x -  23  + cols)%cols][(y + 17 + rows)%rows] = 1;
    drawCell((x -  23 + cols )%cols, (y + 17 + rows)%rows);
    grid[(x -  23  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x -  23 + cols )%cols, (y + 16 + rows)%rows);
    grid[(x -  23  + cols)%cols][(y + 15 + rows)%rows] = 1;
    drawCell((x -  23 + cols )%cols, (y + 15 + rows)%rows);
    grid[(x -  24  + cols)%cols][(y + 16 + rows)%rows] = 1;
    drawCell((x -  24 + cols )%cols, (y + 16 + rows)%rows);

    grid[(x -  22  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x -  22 + cols )%cols, (y + 13 + rows)%rows);
    grid[(x -  21  + cols)%cols][(y + 13 + rows)%rows] = 1;
    drawCell((x - 21 + cols )%cols, (y + 13 + rows)%rows);
} 
} // 9

function AddSierpinskiTriangle(i = mouseX, j = mouseY) {
  if (clickAvailable) {
    let x = floor(i / resolution);
    let y = floor(j / resolution);
    if (ValidateMousePosition(x, y) == 1) {
        for (let k = -255; k <= 256; k++) {
          grid[(x + k + cols)%cols][(y + rows)%rows] = 1;
          drawCell((x + k +  cols )%cols, (y + rows)%rows);
         // grid[(x + cols)%cols][(y + k + rows)%rows] = 1;
          //drawCell((x +  cols )%cols, (y + k + rows)%rows);
        }
    }
  }
}
function EraseField() {
  grid = makeGrid();
  //ChangeMode();
} // E
