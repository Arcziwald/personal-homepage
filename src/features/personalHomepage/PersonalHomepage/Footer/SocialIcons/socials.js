import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
// import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as linkedInIcon } from "./icons/linkedin.svg";
// import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
  {
    name: "GitHub",
    url: "http://github.com/Arcziwald",
    Icon: styleIcon(GithubIcon),
  },
  // {
  //name: "Facebook",
  //url: "http://facebook.com",
  //Icon: styleIcon(FacebookIcon),
  //},
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/artur-mochnia-070a8184/",
    Icon: styleIcon(linkedInIcon),
  },
  //{
  // name: "Instagram",
  //url: "http://instagram.com",
  //Icon: styleIcon(InstagramIcon),
  //},
];
