import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 10rem);

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
