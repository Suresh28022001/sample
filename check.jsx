import React from 'react'

export default function Check() {
    return (
        <div>
            <ul className='d-flex justify-content-around bg-body' style={{ listStyleType: "none" }}>
                <li><a href="/"> <li >Get</li></a></li>
                <li><a href="/post"> <li >post</li></a></li>
                <li><a href="/calculation">calculation</a></li>
            </ul>
        </div>
    )
}
