import { useEffect } from 'react';

import { NextPage } from 'next';

import { Typography } from '@mui/material';

import Redirect from '@/components/redirect';
import useAuthVerify from '@/hooks/useAuthVerify';
import useUiStore from '@/store/ui/store';
import { Load } from '@/store/ui/types';
import { RouteTypes } from '@/utils/routes';

const HomePage: NextPage = () => {
  const pass = useAuthVerify(RouteTypes.Privated);

  const { disableLoad } = useUiStore();

  useEffect(() => disableLoad(Load.RedirectToHome), [disableLoad]);

  if (!pass) return <Redirect />;

  return (
    <Typography variant="h2" component="h1">
      Home Page
    </Typography>
  );
};

export default HomePage;
