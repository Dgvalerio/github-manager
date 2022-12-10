export enum Routes {
  Login = `/`,
  Home = `/home`,
}

export const routes = {
  login: (): Routes => Routes.Login,
  home: (): Routes => Routes.Home,

  privated: [Routes.Home],
  protected: [Routes.Login],
  public: [] as Routes[],
};

export enum RouteTypes {
  Privated = 'privated',
  Protected = 'protected',
  Public = 'public',
}
