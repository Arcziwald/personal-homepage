import axios from "axios";

const githubUsername = "arcziwald"
const githubAPIBaseURL = "https:api.github.com";

export const getRepositories = (username) =>
  axios
    .get(`${githubAPIBaseURL}/users/${githubUsername}/repos`)
    .then((response) => response.data);
