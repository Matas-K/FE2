import React from 'react';
import Card from './Card';
import Genre from './Genre';
import axios from 'axios';
import {endpoints} from '../../config';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movieList: [],
            genreList: [],
            activeGenreId: 0,
            likeMovies: {},
        };

        this.toggleActiveGenre = this.toggleActiveGenre.bind(this);
        this.toggleMovieLike = this.toggleMovieLike.bind(this);
    }

    componentDidMount() {
        this.requestMovies();
        this.requestGenres();
    }

    requestMovies = () => {
        if (this.state.activeGenreId > 0) {
            this.requestGenreMovies(this.state.activeGenreId);
        }
        else {
            this.requestPopularMovies();
        }
    };

    requestPopularMovies = () => {
        axios
            .get(endpoints.mostPopularMovies())
            .then((response) => {
                this.setState({
                    movieList: response.data.results,
                });
            })
            .catch((error) => console.log(error.response));
    };

    requestGenreMovies = (genreId) => {
        axios
            .get(endpoints.genreMovies(genreId))
            .then((response) => {
                this.setState({
                    movieList: response.data.results,
                });
            })
            .catch((error) => console.log(error.response));
    };

    requestGenres = () => {
        axios
            .get(endpoints.genres())
            .then((response) => {
                this.setState({
                    genreList: response.data.genres,
                });
            })
            .catch((error) => console.log(error.response));
    };

    toggleActiveGenre(genreId) {
        if (genreId === this.state.activeGenreId) {
            genreId = 0;
        }
        this.setState({
            activeGenreId: genreId,
        }, () => {
            this.requestMovies();
        });
    };

    isGenreActive = (genreId) => {
        return this.state.activeGenreId === genreId;
    };

    toggleMovieLike(movieId) {
        this.setState((prevState) => {
            let likeStatus = prevState.likeMovies[movieId] === undefined ? false : prevState.likeMovies[movieId];
            prevState.likeMovies[movieId] = !likeStatus;

            return {
                likeMovies: prevState.likeMovies
            }
        });
    };

    isMovieLiked = (movieId) => {
        return this.state.likeMovies[movieId] !== undefined && this.state.likeMovies[movieId];
    };

    render() {
        const {movieList, genreList} = this.state;

        return (
            <React.Fragment>
                <div className="genres">
                    {genreList.map((genre) => (
                        <Genre key={genre.id}
                               data={genre}
                               isActive={this.isGenreActive(genre.id)}
                               toogleActive={this.toggleActiveGenre}/>
                    ))}
                </div>
                {movieList.map((movie) => (
                    <Card key={movie.id}
                          data={movie}
                          isLiked={this.isMovieLiked(movie.id)}
                          toogleLike={this.toggleMovieLike}/>
                ))}
            </React.Fragment>
        );
    }
}

export default App;
