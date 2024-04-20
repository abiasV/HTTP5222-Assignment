import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
