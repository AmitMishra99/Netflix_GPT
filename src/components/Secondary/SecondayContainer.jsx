import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondayContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div>
        <MoviesList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MoviesList
          title={"Trending Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList
          title={"Upcoming Movies "}
          movies={movies.nowPlayingMovies}
        />
      </div>
    )
  );
};

export default SecondayContainer;
