import * as S from './style'

export const Head = ({
  titulo,
  background = 'https://placehold.co/600x400/ff5555/000000'
}) => {
  return <S.HeaderContainer imageUrl={background}>
    <S.Title>{titulo}</S.Title>
  </S.HeaderContainer>
}

export default Head