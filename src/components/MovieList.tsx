import React from 'react';

import AppStore from '../models/AppStore';
import MovieCard from './MovieCard';
import styles from './MovieList.module.scss';

const MovieList: React.FC<AppStore> = (props) => {
    return (
        <div className={styles.movieList}>
            {props.movies.map((movie, i) => {
                return <MovieCard key={i} {...props} movie={movie} />;
            })}
        </div>
    );
}

export default MovieList;