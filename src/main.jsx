import './index.css'
import { createRoot } from "react-dom/client";
import App from "./App";
import route from './routes/router';
import { RouterProvider } from "react-router-dom";

const root = document.getElementById('root');
createRoot(root).render(<RouterProvider router={route} />);