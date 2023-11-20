import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100vw;

  @media (max-width: 680px) {
    padding: 1rem;
  }
`

export const PostsContent = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const PostsContentInfo = styled.div`
  width: 60%;
  display: flex;
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme['gray-100']};
  }

  span {
    color: ${(props) => props.theme['gray-300']};
  }
`
