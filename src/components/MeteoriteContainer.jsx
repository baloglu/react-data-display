import Meteorite from "./Meteorite";
import SearchField from "./SearchField";
import { useState, useEffect } from "react";

function MeteoriteContainer() {
  const [meteorites, setMeteorites] = useState([]);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://data.nasa.gov/resource/gh4g-9sfh.json?$q=${searchTerm}&$limit=20&$offset=${
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
          {meteorites.map((meteorite, index) => {
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
