import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import userReducer from '../features/authentication'
import genreOrCategoryReducer from '../features/currentGenreOrCategory'
import { tmdbApi } from "../services/TMDB";
import ToggleDarkMode from './ToggleDarkMode'


export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
        reducer: {
          [tmdbApi.reducerPath]: tmdbApi.reducer,
          currentGenreOrCategory: genreOrCategoryReducer,
          user: userReducer,
        },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(tmdbApi.middleware),
      }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}><ToggleDarkMode>{children}</ToggleDarkMode></Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}