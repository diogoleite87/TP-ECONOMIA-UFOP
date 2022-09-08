import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer
} from "recharts";

interface IProps {

    x0: number;
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;

    y0: number;
    y1: number;
    y2: number;
    y3: number;
    y4: number;
    y5: number;
}

export default function CppGraphic(props: IProps) {

    const { x0, x1, x2, x3, x4, x5, y0, y1, y2, y3, y4, y5 } = props;

    var data = [
        { cpp: x0 - y5, x: x0, y: y0 },
        { cpp: x1 - y4, x: x1, y: y1 },
        { cpp: x2 - y3, x: x2, y: y2 },
        { cpp: x3 - y2, x: x3, y: y3 },
        { cpp: x4 - y1, x: x4, y: y4 },
        { cpp: x5 - y0, x: x5, y: y5 },
    ];

    return (
        <div style={{ width: '80%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="x" />
                    <YAxis dataKey="y" />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="x" stroke="#8884d8" />
                    <Line type="monotone" dataKey="y" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}