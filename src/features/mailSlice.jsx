import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageISOpen: false,
  },
  reducers: {
    selectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageISOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageISOpen = false;
    },
  },
});

export const { selectedMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;

export const selectedOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageISOpen;

export default mailSlice;
