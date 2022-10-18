import { useState, useEffect } from 'react';
import * as S from './style'

import Graphic from '../Graphic';
import BasicModal from '../BasicModal';

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

  const [modalID, setModalID] = useState<number>(0);
  const [titleModal, setTitleModal] = useState<string>("aaa");
  const [subtitleModal, setSubtitleModal] = useState<string>("sdd");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  type Analysis = {
    id: number;
    text: string
  };

  const [analysis, setAnalysis] = useState<Analysis[]>([])


  function addAnalysis(text: string) {
    setAnalysis(prevAnalysis => [
      ...prevAnalysis,
      { id: analysis.length + 1, text: text },
    ])
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log(modalID)

    if (modalID == 1) {
      setTitleModal("Q: Quantidade")
      setSubtitleModal("Quantidade do produto.")
      handleOpen()
      setModalID(0)
    } else if (modalID == 2) {
      setTitleModal("CF: Custo Fixo")
      setSubtitleModal("São todos aqueles custos que não variam independentemente da quantidade que foi produzida.")
      handleOpen()
      setModalID(0)
    } else if (modalID == 3) {
      setTitleModal("CV: Custo Variável")
      setSubtitleModal("São todos aqueles custos que variam de acordo com a quantidade que foi produzida.")
      handleOpen()
      setModalID(0)
    } else if (modalID == 4) {
      setTitleModal("CT: Custo Total")
      setSubtitleModal("Soma de todos os custos que uma empresa possui, seja ele fixo ou variável.")
      handleOpen()
      setModalID(0)
    } else if (modalID == 5) {
      setTitleModal("CFMe: Custo Fixo Médio")
      setSubtitleModal("É o valor do custo fixo diluído por cada unidade que foi produzida, descobrindo o custo fixo de cada unidade para a empresa.")
      handleOpen()
      setModalID(0)
    } else if (modalID == 6) {
      setTitleModal("CVMe: Custo Variavel Médio")
      setSubtitleModal("Ele diz respeito ao custo variável para cada unidade produzida. Variável importante para a precificação correta do produto.")
      handleOpen()
      setModalID(0)
    } else if (modalID == 7) {
      setTitleModal("CTme: Custo Total Médio")
      setSubtitleModal("É obtido através da divisão do custo total pela quantidade produzida. Importante variável a ser considerada, como o foco é o lucro é sempre interessante o valor de venda ser maior que o custo total médio.")
      handleOpen()
      setModalID(0)
    } else if (modalID == 8) {
      setTitleModal("Cmg: Custo Marginal")
      setSubtitleModal("Se diz respeito ao custo de se produzir uma nova unidade de um produto.")
      handleOpen()
      setModalID(0)
    }
  }, [modalID]);

  return (

    <S.Container>

      <S.Title>Tabela e gráfico exemplo, insira o CT (Custo Total) para efetuar os cálculos e gerar o gráfico.</S.Title>

      <S.Table>

        <tr>
          <th><button onClick={() => setModalID(1)} >Q</button></th>
          <th><button onClick={() => setModalID(2)} >CF</button></th>
          <th><button onClick={() => setModalID(3)} >CV</button></th>
          <th><button onClick={() => setModalID(4)} >CT</button></th>
          <th><button onClick={() => setModalID(5)} >CFme</button></th>
          <th><button onClick={() => setModalID(6)} >CVme</button></th>
          <th><button onClick={() => setModalID(7)} >CTme</button></th>
          <th><button onClick={() => setModalID(8)} >Cmg</button></th>
        </tr>


        <tr>
          <td><input type="number"
            onChange={(e) => setQ0(Number(e.target.value))} disabled value={q0} />
          </td>
          <td>{(cf).toFixed(2)}</td>
          <td>{(cf - cf).toFixed(2)}</td>
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
          <td>{(cf).toFixed(2)}</td>
          <td>{(ct1 - cf).toFixed(2)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt1(Number(e.target.value))} />
          </td>
          <td>{(cf / q1).toFixed(2)}</td>
          <td>{((ct1 - cf) / q1).toFixed(2)}</td>
          <td>{(ct1 / q1).toFixed(2)}</td>
          <td>{((ct1 - cf) / (q1 - q0)).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ2(Number(e.target.value))} value={q2} />
          </td>
          <td>{(cf).toFixed(2)}</td>
          <td>{(ct2 - cf).toFixed(2)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt2(Number(e.target.value))} />
          </td>
          <td>{(cf / q2).toFixed(2)}</td>
          <td>{((ct2 - cf) / q2).toFixed(2)}</td>
          <td>{(ct2 / q2).toFixed(2)}</td>
          <td>{(((ct2 - cf) - (ct1 - cf)) / (q2 - q1)).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ3(Number(e.target.value))} value={q3} />
          </td>
          <td>{(cf).toFixed(2)}</td>
          <td>{(ct3 - cf).toFixed(2)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt3(Number(e.target.value))} />
          </td>
          <td>{(cf / q3).toFixed(2)}</td>
          <td>{((ct3 - cf) / q3).toFixed(2)}</td>
          <td>{(ct3 / q3).toFixed(2)}</td>
          <td>{(((ct3 - cf) - (ct2 - cf)) / (q3 - q2)).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ4(Number(e.target.value))} value={q4} />
          </td>
          <td>{(cf).toFixed(2)}</td>
          <td>{(ct4 - cf).toFixed(2)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt4(Number(e.target.value))} />
          </td>
          <td>{(cf / q4).toFixed(2)}</td>
          <td>{((ct4 - cf) / q4).toFixed(2)}</td>
          <td>{(ct4 / q4).toFixed(2)}</td>
          <td>{(((ct4 - cf) - (ct3 - cf)) / (q4 - q3)).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ5(Number(e.target.value))} value={q5} />
          </td>
          <td>{(cf).toFixed(2)}</td>
          <td>{(ct5 - cf).toFixed(2)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt5(Number(e.target.value))} />
          </td>
          <td>{(cf / q5).toFixed(2)}</td>
          <td>{((ct5 - cf) / q5).toFixed(2)}</td>
          <td>{(ct5 / q5).toFixed(2)}</td>
          <td>{(((ct5 - cf) - (ct4 - cf)) / (q5 - q4)).toFixed(2)}</td>
        </tr>

        <tr>
          <td><input type="number"
            onChange={(e) => setQ6(Number(e.target.value))} value={q6} />
          </td>
          <td>{cf.toFixed(2)}</td>
          <td>{(ct6 - cf).toFixed(2)}</td>
          <td>
            <input type="number"
              onChange={(e) => setCt6(Number(e.target.value))} />
          </td>
          <td>{(cf / q6).toFixed(2)}</td>
          <td>{((ct6 - cf) / q6).toFixed(2)}</td>
          <td>{(ct6 / q6).toFixed(2)}</td>
          <td>{(((ct6 - cf) - (ct5 - cf)) / (q6 - q5)).toFixed(2)}</td>
        </tr>

      </S.Table>

      {/* <S.ContainerGraphic> */}
      <S.Graphic>

        <Graphic cf={cf} q0={q0} q1={q1} q2={q2} q3={q3} q4={q4} q5={q5} q6={q6}
          ct1={ct1} ct2={ct2} ct3={ct3} ct4={ct4} ct5={ct5} ct6={ct6} />

      </S.Graphic>

      <BasicModal title={titleModal} subtitle={subtitleModal} handleOpen={handleOpen} handleClose={handleClose} open={open} />
    </S.Container>
  )
}
