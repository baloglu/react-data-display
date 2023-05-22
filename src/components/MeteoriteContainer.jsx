import Meteorite from "./Meteorite"
import SearchField from "./SearchField";
import { useState, useEffect } from "react";

function MeteoriteContainer() {

    const [meteorites, setMeteorites] = useState([])
    const [page, setPage] = useState(0)
    const [resultPerPage, setResultPerPage] = useState(10)


    useEffect(()=> {}, page)
    fetch(`https://data.nasa.gov/api/id/gh4g-9sfh.json?$limit=10&$offset=${page*10}`)
        .then(result => {
        console.log(result.json())
    })

    return (
        <>
            <SearchField search_term = "Manchester"/>
            <Meteorite />
        </>
    )
}

export default MeteoriteContainer;