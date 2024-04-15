import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/counter/mailSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
  },
});
