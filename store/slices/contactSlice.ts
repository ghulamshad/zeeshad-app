import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactState {
  form: ContactFormState;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  error: string | null;
}

const initialForm: ContactFormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
};

const initialState: ContactState = {
  form: initialForm,
  isSubmitting: false,
  submitStatus: 'idle',
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setField(
      state,
      action: PayloadAction<{ field: keyof ContactFormState; value: string }>
    ) {
      state.form[action.payload.field] = action.payload.value;
    },
    resetForm(state) {
      state.form = initialForm;
      state.submitStatus = 'idle';
      state.error = null;
    },
    submitLeadRequest(state, action: PayloadAction<ContactFormState>) {
      state.isSubmitting = true;
      state.submitStatus = 'idle';
      state.error = null;
    },
    submitLeadSuccess(state) {
      state.isSubmitting = false;
      state.submitStatus = 'success';
      state.form = initialForm;
      state.error = null;
    },
    submitLeadFailure(state, action: PayloadAction<string>) {
      state.isSubmitting = false;
      state.submitStatus = 'error';
      state.error = action.payload;
    },
  },
});

export const {
  setField,
  resetForm,
  submitLeadRequest,
  submitLeadSuccess,
  submitLeadFailure,
} = contactSlice.actions;
export default contactSlice.reducer;
