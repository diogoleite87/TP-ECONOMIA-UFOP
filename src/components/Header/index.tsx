import * as S from './style'

import NavBar from "../NavBar"

export default function Header() {

    return (
        <S.Container>
            <S.Title>Trabalho Prático - ENP150 - ECONOMIA</S.Title>
            <S.Description href='#' target="_blank">André Lucas Santos - 20.2.8106</S.Description>
            <S.Description href='https://github.com/diogoleite87' target="_blank">Diogo Leite Lucas - 20.2.8072</S.Description>
            <S.Description href='https://github.com/MarqueVitor' target="_blank">Vitor Marques dos Santos - 20.2.8175</S.Description>
            <NavBar />
        </S.Container>
    )
}