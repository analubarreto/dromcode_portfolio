import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button<{ theme: string, $isActive: boolean, $isOnTop: boolean }>`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.menuText};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: ${({ $isActive }) => $isActive ? 'bold' : 'normal' };
  transition: font-weight 0.3s ease-in-out;
  margin-top: 1rem;

  @media (min-width: 1024px) {
    /* color: ${({ theme }) => theme.text}; */
    color: ${({ theme, $isOnTop }) => $isOnTop ? theme.text : theme.menuText};
    margin-top: 0;
    margin-left: 1.6rem;
    width: 10rem;
  }
`;