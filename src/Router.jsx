import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Greeting from './greeting.jsx'
import Welcome from './welcome.jsx'
import Message from './message.jsx'
import Count from './count.jsx'
import Event from './event.jsx'
import NameList from './NameList.jsx'
import ClassInput from './classinput.jsx'
import Profile from './profile.jsx';
import ErrorPage from './NotFound.jsx';
import ErrorBoundary from "./ErrorBoundary.jsx";

const Router = () =>{
    
    const router = createBrowserRouter([
        {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary/>
        },
    
        {
        path: "profile/",                   //not working default path "profile/name"
        element: <Profile />
        // children: [
        // { index: true , element : <DefaultProfile />},
        // { path: "spinach", element: <Spinach /> },
            //{ path: "popeye", element: <Popeye /> },
        // ],
        },

    ]);

    return <RouterProvider router={router} />;

}


  export default Router;