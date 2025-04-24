import { NavLink,useHref } from 'react-router-dom';
import * as S from './style'

const Footer = () => {
    const url = useHref ()




  return <S.FooterContainer>
   {url != '/' && <NavLink to="/">voltar</NavLink>}
    Projeto by Coti Informática</S.FooterContainer>
}

export default Footer