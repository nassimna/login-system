import { React, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Actions/auth";
import { useHistory } from "react-router-dom";
const theme = createTheme();

export default function Login() {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const errorr = useSelector((state) => state.authReducer);
  //console.log("from login", errorr[0].message);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    let form = { username: username, password: password };
    dispatch(login(form, history));
  };
  const [msg, setMsg] = useState("");

  useEffect(() => {
    errorr[0] != null ? setMsg(errorr[0].response.data.Message) : setMsg("");
  }, [errorr]);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="100%">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#36C5F1" }}>
            <LockOutlinedIcon style={{ color: "white" }} />
          </Avatar>
          <div
            style={
              msg != ""
                ? {
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFBABA",
                    color: "#D8000C",
                  }
                : {}
            }
          >
            <p>{msg}</p>
          </div>
          <Box component="form" noValidate sx={{ mt: 1, width: "30%" }}>
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
                color: "white",
                backgroundColor: "#36C5F1",
              }}
              onClick={handleSubmit}
            >
              LOGIN
            </Button>

            <Link href="signup">{"Don't have an account? Sign Up"}</Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
