import { NextPage } from 'next';

import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';

import styled from '@emotion/styled';

import { firebaseAuth, githubAuthProvider } from '@/config/firebase';
import useUiStore from '@/store/ui/store';
import { GithubAuthProvider, signInWithPopup } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';

const Container = styled.main`
  &,
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  main {
    justify-content: center;
    align-items: center;
  }

  footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
`;

const Home: NextPage = () => {
  const { switchThemeMode, themeMode } = useUiStore();

  const handleGithubLogin = async (): Promise<void> => {
    try {
      const result = await signInWithPopup(firebaseAuth, githubAuthProvider);

      const credential = GithubAuthProvider.credentialFromResult(result);

      const token = credential?.accessToken;
      const user = result.user;

      console.log({ result, credential, token, user });
    } catch (error) {
      const e = error as FirebaseError;

      const errorCode = e.code;
      const errorMessage = e.message;
      const email = e.customData?.email;

      const credential = GithubAuthProvider.credentialFromError(e);

      console.log({ errorCode, errorMessage, email, credential });
    }
  };

  return (
    <Container>
      <main>
        <Typography variant="h2" component="h1">
          Bem-vindo ao Github Manager
        </Typography>
        <Typography variant="h4" component="p">
          Antes de tudo, faça login para continuar:
        </Typography>
        <br />
        <Button onClick={handleGithubLogin}>Login com o Github</Button>
      </main>
      <footer>
        <IconButton size="large" color="inherit" onClick={switchThemeMode}>
          {themeMode === 'dark' ? (
            <LightModeIcon color="disabled" />
          ) : (
            <DarkModeIcon color="disabled" />
          )}
        </IconButton>
      </footer>
    </Container>
  );
};

export default Home;
