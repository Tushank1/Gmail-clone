import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => console.log(data);
  //   const onError = (errors, e) => console.log(errors, e);

  //   const onSubmit = async (data) => {
  //     try {
  //       // Simulate an asynchronous operation, such as sending data to a server
  //       await new Promise((resolve) => setTimeout(resolve, 1000)); // This is just a placeholder for your actual async operation
  //       console.log("Data submitted successfully:", data);
  //       // Here you can handle the response, e.g., show a success message or redirect the user
  //     } catch (error) {
  //       console.error("Error submitting data:", error);
  //       // Handle errors, e.g., show an error message
  //     }
  //   };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="To"
          placeholder="To"
          type="text"
          {...register("To", { register: true })}
        />
        <input
          name="Subject"
          placeholder="Subject"
          type="text"
          {...register("Subject", { register: true })}
        />
        <input
          {...register("Message", { register: true })}
          name="Message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
        />

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
