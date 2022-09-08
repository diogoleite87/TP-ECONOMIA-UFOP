import { useState } from 'react'
import * as S from './style'

import CppGraphic from '../CppGraphic'

export default function CppTable() {

    const [x0, setX0] = useState<number>(0)
    const [x1, setX1] = useState<number>(1)
    const [x2, setX2] = useState<number>(2)
    const [x3, setX3] = useState<number>(3)
    const [x4, setX4] = useState<number>(4)
    const [x5, setX5] = useState<number>(5)

    const [y0, setY0] = useState<number>(5)
    const [y1, setY1] = useState<number>(4)
    const [y2, setY2] = useState<number>(3)
    const [y3, setY3] = useState<number>(2)
    const [y4, setY4] = useState<number>(1)
    const [y5, setY5] = useState<number>(0)

    return (

        <S.Container>
            <S.Table>

                <tr>
                    <th>Produto X</th>
                    <th>Produto Y</th>
                </tr>

                <tr>
                    <td><input type="number"
                        onChange={(e) => setX0(Number(e.target.value))} value={x0} /></td>
                    <td><input type="number"
                        onChange={(e) => setY0(Number(e.target.value))} value={y0} /></td>
                </tr>

                <tr>
                    <td><input type="number"
                        onChange={(e) => setX1(Number(e.target.value))} value={x1} /></td>
                    <td><input type="number"
                        onChange={(e) => setY1(Number(e.target.value))} value={y1} /></td>
                </tr>

                <tr>
                    <td><input type="number"
                        onChange={(e) => setX2(Number(e.target.value))} value={x2} /></td>
                    <td><input type="number"
                        onChange={(e) => setY2(Number(e.target.value))} value={y2} /></td>
                </tr>

                <tr>
                    <td><input type="number"
                        onChange={(e) => setX3(Number(e.target.value))} value={x3} /></td>
                    <td><input type="number"
                        onChange={(e) => setY3(Number(e.target.value))} value={y3} /></td>
                </tr>

                <tr>
                    <td><input type="number"
                        onChange={(e) => setX4(Number(e.target.value))} value={x4} /></td>
                    <td><input type="number"
                        onChange={(e) => setY4(Number(e.target.value))} value={y4} /></td>
                </tr>

                <tr>
                    <td><input type="number"
                        onChange={(e) => setX5(Number(e.target.value))} value={x5} /></td>
                    <td><input type="number"
                        onChange={(e) => setY5(Number(e.target.value))} value={y5} /></td>
                </tr>
            </S.Table>

            <CppGraphic x0={x0} x1={x1} x2={x2} x3={x3} x4={x4} x5={x5} y0={y0} y1={y1} y2={y2} y3={y3} y4={y4} y5={y5} />
        </S.Container>
    )
}