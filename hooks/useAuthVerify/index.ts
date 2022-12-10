import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { onAuthStateChanged } from '@firebase/auth';

import { firebaseAuth } from '@/config/firebase';
import useUiStore from '@/store/ui/store';
import { Load } from '@/store/ui/types';
import { Routes, routes, RouteTypes } from '@/utils/routes';

const verify = (
  type: RouteTypes,
  authenticated: boolean
): { load: Load; route: Routes } | undefined => {
  switch (type) {
    case RouteTypes.Privated:
      return authenticated
        ? undefined
        : { load: Load.RedirectToLogin, route: routes.login() };
    case RouteTypes.Protected:
      return !authenticated
        ? undefined
        : { load: Load.RedirectToHome, route: routes.home() };
    default:
      return;
  }
};

const useAuthVerify = (type: RouteTypes): boolean => {
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(true);

  const { enableLoad } = useUiStore();

  const verifyResult = useMemo(
    () => verify(type, authenticated),
    [authenticated, type]
  );

  useEffect(
    () =>
      void onAuthStateChanged(firebaseAuth, (user) => setAuthenticated(!!user)),
    []
  );

  useEffect(() => {
    if (verifyResult) {
      enableLoad(verifyResult.load);
      void router.push(verifyResult.route);
    }
  }, [enableLoad, router, verifyResult]);

  return !verifyResult;
};

export default useAuthVerify;
