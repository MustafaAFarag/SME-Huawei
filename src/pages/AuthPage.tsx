import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  function toggleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      {isLogin ? (
        <Signup toggleLogin={toggleLogin} />
      ) : (
        <Login toggleLogin={toggleLogin} />
      )}
    </div>
  );
}

export default AuthPage;
