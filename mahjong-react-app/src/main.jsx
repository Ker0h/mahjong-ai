import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/home/Home'
import Rules from './components/rules/Rules'
import Overview from './components/rules/Overview'
import Tiles from './components/rules/Tiles'
import Rounds from './components/rules/Rounds'
import Starting from './components/rules/Starting'
import Melds from './components/rules/Melds'
import Winning from './components/rules/Winning'
import Scoring from './components/rules/Scoring'
import History from './components/history/History'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    redirect: "/home",
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "rules",
        element: <Rules />,
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "tiles",
            element: <Tiles />,
          },
          {
            path: "rounds",
            element: <Rounds />,
          },
          {
            path: "starting",
            element: <Starting />,
          },
          {
            path: "melds",
            element: <Melds />,
          },
          {
            path: "winning",
            element: <Winning />,
          },
          {
            path: "scoring",
            element: <Scoring />,
          },
        ],
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
