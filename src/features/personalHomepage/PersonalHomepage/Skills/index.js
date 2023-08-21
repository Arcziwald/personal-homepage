import { StyledHeader, Item, List, Section, Bullet } from "./styled";
import { Icon } from "../styled";

export const Skills = ({ title, icon, skills }) => (
  <Section>
    <StyledHeader>
      {title} <Icon src={icon} alt="" />
    </StyledHeader>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          <Bullet />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);
