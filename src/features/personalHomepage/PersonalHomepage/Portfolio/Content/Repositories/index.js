import { List } from "./styled";
import { RepositoryTile } from "./RepositoryTile/index";

export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <RepositoryTile
        key={id}
        name={name}
        description={description}
        homepage={homepage}
        html_url={html_url}
      />
    ))}
  </List>
);
