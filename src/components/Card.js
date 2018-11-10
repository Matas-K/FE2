import React from 'react';
import {getImageUrl} from '../../config';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            summaryShowing: false,
        };
        this.toogleLike = props.toogleLike;
    }

    toggleSummary = () => {
        this.setState((prevState) => {
            return {
                summaryShowing: !prevState.summaryShowing
            }
        });
    };

    setLike = () => {
        const {
            data: {
                id,
            },
        } = this.props;

        this.toogleLike(id);
    };

    render() {
        const {summaryShowing} = this.state;
        const {
            isLiked,
            data: {
                poster_path,
                original_title,
                overview,
                release_date,
                vote_average,
                vote_count,
            },
        } = this.props;

        return (
            <div className="card">
                <div className="card__image" style={{backgroundImage: `url(${getImageUrl(poster_path)})`}}/>

                <div className="card__title">
                    {original_title}
                </div>

                <div className="card__like" onClick={() => this.setLike()}>
                    <i className={'fa ' + (isLiked ? 'fa-heart' : 'fa-heart-o')}/>
                </div>

                <div className="card__subtitle">
                    <span>{release_date}</span>
                    <span>{vote_average} ({vote_count} votes)</span>
                </div>

                {summaryShowing
                    ? (
                        <div className="card-info">
                            <div className="card-info__header">Summary</div>
                            <div className="card-info__description">
                                {overview}
                            </div>
                        </div>
                    )
                    : null
                }

                <div className="button" onClick={() => this.toggleSummary()}>Show summary</div>
            </div>

        );
    }
}

export default Card;
