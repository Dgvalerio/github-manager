export enum Routes {
  Login = `/`,
  Home = `/home`,
}

export const routes = {
  login: (): Routes => Routes.Login,
  home: (): Routes => Routes.Home,
};
