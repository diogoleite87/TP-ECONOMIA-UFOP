import * as S from './style';
import { NavLink } from "react-router-dom";

interface IProps {
    name: string;
    href: string;
}

export default function SelectButton(props: IProps) {

    const { name, href } = props

    return (
        <NavLink to={href}>
            <S.Button href={href}>{name}</S.Button>
        </NavLink>
    )
}