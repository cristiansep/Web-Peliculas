import React, { Fragment } from 'react';
import useFetch from '../hooks/useFetch';
import { URL_API, API} from '../config/config';
import SliderMovies from '../components/SliderMovies';

const Home = () => {

    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);
    return (
        <Fragment>
            <SliderMovies movies={newMovies}/>
        </Fragment>
    );
};

export default Home;