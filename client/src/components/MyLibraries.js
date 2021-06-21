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
    const [showFilters, setShowFilters] = useState(false);
    const handleFilters = () => {
        setShowFilters(!showFilters)
    }
    return (
        <main id='lib'>
            <div className='lib-top'>
                <h1 className='hd-lg'>My Libraries</h1>
                <div className='lib-btns'>
                    <Button className='btn-lg' onClick={() => { history.push('/addlibrary') }}>
                        <AddBoxIcon />
                        New Library
                    </Button>
                    <Button className='btn-lg' onClick={handleFilters}>
                        <ExpandMoreIcon />
                        Filters
                    </Button>
                </div>
            </div>
            {showFilters && <MyLibrariesListFilters
                handleFilters={handleFilters}
            />}

            <LibrariesList />

            <PrivateRoute exact path='/libraries/addlibrary' component={AddLibrary} />
        </main>
    )
};

export default MyLibraries