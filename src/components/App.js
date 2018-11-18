import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { setMovieList, getPopularMovies } from "../actions/movies-actions";
import { addMovieHeart, removeMovieHeart } from "../actions/hearts-actions";
import { addLogEvent } from "../actions/logs-acions";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { onGetPopularMovies, addLogEvent } = this.props;
    onGetPopularMovies();
    addLogEvent('Aplikacija uzkrauta');
  }

  setMovieList = (movieList) => {
    const { onSetMovieList } = this.props;
    onSetMovieList(movieList);
  };

  addHeart = (movie) => {
    const { onAddMovieHeart, addLogEvent } = this.props;
    onAddMovieHeart(movie.id);
    addLogEvent('Uzdeta sirdele filmui '+movie.title);
  };

  removeHeart = (movie) => {
    const { onRemoveMovieHeart, addLogEvent } = this.props;
    onRemoveMovieHeart(movie.id);
    addLogEvent('Nuimta sirdele filmui '+movie.title);
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
              onAddHeart={() => this.addHeart(movie)}
              onRemoveHeart={() => this.removeHeart(movie)}
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
      logs: state.logs,
    };
  },
  //mapActionsToProps
  (dispatch) => {
    return {
      onGetPopularMovies: () => dispatch(getPopularMovies()),
      onSetMovieList: (list) => dispatch(setMovieList(list)),

      onAddMovieHeart: (movieId) => dispatch(addMovieHeart(movieId)),
      onRemoveMovieHeart: (movieId) => dispatch(removeMovieHeart(movieId)),

      addLogEvent: (message) => dispatch(addLogEvent(message)),
    };
  }
)(App);
