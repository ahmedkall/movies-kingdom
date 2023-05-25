import React from 'react';
import { fireEvent, waitFor, screen, within } from '@testing-library/react';
import { Movies, NavBar } from '../components';
import { renderWithProviders } from '../utils/test-utils';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';




describe('searchBar', () => {


    test('writing a movie name in search bar and expecting movies that have that name', async () => {
        renderWithProviders(<MemoryRouter><NavBar /><Movies /></MemoryRouter>); // Use customRender instead of render
        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();
        const searchBar = screen.getByTestId('searchBar');
        // eslint-disable-next-line testing-library/no-node-access
        const inputElement = searchBar.querySelector('.MuiInputBase-input');
        fireEvent.change(inputElement, { target: { value: 'SpiderMan' } });
        userEvent.type(inputElement, '{enter}');
        // Wait for the movie list component to update
        await waitFor(() => {
            const movies = screen.getAllByTestId('movie');
            const spidermanMovies = movies.map((movie) => {
                const childElement = within(movie).getByTestId('title');
                return childElement.textContent;
            });
            const SpiderManMovieReturned = spidermanMovies.some((movieTitle) =>
                movieTitle.toLowerCase().includes("spider-man")
            );
            expect(SpiderManMovieReturned).toBe(true);
        });


    });

});