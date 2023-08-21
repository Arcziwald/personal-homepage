import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Container } from "./styled";
import { skills, nextSkills } from "./skillsData";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import toolsIcon from "./toolsIcon.png";
import rocketIcon from "./rocketIcon.png";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <MainInformation />
    <main>
      <Skills title="My skillset includes" 
      icon={toolsIcon} 
      skills={skills} 
      />

      <Skills
        title="What I want to learn next"
        icon={rocketIcon}
        skills={nextSkills}
      />

      <Portfolio />
    </main>
    <Footer />
  </Container>
);
