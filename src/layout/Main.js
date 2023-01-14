import React, { useEffect, useState } from 'react'
import Movies from '../components/Movies'
import Loader from '../components/Loader'
import Search from '../components/Search'

export default function Main() {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://www.omdbapi.com/?apikey=bf74d5d&s=code geass')
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search)
				setLoading(false)
			})
	}, [])

	const searchMovie = (value, type = 'all') => {
		setLoading(true)
		fetch(
			`https://www.omdbapi.com/?apikey=bf74d5d&s=${value}${
				type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search)
				setLoading(false)
			})
	}

	return (
		<div className='container content'>
			<Search search={searchMovie} />
			{loading ? <Loader /> : <Movies movies={movies} />}
		</div>
	)
}
