import * as S from './style'

import { ReactNode } from "react";

interface IProps {
    children?: ReactNode
}

export default function ContainerAnalysis(props: IProps) {

    const { children } = props

    return (
        <S.Container>
            <S.Title>Histórico de Analises</S.Title>
            {children}
        </S.Container>
    )
}