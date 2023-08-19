import { socials } from "./socials";
import { Item, Link, List } from "./styled";

export const SocialIcons = () => (
    <List>
        {socials.map(({ name, url, Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="noreferrer">
                    <Icon />
                </Link>
            </Item>
        ))}
    </List>
);