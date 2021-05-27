import React from 'react';
import { Link, Route } from 'react-router-dom';
import LibrariesList from './LibrariesList';
import MyLibrariesListFilters from './MyLibrariesListFilters';
import AddLibrary from './AddLibrary';
import PrivateRoute from '../routers/PrivateRoute';

const MyLibraries = () => {
    return (
        <div className='lib'>
            <h1 className='hd-lg'>My Libraries</h1>
            <MyLibrariesListFilters />
            <button><Link to='/addlibrary'>Create Library</Link></button>
            <PrivateRoute exact path='/libraries/addlibrary' component={AddLibrary} />
            <LibrariesList />
        </div>
    )
};

export default MyLibraries