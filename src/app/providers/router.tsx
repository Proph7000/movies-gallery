import {
  createBrowserRouter,
  Navigate,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

import { MainPageRouter } from '@pages/main'

import { routeNamesPath } from '@shared/constants'

import { MainLayout } from '../layouts'

const router = createBrowserRouter([
  {
    path: routeNamesPath.main,
    element: <MainLayout />,
    children: [MainPageRouter],
  },
  {
    path: '*',
    element: <Navigate replace to={routeNamesPath.main} />,
  },
])

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
