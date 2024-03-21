import React from 'react';
import Login from './Login';
import Signup from './Signup';

const Combi = () => {
  const handleLogin = (email, password) => {
    console.log('Login credentials:', email, password);
    // Implement actual login logic here
  };

  const handleSignup = (email, password) => {
    console.log('Signup credentials:', email, password);
    // Implement actual sign-up logic here
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
      <Signup onSignup={handleSignup} />
    </div>
  );
};

export default Combi;
