function Meteorite({ meteorite }) {
    return (
        <tr key={meteorite.id}>
            <td>{meteorite.name}</td>
            <td>{meteorite.reclat}</td>
            <td>{meteorite.reclong}</td>
            <td>{new Date(meteorite.year).getFullYear()}</td>
        </tr>
    )
}

export default Meteorite;