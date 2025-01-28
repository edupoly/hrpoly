import '../node_modules/bootstrap/dist/js/bootstrap.min'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './features/utils/Home';
import Registration from './features/user/Registration';
import Login from './features/user/Login';
import Myleaves from './features/leaves/Myleaves';
import Leaves from './features/leaves/Leaves';
import Allleaves from './features/leaves/Allleaves';
import Applyleave from './features/leaves/Applyleave';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/myleaves',
        element:<Myleaves></Myleaves>,
        children:[
          {
            path:"/myleaves/allleaves",
            element:<Allleaves></Allleaves>
          },
          {
            path:"/myleaves/applyleave",
            element:<Applyleave></Applyleave>
          }
        ]
      },
      {
        path:'/leaves',
        element:<Leaves></Leaves>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
