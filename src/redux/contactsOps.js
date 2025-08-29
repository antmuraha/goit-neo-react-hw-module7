import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  import.meta.env.MODE !== 'production'
    ? 'http://localhost:3000'
    : 'https://us-central1-graceful-path-468618-i2.cloudfunctions.net/proxy-mockapi';

const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`${BASE_URL}/contacts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { fetchContacts, addContact, deleteContact };
