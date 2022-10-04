import Container from "../../components/Container"
import CppGraphic from "../../components/CppTable"

export default function CPP() {

    return (
        <Container title="TABELA">
            <>
                <h2>CPP (Curva de Possibilidade de Produção)</h2>
                <p>A Curva de Possibilidade de Produção (CPP) é uma ferramenta que demonstra, em formato gráfico, a capacidade de produção de um determinado produto. Este recurso pode ser utilizado, inclusive, para comparar o desempenho de dois produtos diferentes. A economia trabalha com três questões básicas: O que produzir, para quem produzir e como produzir. Quando se trata de CPP os principais valores analisados são o que produzir e como produzir. É preciso ter em mente que a CPP é utilizada, em geral, para comparar a capacidade produtiva de dois produtos diferentes.</p>
                <h2>Vantagens de se utilizar a CPP</h2>
                <p>A CPP é vista como básica porque, por meio dela, é possível considerar os fatores de produção para chegar à capacidade produtiva da empresa, cidade ou país.
                    A eficiência produtiva será o fator determinante sobre a possibilidade de investir em determinado tipo de produto ou não.
                </p>

                <h2>Custo de Oportunidade</h2>
                <p>“Custo de oportunidade de um produto é a
                    alternativa que tem de ser sacrificada a fim de
                    se obter esse produto.”</p>

                <p>O Custo de Oportunidade representa o custo associado a uma determinada escolha medido em termos da melhor oportunidade perdida. Por outras palavras, o custo de oportunidade representa o valor que atribuímos à melhor alternativa de que prescindimos quando efetuamos a nossa escolha.</p>
                <CppGraphic />
            </>
        </Container>
    )
}