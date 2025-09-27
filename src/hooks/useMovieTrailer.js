import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addTrailerMovie } from "../store/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
        const dispatch = useDispatch();
  // console.log(trailerVideo.key)
  const getMoviesVideos = async () => {
    // 976573
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/976573/videos?language=en-US",
      api_options
    );
    const json = await data.json();
    // console.log(json.results);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer.key);
    dispatch(addTrailerMovie(trailer))
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
}

export default useMovieTrailer;