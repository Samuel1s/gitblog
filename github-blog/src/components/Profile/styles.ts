import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 60%;
  height: 12.5rem;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  border-radius: 0.625rem;
  margin-top: -5rem;
  background: ${(props) => props.theme['gray-700']};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 10rem;
    max-height: 10rem;
    margin-right: 2rem;
    object-fit: scale-down;
    border-radius: 0.625rem;
  }

  @media (max-width: 680px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ProfileBioContent = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`

export const ProfileDescriptionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0.5rem 0;
    font-weight: 700;
    color: ${(props) => props.theme['gray-50']};
  }
`

export const ProfileLinks = styled.div`
  gap: 1rem;
  display: flex;
  margin-top: 1.5rem;

  span {
    color: ${(props) => props.theme['gray-100']};
  }
`
