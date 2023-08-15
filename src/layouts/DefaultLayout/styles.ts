import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['base-background']};
  height: 100vh;

  display: flex;
  flex-direction: column;
`
