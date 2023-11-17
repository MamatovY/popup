import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    personal: [],
    offset: 4,
    selectId: ''
}

// Создание асинхронного thunk для получения данных о персонале
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
        // Редуктор для изменения смещения (offset)
        changeOffset: (state, action) => {
            state.offset = action.payload
        },
        // Редуктор для изменения выбранного элемента
        changeSelect: (state, action) => {
            console.log(action.payload);
            state.selectId = action.payload
        }

    },
    extraReducers: (builder) => {
        // Обработка различных состояний запроса данных во время использования createAsyncThunk
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