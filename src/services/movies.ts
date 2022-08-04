import api from './api'

export async function getPopularMovies() {
    try {
        const { data } = await api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);

        return data;
    } catch (error) {
        console.log(error)
    }
}
