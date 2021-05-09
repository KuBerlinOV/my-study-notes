import React from 'react';
import { Link } from 'react-router-dom';
import LibrariesList from './LibrariesList';
import MyLibrariesListFilters from './MyLibrariesListFilters';
import AddLibrary from './AddLibrary';
import PrivateRoute from '../routers/PrivateRoute';


const MyLibraries = () => {
    return (
        <div>
            <h3>My Libraries</h3>
            <MyLibrariesListFilters />
            <button><Link to='/libraries/addlibrary'>Create Library</Link></button>
            <PrivateRoute path='/libraries/addlibrary' component={AddLibrary} />
            <LibrariesList />

        </div>
    )
};

export default MyLibraries