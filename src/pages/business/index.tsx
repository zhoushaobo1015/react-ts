import React from 'react'

interface IProps {
    count: number,
    add:()=>void,
    remove:()=>void
}

export default function Business({count,add,remove}:IProps) {
    return (
        <div>
            <h1>{count || 0}</h1>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
        </div>
    )
}
