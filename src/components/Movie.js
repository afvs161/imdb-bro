export default function Movie(props) {
	const { Title, Year, imdbID, Type, Poster } = props
	return (
		<div key={imdbID} className='card my-card'>
			<div className='card-image waves-effect waves-block waves-light'>
				<img className='activator' src={Poster} alt='' />
			</div>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>
					{Title}
					{/* <i className='material-icons right'>more like this</i> */}
				</span>
				<p>
					<span className='left new badge'>{Year}</span>
					<span className='right my-movie__type'>Type: {Type}</span>
				</p>
			</div>
		</div>
	)
}
