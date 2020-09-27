import React from 'react'

export default function Product(props) {
    return (
        <div>
            <h3>{props.Name}</h3>
            <h4>{props.Price}</h4>
        </div>
    )
}
