import { ButtonLink } from "../../../ButtonLink/styled";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const ErrorBox = () => (
  <Wrapper>
    <WarningIcon />
    <Header>Ooooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry... failed to load Github&nbsp;projects.
      <br />
      You can check thme directly&nbsp;on&nbsp;Github.
    </Paragraph>
    <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">
      Go to Github
    </ButtonLink>
  </Wrapper>
);
