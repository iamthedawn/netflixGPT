import { signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Redux/slice/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleShowGPT } from "../utils/Redux/slice/gptSlice";
import { switchWebsiteLanguage } from "../utils/Redux/slice/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((state) => state.gpt?.showGPT);
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSrchClick = () => {
    disptach(toggleShowGPT());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        // User is signed out
        disptach(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={LOGO} alt="netflixLogo" />
      {location?.pathname.includes("browse") && (
        <div className="flex justify-center items-center gap-2">
          {showGptSearch && (
            <select
              className="py-2 px-4 m-2 bg-red-700 text-white cursor-pointer"
              onChange={(e) => disptach(switchWebsiteLanguage(e.target.value))}
            >
              {SUPPORTED_LANGUAGES?.map((lang) => {
                return <option value={lang?.identifier}>{lang?.name}</option>;
              })}
            </select>
          )}
          <button
            onClick={handleGptSrchClick}
            className="text-black py-2 px-4 m-2 bg-white hover:bg-[#ffffffa6]"
          >
            {!showGptSearch ? "GPT search" : "Homepage"}
          </button>
          <img className="w-10 h-10" src={user?.photoURL} alt="userIcon" />
          <button className="text-white cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
