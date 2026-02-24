// File: src/router/config.tsx
// import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from '../pages/home/page';
import Datenschutz from '../pages/datenschutz/page';
import Impressum from '../pages/impressum/page';
import About from '../pages/about/page';
import Kontakt from '../pages/kontakt/page';
import Leistungen from '../pages/leistungen/page';
import Faq from '../pages/faq/page';
import CookieSettingsPage from '../pages/cookie/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/leistungen',
    element: <Leistungen />,
  },
  {
    path: '/kontakt',
    element: <Kontakt />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: '/cookie',
    element: <CookieSettingsPage />,
  },
  {
    path: '/datenschutz',
    element: <Datenschutz />,
  },
  {
    path: '/impressum',
    element: <Impressum />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;