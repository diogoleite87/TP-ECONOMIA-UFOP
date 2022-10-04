import * as S from './style'
import { useState, useEffect } from 'react';

import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

import ContainerAnalysis from '../ContainerAnalysis'

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

type Analysis = {
    id: number;
    text: string
};

export default function CppGraphic(props: IProps) {

    const { x0, x1, x2, x3, x4, x5, y0, y1, y2, y3, y4, y5 } = props;

    const [analysis, setAnalysis] = useState<Analysis[]>([])
    const [aux, setAux] = useState<number>(0);

    function checkAnalysis() {

        addAnalysis("O custo de oportunidade de " + x0 + " unidades de X para " + y0 + " unidades de Y é: " + (y0 - y0))
        addAnalysis("O custo de oportunidade de " + x1 + " unidades de X para " + y1 + " unidades de Y é: " + (y0 - y1))
        addAnalysis("O custo de oportunidade de " + x2 + " unidades de X para " + y2 + " unidades de Y é: " + (y1 - y2))
        addAnalysis("O custo de oportunidade de " + x3 + " unidades de X para " + y3 + " unidades de Y é: " + (y2 - y3))
        addAnalysis("O custo de oportunidade de " + x4 + " unidades de X para " + y4 + " unidades de Y é: " + (y3 - y4))
        addAnalysis("O custo de oportunidade de " + x5 + " unidades de X para " + y5 + " unidades de Y é: " + (y4 - y5))


    }

    function addAnalysis(text: string) {

        setAnalysis(prevAnalysis => [
            ...prevAnalysis,
            { id: analysis.length + 1, text: text },
        ])

        while (analysis.length) {
            analysis.pop();
        }
    }

    var data = [
        { cpp: y0, x: x0, y: y0 },
        { cpp: y1, x: x1, y: y1 },
        { cpp: y2, x: x2, y: y2 },
        { cpp: y3, x: x3, y: y3 },
        { cpp: y4, x: x4, y: y4 },
        { cpp: y5, x: x5, y: y5 },
    ];

    return (
        <S.Container>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis dataKey="y" />
                    <Tooltip />
                    <Line type="monotone" dataKey="cpp" name="Quantidade produto Y:" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>


            <S.ContainerAnalysis>
                <ContainerAnalysis title='Custo de Oportunidade'>

                    <button onClick={checkAnalysis}>Analisar</button>

                    {analysis.map((analysis, index) => {
                        return (
                            <div key={index}>
                                {/* <p><span>Analise({analysis.id})</span>: {analysis.text}</p> */}
                                <p>{analysis.text}</p>
                            </div>
                        );
                    })
                    }

                </ContainerAnalysis>
            </S.ContainerAnalysis>


        </S.Container>
    )
}