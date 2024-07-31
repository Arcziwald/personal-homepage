import myPhoto from "./profileArczi.png";
import {
  Avatar,
  StyledButtonLink,
  ButtonIcon,
  Name,
  Summary,
  ThisIs,
  Wrapper,
} from "./styled";
import { email } from "../email";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={myPhoto} alt="Artur Mochnia" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Artur Mochnia</Name>
      <Summary>
        👨💻 I'm a passionate Frontend Developer in search of growth prospects.
        My appetite for learning is insatiable, and I'm committed to enhancing
        my skill set. I aspire to broaden my expertise and push my limits.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email} rel="noreferrer">
        <ButtonIcon />
        Hire Me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
