import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CaseStudyCategory = 'all' | 'erp' | 'saas' | 'ecommerce' | 'automation';

export interface CaseStudy {
  id: string;
  title: string;
  category: CaseStudyCategory;
  description: string;
  client: string;
  year: string;
  tags: string[];
}

export interface CaseStudiesState {
  items: CaseStudy[];
  filter: CaseStudyCategory;
  isLoading: boolean;
  error: string | null;
}

const initialState: CaseStudiesState = {
  items: [],
  filter: 'all',
  isLoading: false,
  error: null,
};

const caseStudiesSlice = createSlice({
  name: 'caseStudies',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<CaseStudyCategory>) {
      state.filter = action.payload;
    },
    fetchCaseStudiesRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchCaseStudiesSuccess(state, action: PayloadAction<CaseStudy[]>) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchCaseStudiesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setFilter,
  fetchCaseStudiesRequest,
  fetchCaseStudiesSuccess,
  fetchCaseStudiesFailure,
} = caseStudiesSlice.actions;
export default caseStudiesSlice.reducer;
