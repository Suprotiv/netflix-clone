import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Account from './screen/Account';
import { AuthContextProvider } from './context/Authcontext';
import ProtectedRoute from './components/protectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "/signup",
    element:<Signup/>,
  },
  {
    path: "/account",
    element:<ProtectedRoute><Account/></ProtectedRoute>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
     <RouterProvider router={router} />
     </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
