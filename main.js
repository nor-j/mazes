// The depth-first search algorithm of maze generation is frequently implemented using backtracking. This can be described with a following recursive routine:

// 1. Make the initial cell the current cell and mark as visited
// 2. while there are unvisited cells
//  1.if the current cell has any neighbours which have not been visited
//    1. choose randomly one of the unvisited neighbours
//    2. push the current cell to the stack
//    3. remove the wall betrween curretn cell and chose cell
//    4. make the chosen cell the curretn cell and mark as visited
//  2. else if stack is not empty
//    1. pop a cell from the stack
//    2. make it the current cell

let grid;
let bwidth = 25;
let bcolor = 150;
let divide = 6;
let righwall;
let go = false;

function setup() {
  createCanvas(windowWidth, windowHeight - 1);
  let easyn = width
  let easym = height /* 10 */ 
  let n = 60//floor(min(easyn, ((width - 50)/bwidth))) + 1;
  let m = 30//floor(min(easym, ((height - 50)/bwidth))) - 2;
  console.log(n, m)
  grid = new Grid(n, m, bwidth, bcolor, divide);
  rightwall = new Scout(grid);
  
}

function draw() {
  //frameRate(15)
  background(25);
  grid.update();
  if (go) rightwall.wall_follower();
}

function mousePressed() {
  grid.event = 'mousePressed'
}

function keyReleased() {
  grid.event = 'keyReleased'
  if (keyCode == 13) {
    go = true;
  }
}

function windowResized()
 {
   resizeCanvas(windowWidth, windowHeight)
 }