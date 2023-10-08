import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingVideo from '../hooks/useUpcomingMovies';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzVlM2VkYmMzNDY2YmUyZWEwZjA1MzczNDcyNGI4MyIsInN1YiI6IjY1MjFiNDVhMDcyMTY2MDBhY2I4NzQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWwE4T9AfYFX4IaHoEx6YCrVmHNa5-56m7sweWSQy8Q'
  //   }
  // };
  // const getMovieList = async () => {
  //   const fetchData = await fetch(url, options);
  //   const data = await fetchData.json();
  //   console.log(data);
  // }
  // getMovieList();

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingVideo();
  useTrendingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
