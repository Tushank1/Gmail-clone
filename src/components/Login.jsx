import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { Button } from "@mui/material";
import { logIn } from "../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          logIn({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pEGdHupm6pwR7Gfjn5GDeektiyCafff6JthaMWTIEkU9cezlQeQwN206XtRxlyWl5A"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
