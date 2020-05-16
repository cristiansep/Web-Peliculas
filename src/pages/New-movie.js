import React, {useState,useEffect} from 'react';
import {Row, Col} from 'antd';
import {URL_API, API} from '../config/config';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import MovieCatalog from '../components/MovieCatalog/MovieCatalog';
import Pagination from '../components/Pagination';

const NewMovies = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
                );
                const movies = await response.json();
                setMovieList(movies);
        })();
    }, [page]);

    const onChangePage = page => {
        setPage(page);
    }

    return (
        <Row>
            <Col span={24} style={{textAlign: "center", marginTop: 25}}>
                <h1 style={{fontSize: 35, fontWeight: "bold"}}>
                    Ultimos lanzamientos
                    </h1>
            </Col>
            {movieList.results ? (
            <Row>
             <MovieCatalog movies={movieList}/>
                <Col span={24}>
                    <Pagination
                        currentPage={movieList.page}
                        totalItems={movieList.total_results}
                        onChangePage={onChangePage}
                    />
                </Col>
            </Row>
            ) : (
                <Col span={24}>
                  <Loading/>  
                </Col>
            )}
            
            <Col span={24}>
                <Footer/>
            </Col>
           
        </Row>
    );

}

export default NewMovies;