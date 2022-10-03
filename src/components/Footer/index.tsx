import * as S from './style'

import UfopIcon from '../../img/ufopicon.png'

export function Footer() {
    return (
        <S.Container>
            <S.ContainerText>
                <S.Title>UNIVERSIDADE FEDERAL DE OURO PRETO - UFOP</S.Title>
                <S.TitleDescription>Instituto de Ciencias Exatas e Aplicadas - ICEA</S.TitleDescription>
                <S.TitleDescription>Sistemas de Informação - S.I</S.TitleDescription>
            </S.ContainerText>
            <S.UfopIcon src={UfopIcon}></S.UfopIcon>
        </S.Container>
    );
}