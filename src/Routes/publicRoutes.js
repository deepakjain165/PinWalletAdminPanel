import React from 'react'
import PublicAuths from './PublicAuth'
import Login from '../Views/Auth/Login'
const PublicRoutes = () => {
  return [
    {
      element: <PublicAuths />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
      ],
    },
  ]
}

export default PublicRoutes
