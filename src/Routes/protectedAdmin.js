import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ProjectLayout from '../ProjectLayout';
function ProtectedAdmin(props) {
  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('userDetails'));
    return user;
};

  return isAuthenticated() ? (
    <>
    <ProjectLayout>
      <Outlet/>
    </ProjectLayout>
    </>
  ) : (
    <Navigate to="/" replace />
  )
}
export default ProtectedAdmin
