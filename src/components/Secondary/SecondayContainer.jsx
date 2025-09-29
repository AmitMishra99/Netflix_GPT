import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondayContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="  bg-black">
        <div className="-mt-80 relative pl-5">
          <MoviesList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MoviesList
            title={"Trending Movies"}
            movies={movies.trendingMovies}
          />
          <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
          <MoviesList
            title={"Upcoming Movies "}
            movies={movies.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondayContainer;
