import axios from 'axios';

//const users = await axios.request('http://fakeapi.jsonparseronline.com/users');
axios.request('http://fakeapi.jsonparseronline.com/users').then( data => {
    console.log(data);
});



