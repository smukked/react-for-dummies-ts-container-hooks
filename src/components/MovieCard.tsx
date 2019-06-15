import React from 'react';

import IMovie from '../interfaces/IMovie';
import AppStore from '../Models/AppStore';

interface IMovieCardProps extends AppStore {
    movie: IMovie;
}

const MovieCard: React.FC<IMovieCardProps> = (props) => {
    return (
        <div className="card" style={{ width: "18rem", margin: "0 20px 20px 0" }}>
            {props.showAll && <img src={props.movie.poster} className="card-img-top" alt={props.movie.title} />}
            <div className="card-body" style={{ position: "relative" }}>
                <i onClick={() => { props.onRemovePoster(props.movie.id) }} className="far fa-times-circle" style={{ position: "absolute", right: "5px", top: "5px", cursor: "pointer" }}></i>
                <h5 className="card-title">{props.movie.title} ({props.movie.year})</h5>
                {props.showAll && <p className="card-text">{props.movie.plot}</p>}
                <div style={{ marginBottom: "10px" }}>
                    {props.movie.ratings.map((rating, i) => {
                        return <div key={i}>
                            <small className="text-muted" key={i}>
                                <b>{rating.source}:</b> {rating.value}
                            </small>
                        </div>;
                    })}
                </div>
                {(props.movie.website !== "N/A") && <a href={props.movie.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to Movie</a>}
            </div>
        </div>
    );
}

export default MovieCard;