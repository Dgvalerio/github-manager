import { FC, PropsWithChildren } from 'react';

import { Box } from '@mui/material';

import styled from '@emotion/styled';

import Loading from '@/components/loading';
import ThemeModeSwitcher from '@/components/wrapper/layout/ThemeModeSwitcher';
import useUiStore from '@/store/ui/store';

const Container = styled(Box)`
  &,
  main {
    display: flex;
    flex: 1;
  }

  flex-direction: row;

  main {
    flex-direction: column;
    padding: 2rem;
  }
`;

const Bar = styled(Box)`
  display: flex;

  min-height: 4rem;
  min-width: 4rem;

  justify-content: center;
  align-items: center;
`;

const TopBar = styled(Bar)``;

const LeftBar = styled(Bar)``;

const RightBar = styled(Bar)``;

const BottomBar = styled(Bar)``;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { loading } = useUiStore();

  return (
    <>
      <TopBar />
      <Container>
        <LeftBar>
          <ThemeModeSwitcher />
        </LeftBar>
        <main>{children}</main>
        <RightBar>
          <ThemeModeSwitcher />
        </RightBar>
      </Container>
      <BottomBar />
      {loading.length > 0 && <Loading />}
    </>
  );
};

export default Layout;
