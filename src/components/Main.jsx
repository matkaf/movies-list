import { useEffect, useState } from 'react'
import { Grid } from '@chakra-ui/react'

import { getPopularMovies } from '../services/movies'
import MovieCard from './MovieCard'

function Main() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function requestMovies() {
            const { results } = await getPopularMovies();

            setMovies(results);
            setLoading(false);
        };

        requestMovies();
    }, [])

    if (loading) return <h1> Carregando... </h1>

    return (
        <Grid
            area={'main'}
            p="6"
            gap={12}
            justifyContent={'center'}
            gridTemplateColumns={'auto auto auto'}
        >
            {
                movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
            }
        </Grid>
    )
}

export default Main