import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  background-image: url(${props => props.imageUrl});
  height: 200px;
  text-align: center;
  color: #fff;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 48px;
`