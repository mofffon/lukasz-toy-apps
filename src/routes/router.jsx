import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";

import PuzzleGame from "./../components/puzzle/PuzzleGame";
import Queens from "./../components/queensOnChessBoard/queensOnChessGame";
import SnakeGame from "./../components/snake/SnakeGame";
import GameOfLife from "./../components/gameOfLife/GameOfLife";

const router = createBrowserRouter([
  { path: "/lukasz-toy-apps", element: <HomePage /> },
  { path: "/", element: <HomePage /> },
  { path: "/queens", element: <Queens /> },
  { path: "/snake", element: <SnakeGame /> },
  { path: "/puzzle", element: <PuzzleGame /> },
  { path: "/gameOfLife", element: <GameOfLife /> },
]);

export default router;
