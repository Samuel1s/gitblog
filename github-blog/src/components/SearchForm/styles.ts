import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  gap: 1rem;
  width: 60%;
  display: flex;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-500']};
    outline: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-200']};
    padding: 1rem;
    margin-bottom: 3rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }

    &:hover {
      border: 1px solid ${(props) => props.theme.blue};
      transition: border-color 0.2s;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }
`
