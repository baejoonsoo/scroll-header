import styled, { css } from 'styled-components';

export const Page = styled.main`
  height: 400vh;
  background: linear-gradient(to top, red, white);
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #707070;
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 0.4s ease;

  ${({ hide }: { hide: boolean }) =>
    hide &&
    css`
      transform: translateY(-80px);
    `}
`;
