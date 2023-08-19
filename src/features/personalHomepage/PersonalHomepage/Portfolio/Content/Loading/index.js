import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    Please wait, projects are&nbsp;being&nbsp;loaded...
    <StyledSpinner />
  </Wrapper>
);
