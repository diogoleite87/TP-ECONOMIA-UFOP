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

import * as S from "./style"

interface IProps {

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

const Graphic = (props: IProps) => {

    const { q0, q1, q2, q3, q4, q5, q6, cf, ct1, ct2, ct3, ct4, ct5, ct6 } = props;

    var data = [
        { name: q0, CF: cf.toFixed(1), CV: (cf - cf).toFixed(1), CT: cf },
        { name: q1, CF: cf.toFixed(1), CV: (ct1 - cf).toFixed(1), CT: ct1.toFixed(1), CFme: (cf / q1).toFixed(1), CVme: ((ct1 - cf) / q1).toFixed(1), Cme: (ct1 / q1).toFixed(1), Cmg: ((ct1 - cf) / (q1 - q0)).toFixed(1) },
        { name: q2, CF: cf.toFixed(1), CV: (ct2 - cf).toFixed(1), CT: ct2.toFixed(1), CFme: (cf / q2).toFixed(1), CVme: ((ct2 - cf) / q2).toFixed(1), Cme: (ct2 / q2).toFixed(1), Cmg: (((ct2 - cf) - (ct1 - cf)) / (q2 - q1)).toFixed(1) },
        { name: q3, CF: cf.toFixed(1), CV: (ct3 - cf).toFixed(1), CT: ct3.toFixed(1), CFme: (cf / q3).toFixed(1), CVme: ((ct3 - cf) / q3).toFixed(1), Cme: (ct3 / q3).toFixed(1), Cmg: (((ct3 - cf) - (ct2 - cf)) / (q3 - q2)).toFixed(1) },
        { name: q4, CF: cf.toFixed(1), CV: (ct4 - cf).toFixed(1), CT: ct4.toFixed(1), CFme: (cf / q4).toFixed(1), CVme: ((ct4 - cf) / q4).toFixed(1), Cme: (ct4 / q4).toFixed(1), Cmg: (((ct4 - cf) - (ct3 - cf)) / (q4 - q3)).toFixed(1) },
        { name: q5, CF: cf.toFixed(1), CV: (ct5 - cf).toFixed(1), CT: ct5.toFixed(1), CFme: (cf / q5).toFixed(1), CVme: ((ct5 - cf) / q5).toFixed(1), Cme: (ct5 / q5).toFixed(1), Cmg: (((ct5 - cf) - (ct4 - cf)) / (q5 - q4)).toFixed(1) },
        { name: q6, CF: cf.toFixed(1), CV: (ct6 - cf).toFixed(1), CT: ct6.toFixed(1), CFme: (cf / q6).toFixed(1), CVme: ((ct6 - cf) / q6).toFixed(1), Cme: (ct6 / q6).toFixed(1), Cmg: (((ct6 - cf) - (ct5 - cf)) / (q6 - q5)).toFixed(1) },
    ];

    return (
        <S.Container>
            <div style={{ width: '85%', height: 300, }}>
                <ResponsiveContainer>
                    <LineChart data={data}>
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
                </ResponsiveContainer>
            </div>
        </S.Container>
    );
};

export default Graphic;