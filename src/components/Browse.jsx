import Header from "./Header";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./Primary/PrimaryContainer";
import SecondayContainer from "./Secondary/SecondayContainer";

const Browse = () => {
  
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useNowPlayingMovies();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div >
      <Header />
      <div className="mt-1 z-10 absolute w-full flex justify-end ">
          <img
          className="z-10 my-3 h-12 w-12 rounded-[50%]"
          src={user?.photoURL}
          alt={user?.displayName || "User"}
        />
        <button
          onClick={handleSignOut}
          className="mx-4 my-3 px-2 ml-2 rounded-2xl bg-blue-400 text-black z-10"
        >
          Sign Out
        </button>
      </div>
      <PrimaryContainer/>
      <SecondayContainer/>

      
    </div>
  );
};

export default Browse;
