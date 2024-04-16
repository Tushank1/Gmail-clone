import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { logIn, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          logIn({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app">
            <Header />
            <div className="app_body">
              <Sidebar />
              <Routes>
                <Route path="/mail" element={<Mail />} />
                <Route path="/" element={<EmailList />} />
              </Routes>
            </div>
            {sendMessageIsOpen && <SendMail />}
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
