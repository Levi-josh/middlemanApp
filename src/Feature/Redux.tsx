import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
interface AuthState {
  user: User | null;        
  isAuthenticated: boolean;  
  error: string | null;     
}

interface User {
  Id: string;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const verifyAuth = createAsyncThunk<User, void, { rejectValue: string }>(
  'mode/verifyAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://middlemanbackend.onrender.com/auth/verify', {
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

