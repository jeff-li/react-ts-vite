import { Navbar } from '@mantine/core';

import SideNavLink from './SideNavLink';
import { SideNavUser } from './SideNavUser';

const SideNav: React.FC = () => {
  return (
    <Navbar
      p="xs" 
      width={{
        // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
        sm: 300,
        // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
        lg: 400,
        // When other breakpoints do not match base width is used, defaults to 100%
        base: 100,
      }}
      hiddenBreakpoint="sm"
    >
      {/* First section with normal height (depends on section content) */}
      {/* <Navbar.Section>First section</Navbar.Section> */}

      {/* Grow section will take all available space that is not taken by first and last sections */}
      <Navbar.Section grow>
        <SideNavLink label="Home" route="/home" />
        <SideNavLink label="Projects" route="/projects" />
        <SideNavLink label="Users" route="/users" />
        <SideNavLink label="Requests" route="/requests" />
        <SideNavLink label="Discussions" route="/discussions" />
      </Navbar.Section>

      {/* Last section with normal height (depends on section content) */}
      <Navbar.Section>
        <SideNavUser />
      </Navbar.Section>
    </Navbar>
  );
};

export default SideNav;
