import React, { Component, useEffect, useState } from "react";

import "./search_component.scss"


const SearchBar = (props) => {

    const [input, setInput] = useState('')

    useEffect(() => {

        props.search(input)

    }, [input])

    return (

        <div className="control_panel">

            <input onChange={(event) => setInput(event.target.value)} type="text" placeholder="Search for post by user id" />
            <button onClick={() => props.sort()}>Sort by Title</button>

        </div>

    )


}


export default SearchBar