import React from 'react';


const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>UserName</p> : <p>Please log in</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

export default requireAuth