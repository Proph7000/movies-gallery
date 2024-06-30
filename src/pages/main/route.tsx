import { RouteObject } from 'react-router-dom'

import { routeNamesPath } from '@shared/constants'

import { MainPage } from './ui'

export const MainPageRouter: RouteObject = {
  path: routeNamesPath.main,
  element: <MainPage />,
}
