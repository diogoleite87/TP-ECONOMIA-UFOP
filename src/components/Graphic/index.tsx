import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface IPros {

    q0: number;
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    q5: number;
    q6: number;

    cf: number;
    ct1: number;
    ct2: number;
    ct3: number;
    ct4: number;
    ct5: number;
    ct6: number;
}

const Graphic = (props: IPros) => {

    const { q0, q1, q2, q3, q4, q5, q6, cf, ct1, ct2, ct3, ct4, ct5, ct6 } = props;

    var data = [
        { name: q0, CF: cf, CV: (cf - cf), CT: cf },
        { name: q1, CF: cf, CV: (ct1 - cf), CT: ct1, CFme: (cf / q1), CVme: ((ct1 - cf) / q1), Cme: (ct1 / q1), Cmg: ((ct1 - cf) / (q1 - q0)).toFixed(2) },
        { name: q2, CF: cf, CV: (ct2 - cf), CT: ct2, CFme: (cf / q2), CVme: ((ct2 - cf) / q2), Cme: (ct2 / q2), Cmg: (((ct2 - cf) - (ct1 - cf)) / (q2 - q1)).toFixed(2) },
        { name: q3, CF: cf, CV: (ct3 - cf), CT: ct3, CFme: (cf / q3), CVme: ((ct3 - cf) / q3), Cme: (ct3 / q3), Cmg: (((ct3 - cf) - (ct2 - cf)) / (q3 - q2)).toFixed(2) },
        { name: q4, CF: cf, CV: (ct4 - cf), CT: ct4, CFme: (cf / q4), CVme: ((ct4 - cf) / q4), Cme: (ct4 / q4), Cmg: (((ct4 - cf) - (ct3 - cf)) / (q4 - q3)).toFixed(2) },
        { name: q5, CF: cf, CV: (ct5 - cf), CT: ct5, CFme: (cf / q5), CVme: ((ct5 - cf) / q5), Cme: (ct5 / q5), Cmg: (((ct5 - cf) - (ct4 - cf)) / (q5 - q4)).toFixed(2) },
        { name: q6, CF: cf, CV: (ct6 - cf), CT: ct6, CFme: (cf / q6), CVme: ((ct6 - cf) / q6), Cme: (ct6 / q6), Cmg: (((ct6 - cf) - (ct5 - cf)) / (q6 - q5)).toFixed(2) },
    ];

    return (
        <LineChart width={900} height={500} data={data}>
            <Line type="monotone" dataKey="CF" stroke="#2196F3" strokeWidth={3} />
            <Line type="monotone" dataKey="CV" stroke="#ff1168" strokeWidth={3} />
            <Line type="monotone" dataKey="CT" stroke="#0CF25D" strokeWidth={3} />
            <Line type="monotone" dataKey="CFme" stroke="#F44236" strokeWidth={3} />
            <Line type="monotone" dataKey="CVme" stroke="#FFCA29" strokeWidth={3} />
            <Line type="monotone" dataKey="Cme" stroke="#F27405" strokeWidth={3} />
            <Line type="monotone" dataKey="Cmg" stroke="#f0ffc9" strokeWidth={3} />

            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    );
};

export default Graphic;