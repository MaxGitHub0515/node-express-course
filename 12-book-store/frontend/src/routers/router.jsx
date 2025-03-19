import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
              index:true,
              element: <div>Home</div>, 
            },
            {
                path:"orders",
                element: <div>Orders</div>
            },
            {
              path: "about",
              element: <div>About</div>, 
            },
            {
                path:"",
                element: <div></div>
            },
        ]
    }
])


  export default router;



  