/**
 * Sharing data across screens:
 *   These libraries define what comment data is shared across screens and
 *   defines how we can change or update that farmer data.  This uses React
 *   Redux.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import base from './Datastore';
import type { Comment } from '../types';


const initialState: Array<Comment> = [];

// Sharing data across screens:
//   Based on how we setup the Farmer slice, what initial state should we have
//   for comments? 
//   What reducers should we define?
export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    init: (state, comment) => {
      state.push(comment.payload);
    },
    append: (state, content) => {
      const comment = content.payload;
      state.push(comment);
      // Using Cloud Data Exercise:
      //   When do we need to send data to the cloud?
      base('Comments').create([
      ],
      function(err, records) {
      });
    },
  },
});

// Sharing data across screens:
//   What reducers should we export here?
export const { init, append } = commentSlice.actions;

export default commentSlice.reducer;
