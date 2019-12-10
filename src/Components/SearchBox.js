import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 bc b--blue bg-lightest-blue"
            type="sarch" 
            placeholder="Search Robots" 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;