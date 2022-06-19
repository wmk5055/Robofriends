import React from 'react'


function SearchBox({searchfield,searchChange}){
    return(
        <div className = 'pa3 ba b--green bg-lightest-blue'>
            <input type='search' placeholder='search robots' onChange={searchChange}/>
        </div>
        
    )

}

export default SearchBox;