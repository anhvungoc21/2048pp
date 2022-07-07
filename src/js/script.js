import Grid from "./classes/Grid.js";
import Tile from "./classes/Tile.js";

import setupInput from "./helpers/handleInput.js";
import handleNavbar from "./helpers/handleNavbar.js";

// TODO:
/*
- Make dark mode pretty and other colorings
- Make Top bar and Score board look better
- Implement color buttons
- Implement Scoreboard choosing
- Implement score updating
- Find a way to speed up input-allowing speed
*/

/**
 * Main function to set up and start game
 */
function setupGame() {
  // Elements:
  const gameBoard = document.getElementById("game-board");

  // Create game board grid
  const grid = new Grid(gameBoard);

  // Generate 2 random tiles
  grid.randomEmptyCell().tile = new Tile(gameBoard);
  grid.randomEmptyCell().tile = new Tile(gameBoard);

  // Set up input listener
  setupInput(grid, gameBoard);
}

// Start Game:
setupGame();
handleNavbar();
