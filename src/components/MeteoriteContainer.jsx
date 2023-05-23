import Meteorite from "./Meteorite";
import SearchField from "./SearchField";
import { useState, useEffect } from "react";

function MeteoriteContainer() {
  const [meteorites, setMeteorites] = useState([]);
  const [page, setPage] = useState(0);
  // added search term with useState
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://data.nasa.gov/api/id/gh4g-9sfh.json?$limit=20&$offset=${
        page * 10
      }`
    )
      .then((result) => {
        result.json().then((newResult) => {
          setMeteorites(newResult);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  // we set the search to be equal to the typed in value here
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

  // here is where the search is filtered by any value in search bar
  const filteredMeteorites = meteorites.filter((meteorite) =>
    meteorite.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {/* added proper search term and handle search function */}
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
          {filteredMeteorites.map((meteorite, index) => {
            return (
              <Meteorite
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
    </>
  );
}

export default MeteoriteContainer;
