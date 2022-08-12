import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../Actions/auth';
import './style.css';

const theme = createTheme();

export default function Login() {
  const history = useHistory();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const errorr = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = { username, password };
    dispatch(login(form, history));
  };
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (errorr[0] !== undefined) {
      setMsg(errorr[0].response.data.Message);
    } else {
      setMsg('');
    }
  }, [errorr]);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="100%">
        <CssBaseline />
        <Box className="main-box">
          <Avatar sx={{ m: 1, bgcolor: '#36C5F1' }}>
            <LockOutlinedIcon style={{ color: 'white' }} />
          </Avatar>
          <div className={msg !== '' || msg !== undefined ? 'error-div' : ''}>
            <p>{msg}</p>
          </div>
          <Box component="form" noValidate sx={{ mt: 1, width: '50%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="utilisateur"
              name="userName"
              autoComplete="userName"
              autoFocus
              error={errorr[0] != null}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              disabled={!username || !password}
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: 'white',
                backgroundColor: '#36C5F1',
              }}
              onClick={handleSubmit}
            >
              LOGIN
            </Button>
            <Link href="signup">Don&apos;t have an account? Sign Up</Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
