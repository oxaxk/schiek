import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './router/config';
import CookieBanner from './components/feature/CookieBanner';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieBanner />
      <div className="fixed bottom-20 right-4 z-50 md:hidden">
        <a
          href="tel:+4917655677271"
          className="flex items-center gap-3 rounded-full bg-red-600 px-5 py-4 text-white shadow-lg shadow-red-600/40 active:scale-95 transition"
          aria-label="24/7 Abschleppdienst anrufen"
        >
          <i className="ri-phone-line text-xl" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-wide">24/7 Anrufen</span>
        </a>
      </div>
    </>
  );
}

export default App;