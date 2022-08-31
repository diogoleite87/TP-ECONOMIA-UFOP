import * as S from './style'

import { ReactNode } from "react";

interface IProps {
    children?: ReactNode
    title: string
}

export default function Container(props: IProps) {

    const { children, title } = props

    return (
        <>
            <S.Title>{title}</S.Title>
            <S.Container>
                <S.Content>
                    {children}
                </S.Content>
            </S.Container>
        </>
    )
}