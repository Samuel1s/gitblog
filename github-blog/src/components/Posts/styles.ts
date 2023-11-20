import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PostsGridContainer = styled.div`
  width: 60%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`

export const PostContent = styled(NavLink)`
  padding: 2rem;
  height: 18.75rem;
  text-decoration: none;
  border-radius: 0.625rem;
  color: ${(props) => props.theme['gray-200']};
  background: ${(props) => props.theme['gray-700']};

  h2 {
    font-weight: 700;
    margin-bottom: 1.25rem;
    color: ${(props) => props.theme['gray-50']};
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['gray-300']};
  }
`
