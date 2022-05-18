import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const isLoadingSlice = createSlice( {
    name: 'isLoading',
    initialState,
    reducers: {
        closeLoader(state) {
            state.isLoading = false            
        },
        openloader(state) {
            state.isLoading = true
        },
        getLoader(state) {
            return state.isLoading
        }
    }
})

const store = configureStore({
    reducer: {
        isLoading: { isLoading: isLoadingSlice.reducer}
    }
});

export const loaderActions = isLoadingSlice.actions;
export default store;