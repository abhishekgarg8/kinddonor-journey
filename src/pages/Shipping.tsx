
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to NotFound page when someone tries to access this page directly
    navigate('/not-found', { replace: true });
  }, [navigate]);
  
  // This return statement won't render as the redirect will happen immediately
  return null;
};

export default Shipping;
