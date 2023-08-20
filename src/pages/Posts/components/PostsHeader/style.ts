import styled from 'styled-components'

export const PostsHeaderContainer = styled.div`
  position: relative;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.5);
  top: -80px;
  padding: 32px;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 130%;
    margin: 20px 0px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const Footer = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }
`
