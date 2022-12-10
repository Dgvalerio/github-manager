import { NextPage } from 'next';

import { Button, Typography } from '@mui/material';

import useUiStore from '@/store/ui/store';

const Home: NextPage = () => {
  const { switchThemeMode } = useUiStore();

  return (
    <main>
      <Typography variant="h1">Github Manager</Typography>
      <Button onClick={switchThemeMode}>Switch Theme</Button>
    </main>
  );
};

export default Home;
