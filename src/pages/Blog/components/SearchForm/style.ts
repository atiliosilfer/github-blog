import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }

  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    padding: 12px 16px;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.blue};
  }
`
