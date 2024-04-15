import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageISOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageISOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageISOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageISOpen;

export default mailSlice.reducer;
