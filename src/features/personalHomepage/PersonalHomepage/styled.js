import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  padding: 16px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
  }
`;
