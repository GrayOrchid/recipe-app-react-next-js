'use client'
import React from 'react';
const Search = ({ search, setSearch }) => {
    return (
        <div className='home__search'>
            <input className='home__search-input' type="text" placeholder='search recipe' value={search} onChange={(e => setSearch(e.target.value))} />
        </div>
    );
}

export default Search;
