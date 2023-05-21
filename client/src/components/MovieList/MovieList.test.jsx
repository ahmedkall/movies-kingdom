import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieList from './MovieList';

describe('MovieList', () => {
  const movies = {
    results: [
      { id: 1, title: 'Movie 1', poster_path: '/poster1.jpg', vote_average: 7.5 },
      { id: 2, title: 'Movie 2', poster_path: '/poster2.jpg', vote_average: 8.0 },
      { id: 3, title: 'Movie 3', poster_path: '/poster3.jpg', vote_average: 6.5 },
    ],
  };

  it('renders without crashing', () => {
    render(<MemoryRouter><MovieList movies={movies} /></MemoryRouter>);
  });

  it('renders the correct number of movies based on the numbersOfMoviesToShow prop', () => {
    render(<MemoryRouter><MovieList movies={movies} numbersOfMoviesToShow={2} /></MemoryRouter>);

    expect(screen.getAllByTestId('movie')).toHaveLength(2);
  });
});