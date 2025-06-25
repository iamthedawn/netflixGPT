import Login from "./Login";
import Browse from "./Browse.";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {
  

  const appRouter = createBrowserRouter([
    {
      element: <Login />,
      path: "/",
    },
    {
      element: <Browse />,
      path: "/browse",
    },
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
