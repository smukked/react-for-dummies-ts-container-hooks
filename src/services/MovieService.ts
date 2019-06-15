import IMovie from './../interfaces/IMovie';

function delay(t: any) {
    return new Promise(res => {
        setTimeout(res, t);
    });
}

function delayResolve(value: any, t = 2000) {
    return delay(t).then(() => value);
}

export const getMyFavoriteMovies = async (): Promise<IMovie[]> => {

    const myFavoriteMovies = [{
        id: 1,
        title: "Blade Runner",
        year: "1982",
        plot: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "8.2/10"
        }, {
            source: "Rotten Tomatoes",
            value: "90%"
        }, {
            source: "Metacritic",
            value: "89/100"
        }],
        website: "https://www.warnerbros.com/blade-runner",
    },
    {
        id: 2,
        title: "Blade Runner 2049",
        year: "2017",
        plot: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
        poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "8.0/10"
        }, {
            source: "Rotten Tomatoes",
            value: "87%"
        }, {
            source: "Metacritic",
            value: "81/100"
        }],
        website: "http://bladerunnermovie.com",
    },
    {
        id: 3,
        title: "Mad Max: Fury Road",
        year: "2015",
        plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "8.1/10"
        }, {
            source: "Rotten Tomatoes",
            value: "97%"
        }, {
            source: "Metacritic",
            value: "90/100"
        }],
        website: "http://www.madmaxmovie.com/",
    },
    {
        id: 4,
        title: "Hunt for the Wilderpeople",
        year: "2016",
        plot: "A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "7.9/10"
        }, {
            source: "Rotten Tomatoes",
            value: "96%"
        }, {
            source: "Metacritic",
            value: "81/100"
        }],
        website: "http://wilderpeople.film/",
    },
    {
        id: 5,
        title: "1984",
        year: "1984",
        plot: "In a totalitarian future society, a man, whose daily work is re-writing history, tries to rebel by falling in love.",
        poster: "https://m.media-amazon.com/images/M/MV5BMWFkNzIzNDUtNWI1Mi00ODA2LTgyMTMtYTZiYWMxMDFlNmNhL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "7.2/10"
        }, {
            source: "Rotten Tomatoes",
            value: "82%"
        }, {
            source: "Metacritic",
            value: "67/100"
        }],
        website: "N/A",
    },
    {
        id: 6,
        title: "Dune",
        year: "1984",
        plot: "A Duke's son leads desert warriors against the galactic emperor and his father's evil nemesis when they assassinate his father and free their desert world from the emperor's rule.",
        poster: "https://m.media-amazon.com/images/M/MV5BYTAzYzNlMDMtMGRjYS00M2UxLTk0MmEtYmE4YWZiYmEwOTIwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "6.6/10"
        }, {
            source: "Rotten Tomatoes",
            value: "54%"
        }, {
            source: "Metacritic",
            value: "40/100"
        }],
        website: "N/A",
    },
    {
        id: 7,
        title: "Once Upon a Time in America",
        year: "1984",
        plot: "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
        poster: "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "8.4/10"
        }, {
            source: "Rotten Tomatoes",
            value: "86%"
        }],
        website: "N/A",
    },
    {
        id: 8,
        title: "Gone with the Wind",
        year: "1939",
        plot: "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
        poster: "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "8.2/10"
        }, {
            source: "Rotten Tomatoes",
            value: "92%"
        }, {
            source: "Metacritic",
            value: "97/100"
        }],
        website: "http://warnervideo.com/gonewiththewind/",
    },
    {
        id: 9,
        title: "Contact",
        year: "1997",
        plot: "Dr. Ellie Arroway (Jodie Foster), after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine.",
        poster: "https://m.media-amazon.com/images/M/MV5BYWNkYmFiZjUtYmI3Ni00NzIwLTkxZjktN2ZkMjdhMzlkMDc3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "7.4/10"
        }, {
            source: "Rotten Tomatoes",
            value: "63%"
        }, {
            source: "Metacritic",
            value: "62/100"
        }],
        website: "N/A",
    },
    {
        id: 10,
        title: "The Road",
        year: "2009",
        plot: "In a dangerous post-apocalyptic world, an ailing father defends his son as they slowly travel to the sea.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTAwNzk4NTU3NDReQTJeQWpwZ15BbWU3MDg3OTEyODI@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "7.3/10"
        }, {
            source: "Rotten Tomatoes",
            value: "73%"
        }, {
            source: "Metacritic",
            value: "64/100"
        }],
        website: "http://www.theroad-movie.com/",
    },
    {
        id: 11,
        title: "The Sound of Music",
        year: "1965",
        plot: "A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
        poster: "https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "8.0/10"
        }, {
            source: "Rotten Tomatoes",
            value: "86%"
        }, {
            source: "Metacritic",
            value: "63/100"
        }],
        website: "http://www.foxhome.com/soundofmusicdvd/index_frames.html",
    },
    {
        id: 12,
        title: "Brazil",
        year: "1985",
        plot: "A bureaucrat, in a retro-future world, tries to correct an administrative error and becomes an enemy of the state.",
        poster: "https://m.media-amazon.com/images/M/MV5BNTA3NjkwYzMtMzc4Yy00NzZhLWE1NDUtOGE0N2YzYjgyMGIwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        ratings: [{
            source: "Internet Movie Database",
            value: "8.0/10"
        }, {
            source: "Rotten Tomatoes",
            value: "98%"
        }, {
            source: "Metacritic",
            value: "88/100"
        }],
        website: "N/A",
    }
    ];

    return delayResolve(myFavoriteMovies);
};