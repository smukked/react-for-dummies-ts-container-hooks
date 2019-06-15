import React from 'react';

import styles from './App.module.scss';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner';
import ToggleButton from './components/ToggleButton';
import AppStore from './Models/AppStore';

const AppPresenter: React.FC<AppStore> = (props) => {

  if (!props.isLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <div className={styles.app}>
      <h2 className={styles.headline}>{props.name}</h2>
      <ToggleButton name="Toggle View" onToggle={props.onPosterToggle} toggleState={props.showAll} />
      <MovieList {...props} />
    </div>
  );
}

export default AppPresenter;