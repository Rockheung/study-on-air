type Direction = "up" | "down" | "left" | "right";
type Position = {
  x: number;
  y: number;
};

let position: Position = { x: 0, y: 0 };
function move(direction: Direction): void {
  switch (direction) {
    case "up":
      position = { ...position, y: position.y + 1 };
      break;
    case "down":
      position = { ...position, y: position.y - 1 };
      break;
    case "left":
      position = { ...position, x: position.x - 1 };
      break;
    case "right":
      position = { ...position, x: position.x + 1 };
      break;
    default:
      throw new Error("Nowhere to go");
  }
}

/**
 * Let's make a game 🕹
 */
console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
