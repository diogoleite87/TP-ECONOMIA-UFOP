import * as S from './style'

import SelectButton from "../SelectButton"

export default function NavBar() {

    return (
        <S.Container>
            <SelectButton name="TELA INICIAL" href="/" />
            <SelectButton name="TABELA" href="/table" />
            <SelectButton name="CPP" href="/cpp" />
        </S.Container>
    )
}