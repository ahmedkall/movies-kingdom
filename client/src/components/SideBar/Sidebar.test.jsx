import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store.js';
import Sidebar from './Sidebar';
import { ThemeProvider, createTheme } from '@mui/material';

const renderWithProviders = (component) => {
  const theme = createTheme(); // mock theme
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {component}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

it('renders Sidebar component', () => {
  renderWithProviders(<Sidebar />);
});

it('renders categories', () => {
  renderWithProviders(<Sidebar />);
  const categories = screen.getAllByRole('link', { name: /Popular|Top Rated|Upcoming/i });
  expect(categories).toHaveLength(3);
});

