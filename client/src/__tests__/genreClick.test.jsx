import React from 'react';
import { fireEvent, waitFor, screen } from '@testing-library/react';
import { Movies, NavBar } from '../components';
import { renderWithProviders } from '../utils/test-utils';
import { MemoryRouter } from 'react-router-dom';



describe('ganreClick', () => {


  test('pressing a genre updates the movie list component', async () => {
    renderWithProviders(<MemoryRouter><NavBar/><Movies/></MemoryRouter>); // Use customRender instead of render
    // Find a genre link and click on it
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    const genreLink = screen.getByTestId('popular');
    console.log(genreLink)
    fireEvent.click(genreLink);
  
    // // Wait for the movie list component to update
    await waitFor(() => {
      const movies = screen.getAllByTestId('movie');
      expect(movies).toHaveLength(18); // Assuming 18 movies are returned for the 'Popular' genre
    });
  });
  
});
