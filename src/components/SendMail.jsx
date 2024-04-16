import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    db.collection("emails").add({
      To: data.To,
      Subject: data.Subject,
      Message: data.Message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());

    reset();
  };
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="To"
          placeholder="To"
          type="email"
          {...register("To", { required: "To is Required" })}
        />
        {errors.To && <p className="sendMail_error">{errors.To.message}</p>}
        <input
          name="Subject"
          placeholder="Subject"
          type="text"
          {...register("Subject", { required: "Subject is Required" })}
        />
        {errors.Subject && (
          <p className="sendMail_error">{errors.Subject.message}</p>
        )}
        <textarea
          {...register("Message", { required: "Message is Required" })}
          name="Message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
        />
        {errors.Message && (
          <p className="sendMail_error">{errors.Message.message}</p>
        )}
        <div className="sendMailOption">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
