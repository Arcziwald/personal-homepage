import axios from "axios";
import { githubUsername } from "./PersonalHomepage/Portfolio/githubUsername";

const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = () =>
  axios
    .get(`${githubAPIBaseURL}/users/${githubUsername}/repos`)
    .then((response) => response.data);
