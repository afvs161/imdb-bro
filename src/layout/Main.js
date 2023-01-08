import React from 'react'
import Movies from '../components/Movies'
import Loader from '../components/Loader'
import Search from '../components/Search'

export default class Main extends React.Component {
	state = {
    movies: [],
    loading: false
	}

  componentDidMount() {
    this.setState({loading: true})
		fetch('http://www.omdbapi.com/?apikey=bf74d5d&s=code geass')
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }))
	}

	searchMovie = (value, type = 'all') => {
    this.setState({ loading: true })
		fetch(
			`http://www.omdbapi.com/?apikey=bf74d5d&s=${value}${
				type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }))
	}

	render() {
		return (
			<div className='container content'>
				<Search search={this.searchMovie} />
				{this.state.loading ? (
          <Loader />
          ) : (
					<Movies movies={this.state.movies} />
				)}
			</div>
		)
	}
}
