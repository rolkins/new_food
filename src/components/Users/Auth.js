import React, {useState, useRef} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {login_or_registration} from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://ecofruits.store/">
        Ecofruits.store
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const usernameRef = useRef()
    const passwordRef = useRef()

    const getUsername = () => {
        setUsername(usernameRef.current.value)
    }

    const getPassword = () => {
        setPassword(passwordRef.current.value)
    }

    console.log(username)

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/01/10/23/34/food-3075065_1280.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Ваша почта"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={getUsername}
                value={username}
                inputRef={usernameRef}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Ваш пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={getPassword}
                value={password}
                inputRef={passwordRef}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />
              <Button
                variant="contained"
                sx={{ mt: 3, mb: 2, }}
                // onClick={() => login_or_registration(username, password)}
                onClick={() => dispatch(login_or_registration(username, password))}
              >
                Войти или зарегистрироваться
              </Button>
                {/*<Button*/}
                {/*    fullWidth*/}
                {/*    variant="contained"*/}
                {/*    sx={{ mt: 3, mb: 2, }}*/}
                {/*    onClick={() => dispatch(login_or_registration(username, password))}*/}
                {/*>*/}
                {/*    Передумал заходить*/}
                {/*</Button>*/}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Забыли пароль?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}