// reducer/spaces.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpacesState, SpaceData } from "../Constants";

const initialState: SpacesState = {
  space_list: [],
};

const spacesSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    addSpaceList: (state, action: PayloadAction<SpaceData[]>) => {
      state.space_list = action.payload;
    },
  },
});

export const { addSpaceList } = spacesSlice.actions;
export default spacesSlice.reducer;
