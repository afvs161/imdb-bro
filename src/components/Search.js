// @ts-nocheck
import React, { useState } from 'react'

export default function Search({ search }) {
	const [searchM, setSearch] = useState('code geass')
	const [type, setType] = useState('all')

	const handleSearch = e => {
		if (e.key === 'Enter') {
			search(searchM)
		}
	}

	const handleFilter = e => {
		setType(e.target.dataset.type)
		search(searchM, e.target.dataset.type)
	}

	return (
		<div className='input-field'>
			<input
				type='search'
				placeholder='Search'
				className='validate col s9'
				value={searchM}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleSearch}
			/>
			<button
				className='waves-effect waves-light btn my-search__button'
				onClick={() => search(searchM, type)}
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
						onChange={handleFilter}
						data-type='all'
						checked={type == 'all'}
					/>
					<span>All</span>
				</label>
				<label htmlFor='type-2' className='mr2'>
					<input
						type='radio'
						id='type-2'
						className='with-gap'
						name='type'
						onChange={handleFilter}
						data-type='movie'
						checked={type == 'movie'}
					/>
					<span>Movies</span>
				</label>
				<label htmlFor='type-3' className='mr2'>
					<input
						type='radio'
						id='type-3'
						className='with-gap'
						name='type'
						onChange={handleFilter}
						data-type='series'
						checked={type == 'series'}
					/>
					<span>Series</span>
				</label>
			</div>
		</div>
	)
}
