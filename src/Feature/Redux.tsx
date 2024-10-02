import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of your state
interface AuthState {
  user: User | null;         // User object or null
  isAuthenticated: boolean;  // Is the user authenticated
  error: string | null;      // Error message or null
}

// Define the User type (update this according to your backend response structure)
interface User {
  Id: string;
}

// Initial state with proper typing
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

// Async action to verify authentication, returning the `User` type
export const verifyAuth = createAsyncThunk<User, void, { rejectValue: string }>(
  'mode/verifyAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3500/auth/verify', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
      });

      if (response.ok) {
        const data: User = await response.json(); // The data will be a User object
        return data;  // Return user data
      } else {
        throw new Error('Not authenticated');
      }
    } catch (err: any) {
      return rejectWithValue(err.message); // Handle error with rejectWithValue
    }
  }
);

// Redux slice with proper typing
export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyAuth.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(verifyAuth.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload || 'Unknown error'; // Assign the error message
      });
  },
});

export default modeSlice.reducer;

