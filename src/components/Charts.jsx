import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function Chart( {data} ) {
    
    return (
        <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
        </LineChart>
    )
}

export default Chart;