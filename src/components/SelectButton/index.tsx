import * as S from './style';

interface IProps {
    name: string;
    href: string;
}

export default function SelectButton(props: IProps) {

    const { name, href } = props

    return (
        <S.Button href={href}>{name}</S.Button>
    )
}