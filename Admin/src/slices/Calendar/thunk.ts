import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getEvents as getEventsApi,
  addNewEvent as addNewEventApi,
  updateEvent as updateEventApi,
  deleteEvent as deleteEventApi,
  getCategories as getCategoriesApi,
} from "../../helpers/fakebackend_helper";

export const getEvents:any = createAsyncThunk("calendar/getEvents", async () => {
  try {
    const response = getEventsApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewEvent:any = createAsyncThunk(
  "calendar/addNewEvent",
  async (event: any) => {
    try {
      const response = addNewEventApi(event);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const updateEvent:any = createAsyncThunk(
  "calendar/updateEvent",
  async (event: any) => {
    try {
      const response = updateEventApi(event);
      const modifiedEvent = await response;
      return modifiedEvent;
    } catch (error) {
      return error;
    }
  }
);

export const deleteEvent:any = createAsyncThunk(
  "calendar/deleteEvent",
  async (event: any) => {
    try {
      const response = deleteEventApi(event);
      const deletedEvent = await response;
      return deletedEvent;
    } catch (error) {
      return error;
    }
  }
);

export const getCategories:any = createAsyncThunk(
  "calendar/getCategories",
  async () => {
    try {
      const response = getCategoriesApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);
