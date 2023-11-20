import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostDetailContainer = styled.div`
  width: 60%;
  display: flex;
  padding: 0 1rem;
  margin: 0 auto;
  align-items: center;
  margin-top: -5.5rem;
  flex-direction: column;
  justify-content: center;
`

export const PostDetailCard = styled.div`
  width: 100%;
  height: auto;
  background: ${(props) => props.theme['gray-700']};
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      background: transparent;
      color: ${(props) => props.theme.blue};
      transition: border 0.2s;
      border-bottom: 2px solid transparent;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
    }
  }
  div {
    margin-top: 1.5rem;
  }

  @media (max-width: 680px) {
    padding: 0.5rem;
    div {
      h1 {
        text-align: center;
        line-height: 2.5rem;
        margin-bottom: 1rem;
      }
    }
    footer {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`

export const PostInfo = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    i {
      color: ${(props) => props.theme['gray-400']};
    }
  }

  @media (max-width: 680px) {
    footer {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`

export const NavButton = styled(NavLink)`
  text-decoration: none;
  background: transparent;
  color: ${(props) => props.theme.blue};
  transition: border 0.2s;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.blue};
  }
`
export const PostDetailContent = styled.main`
  width: 100%;
  padding: 2.5rem;
  white-space: pre-wrap;
  overflow: hidden;
  div {
    overflow-x: auto;
    width: 100%;
    height: 100%;
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['gray-700']};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.blue};
    }

    h3 {
      color: ${(props) => props.theme.blue};
    }

    a {
      text-decoration: none;
      background: transparent;
      color: ${(props) => props.theme.blue};

      &:hover {
        transition: border 2s;
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
    }

    img {
      max-width: 100%;
    }
  }
  @media (max-width: 680px) {
    padding: 1rem 0;
  }
`
