import { ActionIcon, useMantineColorScheme } from '@mantine/core';

const ColorSchemeToggle: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <span>L</span> : <span>D</span>}
    </ActionIcon>
  );
};

export default ColorSchemeToggle;
