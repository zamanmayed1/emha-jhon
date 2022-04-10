import { getAuth } from 'firebase/auth';
import React, { children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';


const Lockpages = ({ children }) => {
          const auth = getAuth()
          const [user] = useAuthState(auth)
          const location = useLocation();
          if (!auth.user) {
                    return <Navigate to="/login" state={{ from: location }} replace />; 
                   
                    
          }
          return children
          

          
};

export default Lockpages;