import { FC } from 'react';

import { Typography } from '@mui/material';

import styled from '@emotion/styled';

const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const Redirect: FC = () => (
  <Container>
    <Typography variant="h2" component="h1">
      Aguarde, estamos te redirecionando...
    </Typography>
  </Container>
);

export default Redirect;
