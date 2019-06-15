import IMovie from '../interfaces/IMovie';

export default class AppStore {
  public name: string;
  public movies: IMovie[];
  public showAll: boolean;
  public isLoaded: boolean;
  public onPosterToggle: () => void;
  public onRemovePoster: (movieId: number) => void;

  constructor(name: string, movies: IMovie[], showAll: boolean, isLoaded: boolean, onPosterToggle: () => void, onRemovePoster: (movieId: number) => void) {
    this.name = name;
    this.movies = movies;
    this.showAll = showAll;
    this.isLoaded = isLoaded;
    this.onPosterToggle = onPosterToggle;
    this.onRemovePoster = onRemovePoster;
  }
}