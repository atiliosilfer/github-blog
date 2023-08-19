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
`
