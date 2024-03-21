// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     if (username.trim() === '' || password.trim() === '') {
//       setError('Please enter both username and password');
//       alert('Please enter both username and password'); // Display alert message
//     } else {
//       setError('');
//       // Add your login logic here (e.g., API call, authentication, etc.)
//       console.log('Logged in with username:', username);
//       // Redirect to the dashboard or another page after successful login
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password');
      alert('Please enter both username and password');
    } else {
      setError('');
      // Simulate successful login
      console.log('Logged in with username:', username);
      alert('Login successful');
      // Redirect to the dashboard or another page after successful login
    }
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear local storage, reset state, etc.)
    setUsername('');
    setPassword('');
    alert('Logged out successfully');
    // Redirect to the home page or login page after logout
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
