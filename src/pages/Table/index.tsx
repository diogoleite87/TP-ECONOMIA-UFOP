import * as S from './style'

import Container from "../../components/Container"
import DenseTable from "../../components/DenseTable"

export default function Table() {

    return (
        <Container title="TABELA">
            <>
                <h2>Custo de Produção</h2>
                <p>Custo de produção é todo aquele custo relacionado à cadeia produtiva de uma empresa. É um conceito que serve de base para tomada de decisões sobre a sustentabilidade de um determinado empreendimento, visando sempre a maximização dos retornos. O objetivo de estudar o custo de produção é elaborar um inventário disponível em um determinado período de produção, no qual se procura identificar o valor dos produtos fabricados.</p>

                <h2>Como funciona?</h2>
                <p>O custo de produção é calculado a partir da soma do custo total, no qual são incluídos os valores de matérias primas, do frete e impostos, do custo da mão de obra direta junto com o custo indireto de fabricação, são variáveis inconstantes que dificultam os cálculos.</p>

                <h2>Qual a importância?</h2>
                <p>Os custos de produção são importantes para que seja realizada a análise da eficiência de produção da empresa, a partir disso, é possível entender se os custos estão sendo acima do esperado ou não e quais ações podem ser realizadas para que eles diminuam.</p>
                <p>Um exemplo que pode ser realizado é, a partir dos custos altos, pode-se identificar que algum maquinário está com sua eficiência abaixo do esperado ou está defasado para aquela determinada produção, a partir disso, pode se investir em outro equipamento que, no início será um custo, mas no longo prazo, vai ser um investimento caso ele seja mais eficiente;</p>
                <p><S.Span>Custos: </S.Span>Estão relacionados com fatores ligados diretamente a produção, como por exemplo o custo de matérias primas;</p>
                <p><S.Span>Despesas: </S.Span>Estão relacionados com os gatos necessários para manter a empresa funcionando, como por exemplo a despesa com o setor de marketing;</p>
                <p><S.Span>Custos caixa: </S.Span>Dizem respeito aos custos que impactam diretamente o caixa da empresa, ocasionando saída de recursos, como por exemplo o pagamento de fornecedores;</p>
                <p><S.Span>Custos não caixa: </S.Span>Os custos não caixa não representa uma saída financeira, como por exemplo depreciação de equipamentos.</p>

                <h2>Exemplos de custos de produção: </h2>
                <p><S.Span>Custo variável (CV): </S.Span>São todos aqueles custos que variam de acordo com a quantidade que foi produzida. Exemplo: Matérias primas;</p>
                <p><S.Span>Custo variável médio (CVM): </S.Span>Ele diz respeito ao custo variável para cada unidade produzida. Variável importante para a precificação correta do produto;</p>
                <p><S.Span>Custo fixo (CF): </S.Span>São todos aqueles custos que não variam independentemente da quantidade que foi produzida. Exemplo: O valor do aluguel a curto prazo;</p>

                <p><S.Span>Custo fixo médio (CFM): </S.Span>É o valor do custo fixo diluído por cada unidade que foi produzida, descobrindo o custo fixo de cada unidade para a empresa. CF/QUANTIDADE;</p>
                <p><S.Span>Custo total (CT): </S.Span>Soma de todos os custos que uma empresa possui, seja ele fixo ou variável. CV + CF;</p>
                <p><S.Span>Custo total médio (CTM): </S.Span>É obtido através da divisão do custo total pela quantidade produzida. Importante variável a ser considerada, como o foco é o lucro é sempre interessante o valor de venda ser maior que o custo total médio;</p>
                <p><S.Span>Custo marginal (CMG): </S.Span>Se diz respeito ao custo de se produzir uma nova unidade de um produto;</p>
                <p><S.Span>Custo de oportunidade: </S.Span>Se diz respeito ao valor que você deixou de ganhar por fazer determinada escolha;</p>
                <p><S.Span>Lucro: </S.Span>É a receita total menos os custos totais;</p>

                <h2>Curvas de custo e suas formas: </h2>

                <p><S.Span>Curva de custo marginal: </S.Span>Sobe com o aumento da quantidade produzida;</p>
                <p><S.Span>Curva de custo médio: </S.Span>A curva de custo médio tem forma de U. Em baixos níveis de produção o custo médio é alto porque o custo fixo é dividido por poucas unidades produzidas. O custo médio declina quando a produção aumenta. O custo médio começa a subir porque os custos variáveis aumentam substancialmente com o maior nível de produção;</p>

                <DenseTable />

                <p><S.SpanRed>Observação: </S.SpanRed>Sempre que o custo marginal é menor que o custo total médio, o custo total médio está diminuindo. Sempre que o custo marginal é maior que o custo total médio, o custo total médio está aumentando. A curva de custo marginal cruza o a curva de custo total médio no ponto de escala eficiente. A escala eficiente é quantidade que minimiza o custo total médio.</p>
            </>
        </Container>
    )
}