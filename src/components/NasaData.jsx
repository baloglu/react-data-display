
function NasaData() {

    fetch('https://data.nasa.gov/api/id/gh4g-9sfh.json?$limit=10')
        .then(result => {
        console.log(result)
    })
    return (
        <>
            <p> Where we fetch Data</p>
        </>
    )
}

export default NasaData;