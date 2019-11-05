import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFound(props){
return(
    <div>
        <h2>404 error - Page Not Found</h2>
        <Link to ="/">Back to Home</Link>
    </div>
)
} 

export default PageNotFound