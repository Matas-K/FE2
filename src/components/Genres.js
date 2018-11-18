import React from 'react';
import { connect } from 'react-redux';
import { requestGenres, requestGenreMovies } from "../actions/genres-actions";
import { addLogEvent } from "../actions/logs-acions";

class Genres extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { onRequestGenres } = this.props;
    onRequestGenres();
  }

  requestGenresMovies = (genre) => {
    const { onRequestGenreMovies, addLogEvent } = this.props;
    onRequestGenreMovies(genre.id);
    addLogEvent('Pakeistas zanras i '+genre.name);
  };

  render() {
    const { genres } = this.props;

    return (
      <div className="genres">
        {genres.list.map((genre) => (
          <div key={genre.id} className="genre" onClick={() => this.requestGenresMovies(genre)}>
            {genre.name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
    //mapStateToProps
    (state) => {
        return {
            genres: state.genres,
        };
    },
    //mapActionsToProps
    (dispatch) => {
        return {
            onRequestGenres: () => dispatch(requestGenres()),
            onRequestGenreMovies: (genreId) => dispatch(requestGenreMovies(genreId)),
            addLogEvent: (message) => dispatch(addLogEvent(message)),
        };
    }
)(Genres);