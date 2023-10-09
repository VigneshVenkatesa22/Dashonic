import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getChats as getChatsApi,
  getGroups as getGroupsApi,
  getContacts as getContactsApi,
  getMessages as getMessagesApi,
  addMessage as addMessageApi,
} from "../../helpers/fakebackend_helper";

export const getChats: any = createAsyncThunk("chat/getChats", async () => {
  try {
    const response = getChatsApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const getGroups: any = createAsyncThunk("chat/getGroups", async () => {
  try {
    const response = getGroupsApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const getContacts: any = createAsyncThunk("chat/getContacts", async () => {
  try {
    const response = getContactsApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const getMessages: any = createAsyncThunk("chat/getMessages", async (roomId: any) => {
  try {
    const response = getMessagesApi(roomId);
    return response;
  } catch (error) {
    return error;
  }
});

export const addMessage: any = createAsyncThunk(
  "chat/addMessage",
  async (message: any) => {
    try {
      const response = addMessageApi(message);
      return response;
    } catch (error) {
      return error;
    }
  }
);
