import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getLoggedInUserDetails } from "../../redux/actions";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit() {
    dispatch(getLoggedInUserDetails(username, password, setErrorMsg));
  }

  const handleGoogleLogin = () => {
    window.open("http://localhost:3500/googleAuth/google", "_self");
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          Login
        </Typography>

        {errorMsg && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <Box sx={{ mt: 2 }}>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
        <Typography>OR</Typography>
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
      </Paper>
    </Container>
  );
}
export default Login;
