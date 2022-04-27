import axios  from "axios";

const encodedParams = new URLSearchParams();
encodedParams.append("source", "en");
encodedParams.append("target", "es");
encodedParams.append("q", "Hello, world!");

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': '8715bac566msh70b2c1e60ca8324p1bee48jsn3aab1ee16bd1'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data.data.translations);
}).catch(function (error) {
	console.error(error);
});