import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import {
  Address,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Paragrah,
  Wrapper,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink
          href={`mailto:${email}`}
          title={email}
          rel="noopener noreferrer"
        >
          {email}
        </EmailLink>
      </EmailWrapper>
      <Paragrah>
        I'm consistently open to taking on new projects and genuinely excited
        about the opportunity to be considered for a new role. If you have
        a&nbsp;website, a navigation dashboard, or a mobile application and need
        assistance in bringing your ideas to life, feel free to get in touch 🚀.
      </Paragrah>
      <SocialIcons />
    </Address>
  </Wrapper>
);
