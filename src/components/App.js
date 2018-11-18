import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { setMovieList, getPopularMovies } from "../actions/movies-actions";
import { addMovieHeart, removeMovieHeart } from "../actions/hearts-actions";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { onGetPopularMovies } = this.props;
    onGetPopularMovies();
  }

  setMovieList = (movieList) => {
    const { onSetMovieList } = this.props;
    onSetMovieList(movieList);
  };

  addHeart = (id) => {
    const { onAddMovieHeart } = this.props;
    onAddMovieHeart(id);
  };

  removeHeart = (id) => {
    const { onRemoveMovieHeart } = this.props;
    onRemoveMovieHeart(id);
  };

  render() {
    const { movies, hearted } = this.props;

    return (
      <React.Fragment>
        <Genres onChangeList={this.setMovieList} />

        <div className="cards">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              isHearted={hearted.includes(movie.id)}
              onAddHeart={() => this.addHeart(movie.id)}
              onRemoveHeart={() => this.removeHeart(movie.id)}
              movie={movie}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  //mapStateToProps
  (state) => {
    return {
      movies: state.movies.list,
      hearted: state.hearted,
    };
  },
  //mapActionsToProps
  (dispatch) => {
    return {
      onGetPopularMovies: () => dispatch(getPopularMovies()),
      onSetMovieList: (list) => dispatch(setMovieList(list)),

      onAddMovieHeart: (movieId) => dispatch(addMovieHeart(movieId)),
      onRemoveMovieHeart: (movieId) => dispatch(removeMovieHeart(movieId)),
    };
  }
)(App);
