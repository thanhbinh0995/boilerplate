import type { RouteObject } from 'react-router';

const HomePage = lazyload(() => import('pages/HomePage'));
const DashboardPage = lazyload(() => import('pages/DashboardPage'));
const SignInPage = lazyload(() => import('pages/SignInPage'));
const PageNotFound = lazyload(() => import('pages/PageNotFound'));

export default [
  {
    path: '/',
    element: <HomePage />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/404', element: <PageNotFound /> },
  { path: '*', element: <PageNotFound /> },
] as RouteObject[];
