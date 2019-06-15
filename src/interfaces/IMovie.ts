import IRatings from './IRatings';

export default interface IMovie {
    id: number,
    title: string,
    year: string,
    plot: string,
    poster: string,
    ratings: IRatings[],
    website: string,
}