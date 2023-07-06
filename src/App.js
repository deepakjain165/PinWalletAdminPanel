import './App.css';
import PrivateAdmin from './Routes/privateAdminroutes';
import PublicRoutes from './Routes/publicRoutes';
import {  HashRouter as Router, useRoutes } from 'react-router-dom';

function App() {
  const adminrouting = [...PublicRoutes(), ...PrivateAdmin()]
  const AdminRouteConfig = () => useRoutes(adminrouting)
  return (
    <Router>
    <AdminRouteConfig/>
    </Router>
  );
}

export default App;
