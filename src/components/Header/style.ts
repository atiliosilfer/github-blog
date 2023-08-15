import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 296px;

  background-color: ${(props) => props.theme['base-profile']};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 100px;

    h1 {
      font-family: Coda, sans-serif;
      font-size: 24px;
      font-weight: 400;
      color: ${(props) => props.theme.blue};
    }
  }
`
