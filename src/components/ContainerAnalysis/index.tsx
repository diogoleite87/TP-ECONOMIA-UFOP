import * as S from './style'

import { ReactNode } from "react";

interface IProps {
    children?: ReactNode
    title: string;
}

export default function ContainerAnalysis(props: IProps) {

    const { children, title } = props

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            {children}
        </S.Container>
    )
}