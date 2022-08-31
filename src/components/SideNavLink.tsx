import { NavLink } from "react-router-dom";
import { UnstyledButton, Group, Text, createStyles } from '@mantine/core';

interface SideNavLinkProps {
  label: string;
  route: string;
  icon?: React.ReactNode;
  color?: string;
}

const useStyles = createStyles(() => ({
  activeBkg: {
    button: {
      backgroundColor: 'whitesmoke',
      color: 'purple'
    },
  },
}));

const SideNavLink: React.FC<SideNavLinkProps> = ({ label, route }) => {
  const { classes } = useStyles();
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive ? classes.activeBkg : undefined
      }
    >
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          {/* include icons in the menu item */}
          {/* <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon> */}
          <Text size="sm">[#]</Text>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </NavLink>
  );
}

export default SideNavLink;
