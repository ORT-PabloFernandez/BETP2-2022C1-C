const movie = {
    _id: "5eab6525943e6ac68387223d",
    title: "Pirates of the Caribbean: Dead Man's Chest",
    year: 2006,
    rated: "PG-13",
    runtime: 151.0,
    countries:["USA"],
    genres:["Action","Adventure","Fantasy"],
    director:"Gore Verbinski",
    writers:["Ted Elliott","Terry Rossio","Ted Elliott","Terry Rossio","Stuart Beattie","Jay Wolpert"],
    actors:["Johnny Depp","Orlando Bloom","Keira Knightley","Jack Davenport"],
    plot:"Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda as well.",
    poster:"http://ia.media-imdb.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
    imdb: {
            id:"tt0383574",
            rating: 7.3,
            votes: 492854.0
        },
    tomato: {
        meter: 54.0,
        image:"rotten",
        rating:6.0,
        reviews: 219.0,
        fresh: 118.0,
        consensus: "Gone is Depp's unpredictability and much of the humor and originality of the first movie.",
        userMeter: 72.0,
        userRating: 3.9,
        userReviews: 1845112.0 
    },
    metacritic: 53.0,
    awards: {
        wins:41.0,
        nominations:48.0,
        text:"Won 1 Oscar. Another 41 wins & 48 nominations."
    },
    type: "movie"
}

// Desestructurar objetos

//let actores = movie.actors;
//let writers = movie.writers;

const {actors, writers, type} = movie;


console.log(actors);
console.log(writers);

// Desestructurar Arrays

const details = ['Juan Perez', 234234, 'juanperez@gmail.com'];

const [name, id, email] = details;
console.log(email);


