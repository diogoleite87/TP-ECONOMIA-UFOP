import { useState } from 'react';
import * as S from './style'


export default function Table() {

  const [cf, setCf] = useState<number>(0);
  const [ct1, setCt1] = useState<number>(0);
  const [ct2, setCt2] = useState<number>(0);
  const [ct3, setCt3] = useState<number>(0);
  const [ct4, setCt4] = useState<number>(0);
  const [ct5, setCt5] = useState<number>(0);
  const [ct6, setCt6] = useState<number>(0);

  const [q0, setQ0] = useState<number>(0);
  const [q1, setQ1] = useState<number>(1);
  const [q2, setQ2] = useState<number>(2);
  const [q3, setQ3] = useState<number>(3);
  const [q4, setQ4] = useState<number>(4);
  const [q5, setQ5] = useState<number>(5);
  const [q6, setQ6] = useState<number>(6);

  return (
    <S.Container>
      <S.Table>

        <tr>
          <th>Q</th>
          <th>CF</th>
          <th>CV</th>
          <th>CT</th>
          <th>CFme</th>
          <th>CVme</th>
          <th>Cme</th>
          <th>Cmg</th>
        </tr>


        <tr>
          <td><input type="number"
            onChange={(e) => setQ0(Number(e.target.value))} disabled value={q0} />
          </td>
          <td>{cf}</td>
          <td>{(cf - cf)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCf(Number(e.target.value))} />
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ1(Number(e.target.value))} value={q1} />
          </td>
          <td>{cf}</td>
          <td>{(ct1 - cf)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt1(Number(e.target.value))} />
          </td>
          <td>{cf / q1}</td>
          <td>{((ct1 - cf) / q1)}</td>
          <td>{(ct1 / q1)}</td>
          <td>{((ct1 - cf) / (q1 - q0))}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ2(Number(e.target.value))} value={q2} />
          </td>
          <td>{cf}</td>
          <td>{(ct2 - cf)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt2(Number(e.target.value))} />
          </td>
          <td>{cf / q2}</td>
          <td>{((ct2 - cf) / q2)}</td>
          <td>{(ct2 / q2)}</td>
          <td>{(((ct2 - cf) - (ct1 - cf)) / (q2 - q1))}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ3(Number(e.target.value))} value={q3} />
          </td>
          <td>{cf}</td>
          <td>{(ct3 - cf)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt3(Number(e.target.value))} />
          </td>
          <td>{cf / q3}</td>
          <td>{((ct3 - cf) / q3)}</td>
          <td>{(ct3 / q3)}</td>
          <td>{(((ct3 - cf) - (ct2 - cf)) / (q3 - q2))}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ4(Number(e.target.value))} value={q4} />
          </td>
          <td>{cf}</td>
          <td>{(ct4 - cf)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt4(Number(e.target.value))} />
          </td>
          <td>{cf / q4}</td>
          <td>{((ct4 - cf) / q4)}</td>
          <td>{(ct4 / q4)}</td>
          <td>{(((ct4 - cf) - (ct3 - cf)) / (q4 - q3))}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ5(Number(e.target.value))} value={q5} />
          </td>
          <td>{cf}</td>
          <td>{(ct5 - cf)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt5(Number(e.target.value))} />
          </td>
          <td>{cf / q5}</td>
          <td>{((ct5 - cf) / q5)}</td>
          <td>{(ct5 / q5)}</td>
          <td>{(((ct5 - cf) - (ct4 - cf)) / (q5 - q4))}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ6(Number(e.target.value))} value={q6} />
          </td>
          <td>{cf}</td>
          <td>{(ct6 - cf)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt6(Number(e.target.value))} />
          </td>
          <td>{cf / q6}</td>
          <td>{((ct6 - cf) / q6)}</td>
          <td>{(ct6 / q6)}</td>
          <td>{(((ct6 - cf) - (ct5 - cf)) / (q6 - q5))}</td>
        </tr>

      </S.Table>
    </S.Container>
  )
}