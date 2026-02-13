import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const DashboardPage = lazy(() => import('../pages/Dashboard'));
const SocietiesPage = lazy(() => import('../pages/Societies'));
const EventsPage = lazy(() => import('../pages/Events'));
const AiPage = lazy(() => import('../pages/Ai'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="p-8 text-sm text-slate-400">Loading dashboard...</div>}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: 'societies',
        element: (
          <Suspense fallback={<div className="p-8 text-sm text-slate-400">Loading societies...</div>}>
            <SocietiesPage />
          </Suspense>
        ),
      },
      {
        path: 'events',
        element: (
          <Suspense fallback={<div className="p-8 text-sm text-slate-400">Loading events...</div>}>
            <EventsPage />
          </Suspense>
        ),
      },
      {
        path: 'ai',
        element: (
          <Suspense fallback={<div className="p-8 text-sm text-slate-400">Loading AI assistant...</div>}>
            <AiPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

