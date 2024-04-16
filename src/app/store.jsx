import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "../features/mailSlice";
import userSlice from "../features/userSlice";

export default configureStore({
  reducer: {
    mail: mailSlice.reducer,
    user: userSlice.reducer,
  },
});
