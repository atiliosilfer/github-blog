import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 208px auto;
  grid-template-rows: auto;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.5);
  top: -80px;

  > div:first-child {
    display: flex;
    align-items: center;
    padding: 32px 0px 32px 32px;

    img {
      border-radius: 8px;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 32px 32px 0px;

    p {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ProfileTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 130%;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const ProfileFooter = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }
`
