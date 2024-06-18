import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function ProtectedRoute({ children, roles }) {
  const role = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === null) {
      navigate('/login', { replace: true });
    }
	else if(!roles.includes(role)) {
		navigate('/*');
	}
  }, [navigate, role, roles]);

  return children;
}
