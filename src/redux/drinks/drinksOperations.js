import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMyDrinks = createAsyncThunk(
  'drinks/fetchMyDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/own');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMyDrink = createAsyncThunk(
  'drinks/deleteMyDrink',
  async (drink, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/own/remove`, drink);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteDrinks = createAsyncThunk(
  'drinks/fetchFavoriteDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/favorite');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteDrink = createAsyncThunk(
  'drinks/deleteFavoriteDrink',
  async (drink, thunkAPI) => {
    console.log(drink);
    try {
      const response = await axios.delete(`/drinks/favorite/remove`, drink);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteDrink = createAsyncThunk(
  'drinks/addFavoriteDrink',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/drinks/favorite/add`, id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDrinkById = createAsyncThunk(
  'drinks/getDrinkByID',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/${drinkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchMainpage = createAsyncThunk(
  'drinks/fetchMainpage',
  async (count, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/mainpage?count=${count}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const fetchAllDrinks = createAsyncThunk(
  'drinks/fetchAllDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/search?page=44&limit=10');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);