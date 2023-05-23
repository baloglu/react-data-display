import Meteorite from "./Meteorite";
import SearchField from "./SearchField";
import MainMap from "./Map";

import { useState, useEffect } from "react";

function MeteoriteContainer() {
    const [meteorites, setMeteorites] = useState([]);
    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [locations, setLocations] = useState([])
    const data = [{name: 'Page A', uv: 200, pv: 2400, amt: 2400},{name: 'Page B', uv: 400, pv: 2400, amt: 2400}, {name: 'Page C', uv: 300, pv: 2400, amt: 2400}];

  useEffect(() => {
    fetch(
      `https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10&$offset=${
        page * 10
      }&$where=name like %27%25${searchTerm}%25%27`
    )
      .then((result) => {
        console.log(result)
        result.json().then((newResult) => {
            setMeteorites(newResult);
            setLocations(getLocations(newResult))
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  function nextPage() {
    setPage(page + 1);
  }
  function previousPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }
    
    function getLocations(array) {
        let locations = []
        array.forEach(meteor => {
            locations.push({ lat: Number(meteor.reclat), lng: Number(meteor.reclong) })
        })
        return locations
  }

  return (
    <>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mass</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {/* changed from meteorites to filteredMeteorites */}
          {meteorites.map((meteorite, index) => {
            return (
                <Meteorite
                    key={index}
                    meteorite={meteorite}
                className={index % 2 === 0 ? "" : "table-row-odd"}
              />
            );
          })}
        </tbody>
      </table>
      <p className="button" onClick={previousPage}>
        Previous
      </p>
      <p className="button" onClick={nextPage}>
        Next
          </p>

          <MainMap className="main-map" locations={locations} />
    </>
  );
}

export default MeteoriteContainer;
