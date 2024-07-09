import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/userSlice';
import { Box } from '@mui/material';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    if (email === "test@gmail.com" && +password === 12345678) {
      localStorage.setItem("bigRamy", JSON.stringify({ email: email }));
      dispatch(setUser());
      navigate('/Ebook')
    } else {
      alert("enter credential you see on the page");
    }
  };

  return (
    <Box className="login-container">
      <Box className="login-box">
        <h2 className="login-header">Login</h2>
        <p>Email: test@gmail.com</p>
        <p>Password: 12345678</p>
        <form>
          <Box className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
            />
          </Box>
          <Box className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e?.target?.value)}
            />
          </Box>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="login-button"
          >
            Login
          </button>
        </form>
      </Box>
    </Box>
  );
}
