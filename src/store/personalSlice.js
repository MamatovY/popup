import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    personal: [],
    offset: 4,
    selectId: ''
}

export const fetchPersonal = createAsyncThunk(
    'personal/fetchPersonal',
    async () => {
        const res = await axios.get(`https://layout.solvintech.ru/nuxt/api/`)
        return res.data
    }
)

const personalSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        changeOffset: (state, action) => {
            state.offset = action.payload
        },
        changeSelect: (state, action) => {
            console.log(action.payload);
            state.selectId = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPersonal.pending, state => { state.status = 'loading' })
            .addCase(fetchPersonal.fulfilled, (state, action) => {
                state.personal = action.payload
                state.status = 'finish'
            })
            .addCase(fetchPersonal.rejected, (state, action) => {
                state.status = action.error.code
            })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = personalSlice
export const { changeOffset, changeSelect } = actions


export default reducer