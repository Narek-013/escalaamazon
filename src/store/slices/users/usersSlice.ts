import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store"; // Проверьте путь к вашему store

// Описываем интерфейс для состояния
interface UsersState {
    userToken: string | null; // userToken может быть null
}

// Функция для инициализации userToken из localStorage
const getUserTokenFromLocalStorage = (): string | null => {
    const token = localStorage.getItem('userToken');
    return token ? token : null;
};

// Начальное состояние
const initialState: UsersState = {
    userToken: getUserTokenFromLocalStorage(),
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.userToken = action.payload;
            
            localStorage.setItem('userToken', action.payload); // Сохраняем токен в localStorage
        },
        logout: (state) => {
            state.userToken = null;
            localStorage.removeItem('userToken'); // Удаляем токен из localStorage при logout
        }
    }
});
// Селектор с типизацией
export const usersSelector = (state: RootState): UsersState => state.users;

// Экспортируем экшены и редьюсер
export const { login, logout } = usersSlice.actions;
export const usersReducers = usersSlice.reducer;