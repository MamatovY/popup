import { configureStore } from '@reduxjs/toolkit'
import personal from './personalSlice'

// Middleware для обработки строковых экшенов
const stringMiddleware = (store) => (next) => (action) => {
    // Если экшен является строкой, создаем объект экшена и передаем его дальше
    if (typeof action === 'string') {
        return next({ type: action })
    }
    // В противном случае передаем экшен без изменений
    return next(action)
}

// Конфигурация Redux-стора с использованием Redux Toolkit
const store = configureStore({
    // Редукторы, которые будут использоваться в сторе
    reducer: {
        personal // Редуктор для состояния "personal"
    },
    // Мидлвары, включая созданный stringMiddleware для обработки строковых экшенов
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    // Включение/выключение Redux DevTools в зависимости от окружения
    devTools: process.env.NODE_ENV !== 'production'
})

export default store

