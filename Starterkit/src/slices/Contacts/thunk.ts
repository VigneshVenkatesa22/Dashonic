import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUsers as getUsersApi,
    addNewUser as addNewUserApi, deleteUser as deleteUserApi, updateUser as updateUserApi } from "../../helpers/fakebackend_helper";

export const getUsers:any = createAsyncThunk("contacts/getUsers", async () => {
    try {
        const response = getUsersApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addNewUser:any = createAsyncThunk("contacts/addNewUser", async (user : any) => {
    try {
        const response = addNewUserApi(user);
        return response;
    } catch (error) {
        return error;
    }
});

export const deleteUser:any = createAsyncThunk(
    "contacts/deleteContact",
    async (user: any) => {
        try {
            const response = deleteUserApi(user);
            const deletedInvoice = await response;
            return deletedInvoice;
        } catch (error) {
            return error;
        }
    }
);

export const updateUser:any = createAsyncThunk(
    "contacts/updateContact",
    async (user: any) => {
        try {
            const response = updateUserApi(user);
            const modifiedEvent = await response;
            return modifiedEvent;
        } catch (error) {
            return error;
        }
    }
);