import { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import AnimeCard from './components/AnimeCard';
import { useDebounce } from "@uidotdev/usehooks";
const API_BASE_URI = 'https://api.jikan.moe/v4/';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json'
        // delete Authorization line
    }
};





export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [animes, setanimes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const fetchAnimes = async (query = '') => {
        setIsLoading(true);
        setErrorMessage(null);

        try {

            const endpoint = query
                ?
                `${API_BASE_URI}anime?q=${encodeURIComponent(query)}&limit=20`
                :
                `${API_BASE_URI}top/anime?limit=20`;

            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.Response === 'False') {
                setErrorMessage(data.Error || 'An error occurred while fetching animes.');
                setanimes([]);
            } else {
                setanimes(data.data || []);
            }

        } catch (error) {
            console.error('Error fetching animes:', error);
            setErrorMessage('Failed to fetch animes. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAnimes(debouncedSearchTerm);
    }, [debouncedSearchTerm])


    return (
        <main>
            <div className="pattern" />
            <div className="wrapper">
                <header>
                    <h1>Find <span className='text-gradient'>Anime</span> You'll Enjoy Without The Hassle</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                </header>
                <section className='all-animes'>
                    <h2 className="mt-[40px]">
                        {debouncedSearchTerm ? `Results for "${debouncedSearchTerm}"` : "Trending Anime"}
                    </h2>
                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <ul>
                            {animes.map((anime) => (
                                <AnimeCard key={anime.mal_id} anime={anime} />
                            ))}
                        </ul>
                    )}
                    {animes.length === 0 && !isLoading && !errorMessage &&
                        <p className="text-gray-400">No anime found. Try a different search term.</p>
                    }

                </section>
            </div>
        </main>
    )
}
