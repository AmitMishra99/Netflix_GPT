import Header from "./Header";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";

const Browse = () => {
  
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      api_options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

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
    <div className="flex justify-between">
      <Header />
      <div className="flex z-10">
        <img
          className="my-3 h-12 w-12 ml-1 rounded-[50%]"
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
    </div>
  );
};

export default Browse;
