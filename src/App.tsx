import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './router/config';
import CookieBanner from './components/feature/CookieBanner';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieBanner />
    </>
  );
}
