import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import Queens from "./../components/queensOnChessBoard/queensOnChessGame";
import SnakeGame from "../components/snake/SnakeGame";

const router = createBrowserRouter([
  { path: "/lukasz-toy-apps", element: <HomePage /> },
  { path: "/", element: <HomePage /> },
  { path: "/queens", element: <Queens /> },
  { path: "/snake", element: <SnakeGame /> },
]);

export default router;
