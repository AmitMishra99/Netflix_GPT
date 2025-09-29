import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import PrimaryContainer from "./Primary/PrimaryContainer";
import SecondayContainer from "./Secondary/SecondayContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { toggleGPTSearch } from "../store/gptSlice";
import GPTPage from "./GPT/GPTPage";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

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
  const handleGPTSeachClick = () => {
    dispatch(toggleGPTSearch());
  };

  return (
    <div>
      <div className="mt-1 z-10 absolute w-full flex justify-end ">
        <button
          onClick={handleGPTSeachClick}
          className=" flex justify-center items-center
            mx-4 my-3 px-4 py-2 
            bg-pink-500 text-white 
            font-semibold rounded-full 
            shadow-md hover:bg-pink-600 
            transition duration-300 ease-in-out 
            transform hover:scale-105
          "
        >
          {showGPTSearch ? "Home " : "GPT Search"}
          {showGPTSearch ? null : (
            <MagnifyingGlassIcon className="w-5 h-5 mt-1 ml-1" />
          )}
        </button>
        <img
          className="z-10 my-3 h-12 w-12 rounded-[50%]"
          src={user?.photoURL}
          alt={user?.displayName || "User"}
        />
        <button
          onClick={handleSignOut}
          className="
            mx-4 my-3 px-5 py-2 
            bg-red-600 text-white 
            font-semibold rounded-full 
            shadow-lg hover:bg-red-700 
            transition duration-300 ease-in-out 
            transform hover:scale-105"
        >
          Sign Out
        </button>
      </div>
      {showGPTSearch ? (
        <GPTPage />
      ) : (
        <>
          <PrimaryContainer />
          <SecondayContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
