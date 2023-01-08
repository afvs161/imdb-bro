import React from 'react'

export default class Search extends React.Component {
	state = {
		search: 'code geass',
		type: 'all',
	}

	handleSearch = e => {
		if (e.key === 'Enter') {
			this.props.search(this.state.search, this.state.type)
		}
	}

	handleFilter = e => {
		this.setState(
      this.setState(() => ({ type: e.target.dataset.type }), () => {
        this.props.search(this.state.search, this.state.type)
      })
		)
	}

	render() {
		return (
			<div className='input-field'>
				<input
					type='search'
					placeholder='Search'
					className='validate col s9'
					value={this.state.search}
					onChange={e => {
						this.setState({ search: e.target.value })
					}}
					onKeyDown={this.handleSearch}
				/>
				<button
					className='waves-effect waves-light btn my-search__button'
					onClick={() => {
						this.props.search(this.state.search, this.state.type)
					}}
				>
					SEARCH
				</button>
				<div>
					<label htmlFor='type-1' className='mr2'>
						<input
							type='radio'
							id='type-1'
							className='with-gap'
							name='type'
							onChange={this.handleFilter}
							data-type='all'
							checked={this.state.type === 'all'}
						/>
						<span>All</span>
					</label>
					<label htmlFor='type-2' className='mr2'>
						<input
							type='radio'
							id='type-2'
							className='with-gap'
							name='type'
							onChange={this.handleFilter}
							data-type='movie'
							checked={this.state.type === 'movie'}
						/>
						<span>Movies</span>
					</label>
					<label htmlFor='type-3' className='mr2'>
						<input
							type='radio'
							id='type-3'
							className='with-gap'
							name='type'
							onChange={this.handleFilter}
							data-type='series'
							checked={this.state.type === 'series'}
						/>
						<span>Series</span>
					</label>
				</div>
			</div>
		)
	}
}
