import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  padding: 16px;
  margin: 119px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 26px;
    margin-top: 34px;
  }
`;

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
  }
`;
