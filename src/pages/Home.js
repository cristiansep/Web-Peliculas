import React, { Fragment } from 'react';
import { Row, Col } from "antd";
import useFetch from '../hooks/useFetch';
import { URL_API, API} from '../config/config';
import SliderMovies from '../components/SliderMovies';
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const Home = () => {

    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);
    const popularMovies = useFetch(
        `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
      );
      const topRatedMovies = useFetch(
        `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
      );
    return (
      <Fragment>
        <SliderMovies movies={newMovies} />
        <Row>
          <Col span={12}>
            <MovieList title="Películas Populares" movies={popularMovies} />
          </Col>
          <Col span={12}>
            <MovieList
              title="Top Mejores Películas Puntuadas"
              movies={topRatedMovies}
            />
          </Col>
        </Row>
        <Footer />
      </Fragment>
    );
};

export default Home;