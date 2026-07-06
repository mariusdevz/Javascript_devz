const movies = [
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        rating: 9.3,
        genres: ["drama", "crime"],
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        rating: 9.2,
        genres: ["crime", "drama"],
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 9.0,
        genres: ["action", "crime"],
    },
];

const afterYearMovies = (year) => {
    return movies.filter(movie => movie.year > year)
}

const after2000 = afterYearMovies(2000);
// console.log("After 2000s:", after2000);


const hishestRating = (movieList) => {
    return movieList.reduce((highest, movie) => {
        return highest.rating > movie.rating ? highest : movie
    })
}

// console.log(hishestRating(movies));


function getCrimeMovies(movieList) {
    return movieList.filter(movie =>
        movie.genres.includes("crime")
    );
}
// console.log(getCrimeMovies(movies));

const avgRating = (movieList) => {
    const total = movieList.reduce((sum, movie) => {
        return sum + movie.rating
    }, 0);

    return total / movieList.length;
}

// console.log(avgRating(movies));

function getUniqueGenres(movieList) {
    const genres = movieList.flatMap(movie => movie.genres);

    return [...new Set(genres)];
}

// console.log(getUniqueGenres(movies));

function getMovieByDirectorName(movieList, directorName) {
    return movieList.filter(movie => movie.director === directorName);
}

console.log(getMovieByDirectorName(movies, "Christopher Nolan"));




