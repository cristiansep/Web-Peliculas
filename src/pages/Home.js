import React from 'react';
import useFetch from '../hooks/useFetch';

const Home = () => {

    const movies  =useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=2d87ede0628c4db0159cdf1314515019&language=es-es&page=1');

    console.log(movies);

    return (
        <p>Estamos en home</p>
    );
};

export default Home;