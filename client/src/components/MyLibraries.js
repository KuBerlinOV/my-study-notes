import React from 'react';
import { Link } from 'react-router-dom';
import LibrariesList from './LibrariesList';


const MyLibraries = () => {
    return (
        <div>
            <h3>My Libraries</h3>
            <button><Link to='/addlibrary'>Create Library</Link></button>
            <LibrariesList />
        </div>
    )
};

export default MyLibraries