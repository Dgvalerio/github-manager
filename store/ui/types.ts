import { Theme } from '@mui/material';

export enum Load {
  Login = 'github-login',
  RedirectToLogin = 'redirect-to-login',
  RedirectToHome = 'redirect-to-home',
}

export interface UiStoreTypes {
  theme: Theme;

  themeMode: Theme['palette']['mode'];

  switchThemeMode(): void;

  loading: Load[];

  enableLoad(load: Load): void;

  disableLoad(load: Load): void;
}
