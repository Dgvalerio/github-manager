import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { signInWithPopup } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';

import { Button, Typography } from '@mui/material';

import styled from '@emotion/styled';

import Redirect from '@/components/redirect';
import { firebaseAuth, githubAuthProvider } from '@/config/firebase';
import useAuthVerify from '@/hooks/useAuthVerify';
import useUiStore from '@/store/ui/store';
import { Load } from '@/store/ui/types';
import { routes, RouteTypes } from '@/utils/routes';

const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const LoginPage: NextPage = () => {
  const pass = useAuthVerify(RouteTypes.Protected);

  const { enableLoad, disableLoad } = useUiStore();

  const router = useRouter();

  const handleGithubLogin = async (): Promise<void> => {
    enableLoad(Load.Login);

    try {
      await signInWithPopup(firebaseAuth, githubAuthProvider);

      enableLoad(Load.Login);
      await router.push(routes.home());
    } catch (error) {
      const e = error as FirebaseError;

      console.error(e);
    } finally {
      disableLoad(Load.Login);
    }
  };

  if (!pass) return <Redirect />;

  return (
    <Container>
      <Typography variant="h2" component="h1">
        Bem-vindo ao Github Manager
      </Typography>
      <Typography variant="h4" component="p">
        Antes de tudo, faça login para continuar:
      </Typography>
      <br />
      <Button onClick={handleGithubLogin}>Login com o Github</Button>
    </Container>
  );
};

export default LoginPage;
