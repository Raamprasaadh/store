import React from 'react'

export default function SearchBar() {
    //onChange send the input value to (e)=>{useDispatch(filter(e.target.value))};
    return (
        <div>
            <input placeholder="Search"></input>
        </div>
    )
}
