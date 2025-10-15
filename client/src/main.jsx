import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from  "./components/Record";
import RecordList from "./components/RecordList";
import "./index.css";
// set up our router. Show all of our records
const router = createBrowserRouter([
  {
    path: "/", // root route
    element: <App />, // display our app
    children: [
      {
        path: "/",
        element: <RecordList />, // all of our records
      },
    ],
  },
  {
    path: "/edit/:id", // edit route
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Record />, // only shows a single record
      },
    ],
  },
  {
    path: "/create", // create route
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Record />, // only shows a single record
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
    <RouterProvider router={router} />
 </React.StrictMode>
);