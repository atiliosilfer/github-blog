import { styled } from 'styled-components'

export const PostCardContainer = styled.div`
  width: 416px;
  height: 260px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  padding: 32px;

  div {
    display: flex;
    margin-bottom: 20px;
  }

  h2 {
    color: ${(props) => props.theme['base-title']};
    width: 283px;
    font-size: 1.3 rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }

  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    opacity: 0.9;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
    cursor: pointer;
  }
`
