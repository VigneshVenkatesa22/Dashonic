import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getInvoices as getInvoicesApi, addNewInvoice as addInvoiceApi, deleteInvoice as deleteInvoiceApi,
  updateInvoice as updateInvoiceApi
} from "../../helpers/fakebackend_helper";

export const getInvoices: any = createAsyncThunk("chat/getInvoices", async () => {
  try {
    const response = getInvoicesApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addInvoice: any = createAsyncThunk("chat/addinvoices", async (invoice: any) => {
  try {
    const response = addInvoiceApi(invoice);
    return response;
  } catch (error) {
    return error;
  }
})

export const deleteInvoice: any = createAsyncThunk(
  "chat/deleteInvoice",
  async (event: any) => {
    try {
      const response = deleteInvoiceApi(event);
      const deletedInvoice = await response;
      return deletedInvoice;
    } catch (error) {
      return error;
    }
  }
);

export const updateInvoice: any = createAsyncThunk(
  "chat/updateInvoice",
  async (invoice: any) => {
    try {
      const response = updateInvoiceApi(invoice);
      const modifiedEvent = await response;
      return modifiedEvent;
    } catch (error) {
      return error;
    }
  }
);


