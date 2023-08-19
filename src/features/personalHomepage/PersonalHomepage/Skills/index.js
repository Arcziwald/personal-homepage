import { StyledHeader, Item, List, Section, Bullet } from "./styled";

export const Skills = ({ title, skills }) => (
  <Section>
    <StyledHeader>{title}</StyledHeader>
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
