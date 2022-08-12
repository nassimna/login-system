import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../Actions/auth';
import './style.css';

const theme = createTheme();

export default function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');
  const errorr = useSelector((state) => state.authReducer);

  const [userData, setUser] = useState({
    first_name: '',
    password: '',
    last_name: '',
    email: '',
    telephone: '',
    username: '',
    profession: 1,
    plan: 1,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = {
      first_name: userData.first_name,
      password: userData.password,
      last_name: userData.last_name,
      email: userData.email,
      telephone: userData.telephone,
      username: userData.username,
      profession: userData.profession,
      plan: userData.plan,
    };
    dispatch(signup(form, history));
  };
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
          <div className={msg !== '' ? 'error-div' : ''}>
            <p>{msg}</p>
          </div>
          <div style={{ width: '50%' }}>
            <Grid
              container
              rowSpacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="firstName"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                  onChange={(e) => setUser({ ...userData, first_name: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="lastName"
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
                  onChange={(e) => setUser({ ...userData, last_name: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="userName"
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                  onChange={(e) => setUser({ ...userData, username: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                {' '}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setUser({ ...userData, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="mot de passe"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setUser({ ...userData, password: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="telephone"
                  label="telephone"
                  type="telephone"
                  id="telephone"
                  autoComplete="current-telephone"
                  onChange={(e) => setUser({ ...userData, telephone: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                {' '}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Profession
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userData.profession}
                    label="Plan"
                    onChange={(e) => setUser({ ...userData, profession: e.target.value })}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                {' '}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userData.plan}
                    label="Age"
                    onChange={(e) => setUser({ ...userData, plan: e.target.value })}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <Box
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: 1,
            }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: 'white',
                backgroundColor: '#36C5F1',
              }}
              onClick={handleSubmit}
            >
              Sign up
            </Button>

            <Link href="login">You have an account already? Login</Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
