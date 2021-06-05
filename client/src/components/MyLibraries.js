import React, { useEffect, useState } from 'react';
import LibrariesList from './LibrariesList';
import MyLibrariesListFilters from './MyLibrariesListFilters';
import AddLibrary from './AddLibrary';
import PrivateRoute from '../routers/PrivateRoute';
import { history } from '../routers/approuter';
import { Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MyLibraries = () => {

    const useWindowSize = () => {
        const [size, setSize] = useState([window.innerWidth, window.innerHeight])
        useEffect((() => {
            const handleResize = () => {
                setSize([window.innerWidth, window.innerHeight])
            }
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize)
            };
        }), [])
        return size
    }
    const [height, width] = useWindowSize()
    const [showFilters, setShowFilters] = useState(true);
    const handleFilters = () => {
        setShowFilters(!showFilters)
    }
    return (
        <main id='lib'>
            <div className='lib-top'>
                <h1 className='hd-lg'>My Libraries</h1>
                <Button className='btn-lg' onClick={() => { history.push('/addlibrary') }}>
                    <AddBoxIcon />
            Create Library
            </Button>
                <Button className='btn-lg' onClick={handleFilters}>
                    <ExpandMoreIcon />
        Show filters
        </Button>
            </div>
            {showFilters && <MyLibrariesListFilters
                handleFilters={handleFilters}
            />}
            <div className='lib-ls'>
                <LibrariesList />
            </div>
            <PrivateRoute exact path='/libraries/addlibrary' component={AddLibrary} />
        </main>
    )
};

export default MyLibraries