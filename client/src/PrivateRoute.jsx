
import { Routes, Route, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ element: Element, isLoggedIn, ...rest }) => {
  if (!isLoggedIn) {
    toast.error('Please login or sign up first.');
    console.log("login first")
    return <Navigate to="/" />;
  }
  return <Element />;
};

const ProtectedRoutes = ({ isLoggedIn, ...rest }) => (
  <Routes {...rest}>
    <Route
      path="*"
      element={<Navigate to="/" />}
    />
  </Routes>
);

export { ProtectedRoute, ProtectedRoutes };
