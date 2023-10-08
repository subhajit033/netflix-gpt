import MovieCard from './MovieCard';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
const MovieList = ({ title, movies }) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 4,
      partialVisibilityGutter: 30,
    },
  };

  //before render the crousel component , the must must have a idea for how many element will gominside this ,
  //that's why the length property is required'
  return (
    movies &&
    movies.length > 0 && (
      <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={true}
          className=''
          containerClass='container'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=''
          slidesToSlide={2}
          swipeable
        >
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </Carousel>
      </div>
    )
  );
};
export default MovieList;
