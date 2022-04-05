import React, { useState } from "react";
import {
  List,
  ListItem,
  PageLink,
  Menu,
  MenuContainer,
  MenuTitle,
  MenuLink,
  MenuItem,
} from "./nav";
import { useMediaPredicate } from "react-media-hook";

const nav = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Menu", link: "/menu" },
  { id: 4, title: "Your Cart", link: "/cart" },
  { id: 5, title: "Your profile", link: "/profile" },
  { id: 6, title: "Contacts", link: "/contacts" },
];

const Nav = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const lessThan1024 = useMediaPredicate("(max-width: 1024px)");

  return (
    <>
      <List>
        {nav.map((link) => (
          <ListItem key={link.id}>
            <PageLink to={link.link}>{link.title}</PageLink>
          </ListItem>
        ))}
      </List>
      {lessThan1024 && (
        <>
          <Menu
            onClick={() => {
              toggleMenu(!isMenuOpen);
            }}
          >
            <MenuItem />
          </Menu>

          <MenuContainer className={isMenuOpen ? "active" : ""}>
            {nav.map((link) => (
              <MenuTitle key={link.id}>
                <MenuLink to={link.link}>{link.title}</MenuLink>
              </MenuTitle>
            ))}
          </MenuContainer>
        </>
      )}
    </>
  );
};

export default Nav;