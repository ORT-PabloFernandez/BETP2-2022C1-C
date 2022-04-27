import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {s: 'Avengers Endgame', r: 'json', page: '1'},
    headers: {
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        'X-RapidAPI-Key' : 'df520b2ea4msh53a532d66158400p133c4fjsn6d0d777aaa8f'
    }
};

axios.request(options)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error.message) );
