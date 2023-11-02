import React from 'react';
import "./Search.css";

const Search = ({ filter, setFilter}) => {
	return (
			<div className="h-search">
					<form action="">
						<input type="search" placeholder="Search by Location..." className="search-input"  value={filter} onChange={e => setFilter(e.target.value)} />
						<input type="submit" value="Search" />
					</form>
		</div>
	)
}

export default Search