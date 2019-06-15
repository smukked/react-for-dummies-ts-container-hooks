import React, { useEffect, useState } from 'react';

import AppPresenter from './AppPresenter';
import IMovie from './interfaces/IMovie';
import AppStore from './Models/AppStore';
import { getMyFavoriteMovies } from './services/MovieService';

interface IAppProps {
  name: string
}

const AppContainer: React.FC<IAppProps> = (props) => {

  // Setup state
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Get data
  const fetchMyData = async (): Promise<void> => {
    const myFavoriteMovies = await getMyFavoriteMovies();

    setMovies(myFavoriteMovies);
    setIsLoaded(true);
  }

  // "componentDidMount"
  useEffect(() => {
    fetchMyData();
  }, []);

  // Events
  const onPosterToggle = () => {
    setShowAll(!showAll);
  };

  const onRemovePoster = (movieId: number) => {
    setMovies(movies.filter(m => m.id !== movieId));
  };

  // Create App Store
  const appStore = new AppStore(props.name, movies, showAll, isLoaded, onPosterToggle, onRemovePoster);

  return (
    <AppPresenter {...appStore} />
  );
}

export default AppContainer;