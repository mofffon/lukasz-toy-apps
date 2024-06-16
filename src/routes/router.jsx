import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import Queens from "./../components/queensOnChessBoard/queensOnChessGame";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/queens", element: <Queens /> },
  { path: "/snake", element: <Snake /> },
]);

export default router;
