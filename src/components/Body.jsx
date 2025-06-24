import Login from "./Login";
import Browse from "./Browse.";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Redux/slice/userSlice";

const Body = () => {
  const disptach = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        disptach(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        disptach(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
