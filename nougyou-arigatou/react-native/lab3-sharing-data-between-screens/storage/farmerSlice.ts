/**
 * Sharing data across screens:
 *   These libraries define what farmer data is shared across screens and
 *   defines how we can change or update that farmer data.  This uses React
 *   Redux.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import type { Farmer } from '../types';

// Defines the initial farmers.
const initialState: Array<Farmer> = [];

// A Slice represents all the farmer information we share and the methods we
// want for updating farmers.
export const farmerSlice = createSlice({
  name: 'farmer',
  initialState,
  reducers: {
    // Sharing data across screens:
    //   When a new farmer signs up for the app, we want to make sure they are
    //   listed in the full farmer list.  How do we add that so the farmer is
    //   listed in the farmer list screen?
    append: (state, content) => {
      const farmer = content.payload;
      state.push(farmer);
    },
    // Sometimes a farmer wants to change their profile information.
    //
    // Sharing data across screens:
    //   How do we update a single farmer's profile information so it shows up
    //   correctly in the farmer list screen?
    update: (state, content) => {
      const { username, farmer } = content.payload;
      for (var i =0; i < state.length; ++i) {
        if (state[i].Username == username) {
          state[i] = {
            ...state[i],
            ...farmer,
          }
        }
      }
    },
  },
});

// Sharing data across screens:
//   other components can only access reducers if we export them.  We must
//   export every reducer that will be called from another component.
export const { init, append, update } = farmerSlice.actions;

export default farmerSlice.reducer;
