import {
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";

import useAuth from '../hooks/useAuth';

// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
const ProtectedPage: React.FC = () => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user) return <Outlet />
  // Redirect them to the /login page, but save the current location they were
  // trying to go to when they were redirected. This allows us to send them
  // along to that page after they login, which is a nicer user experience
  // than dropping them off on the home page.
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedPage;
