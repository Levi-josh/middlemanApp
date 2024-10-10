// Redux slice for handling authentication (using createAsyncThunk)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
interface User {
  Id: string;
  email: string;
  username: string;
  profilePic: string;
  // Add any other fields that are part of the user object
}
interface AuthState {
  user: User | null;         // User object or null
  isAuthenticated: boolean;  // Is the user authenticated
  error: string | null;      // Error message or null
  loading :boolean
}
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
  loading:true
};

// Async action to verify authentication
export const verifyAuth = createAsyncThunk('auth/verifyAuth', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('`https://middlemanbackend.onrender.com/auth/verify', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    });

    if (response.ok) {
      const data = await response.json();
      return data; // This is the authenticated user data
    } else {
      throw new Error('Not authenticated');
    }
  } catch (err: any) {
    return rejectWithValue(err.message); // Handle the error in rejected action
  }
});

// Redux slice for managing authentication state
export const authSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(verifyAuth.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = 'something went wrong';
      })
      .addCase(verifyAuth.pending, (state) => {
        state.loading = true;  // While the auth check is pending
      });
  },
});

export default authSlice.reducer;


