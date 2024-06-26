import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Nav = styled.nav<{ theme: string }>`
  background-color: transparent;
  width: max-content;

  @media (min-width: 1024px) {
    background-color: transparent;
    transition: background-color 0.3s ease;
    padding: 0 2rem;
    border-radius: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    margin-top: 3rem;

    @media (min-width: 1024px) {
      gap: 0;
      flex-direction: row;
      margin-top: 0;
    }

    li {
      margin-right: 1rem;
      width: max-content;

      @media (min-width: 1024px) {
        margin-right: 1.6rem;
      }
    }

    li {
      display: flex;
      flex-direction: row;
      margin-right: 3rem;

      @media (min-width: 1024px) {
        flex-direction: column;
      }

      span {
        font-size: 1rem;
        text-transform: uppercase;
        background: ${({ theme }) => theme.tag};
        color: ${({ theme }) => theme.tagText};
        padding: 0.5rem 1rem;
        border-radius: 1.4rem;
        height: max-content;

        @media (min-width: 1024px) {
          margin-left: 0.5rem;
          bottom: 0;
        }
      }
    }
  }
`;

const linkStyles = css<{ theme: string }>`
  text-decoration: none;
  font-size: 1.4rem;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.menuText};
  transform: scale(1);

  &:hover {
    color: ${({ theme }) => theme.icon};
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }

  @media (min-width: 1024px) {
    color: ${({ theme }) => theme.text };
    font-size: 1.6rem;
  }
`;

export const Link = styled(RouterLink)<{ theme: string }>`
  ${linkStyles}
`;

export const LinkScroll = styled.a<{ theme: string }>`
  ${linkStyles}
`;
