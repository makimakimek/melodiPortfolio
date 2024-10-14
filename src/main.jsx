import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Skinmate from './Skinmate.jsx';
import CountdownTimer from './CountdownTimer.jsx';
import InnoPromoo from './InnoPromoo.jsx';
import MemoryGame from './MemoryGame.jsx';
import EtchASketch from './EtchASketch.jsx';
import CatAdoption from './CatAdoption.jsx';
import Wordle from './Wordle.jsx';
import ShoppingList from './ShoppingList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Skinmate",
    element: <Skinmate />,
  },
  {
    path: "CountdownTimer",
    element: <CountdownTimer />,
  },
  {
    path: "InnoPromoo",
    element: <InnoPromoo />,
  },
  {
    path: "MemoryGame",
    element: <MemoryGame />,
  },
  {
    path: "EtchASketch",
    element: <EtchASketch />,
  },
  {
    path: "CatAdoption",
    element: <CatAdoption />,
  },
  {
    path: "Wordle",
    element: <Wordle />,
  },
  {
    path: "ShoppingList",
    element: <ShoppingList />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)