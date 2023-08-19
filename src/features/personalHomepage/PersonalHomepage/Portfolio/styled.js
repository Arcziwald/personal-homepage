import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const StyledGithubIcon = styled(GithubIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const Header = styled.header`
  text-align: center;
`;

export const MyRecentProject = styled.h3`
  font-weight: normal;
  margin-top: 8px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;
