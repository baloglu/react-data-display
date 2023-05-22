import Meteorite from "./Meteorite"
import SearchField from "./SearchField";
import { useState, useEffect } from "react";

function MeteoriteContainer() {

    const [meteorites, setMeteorites] = useState([])
    const [page, setPage] = useState(0)
    //const [resultPerPage, setResultPerPage] = useState(10)


    useEffect(() => {
        fetch(`https://data.nasa.gov/api/id/gh4g-9sfh.json?$limit=20&$offset=${page*10}`)
            .then(result => {
                result.json().then(newResult => {
                    setMeteorites(newResult) 
                })
                
            })
            .catch(err => {
            console.log(err)
        })
            

    }, [page])
    
    function nextPage() {
        setPage(page+1)
    }
    function previousPage() {
        if (page > 0) {
            setPage(page-1)
        }
        
    }


    return (
        <>
            <SearchField search_term = "Manchester"/>
            
            <table>
                <thead>
                    <tr><th>Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                        <th>Year</th>
                    </tr>
                    
                </thead>
                <tbody>
                {meteorites.map((meteorite) => {
                    return <Meteorite meteorite={ meteorite} />
                })}
                </tbody>
                                
            </table>
            <p onClick={previousPage}>Previous</p>
            <p onClick={nextPage}>Next</p>
            
            
        </>
    )
}

export default MeteoriteContainer;