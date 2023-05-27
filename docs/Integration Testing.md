# Integration Testing


# **Overview**

These tests focus on the integration of the NavBar, MovieList, and search functionality within the movie library project. The goal is to ensure that the components interact correctly and update as expected when users interact with the application.

## **Technologies for testing**

- React Testing Library 
- Jest
- React-router-dom

## **Testing Approach**

The tests use the React Testing Library to simulate user interactions and verify that the components update as expected. The testing approach follows the guiding principle: "The more your tests resemble the way your software is used, the more confidence they can give you." 

## **Test Cases**

****1. NavBar Click****

This test case ensures that clicking on a genre link in the NavBar updates the movie list component accordingly.

`test('pressing a genre link updates the movie list component', async () => {
  renderWithProviders(<MemoryRouter><NavBar/><Movies/></MemoryRouter>);
  fireEvent.click(genreLink);
  await waitFor(() => {
    const movies = screen.getAllByTestId('movie');
    expect(movies).toHaveLength(18);
  });
});`

****2. Search Bar****

This test case checks if writing a movie name in the search bar and pressing enter returns movies that have the entered name.

`test('writing a movie name in search bar and expecting movies that have that name', async () => {
  renderWithProviders(<MemoryRouter><NavBar /><Movies /></MemoryRouter>);
  const searchBar = screen.getByTestId('searchBar');
  const inputElement = searchBar.querySelector('.MuiInputBase-input');
  fireEvent.change(inputElement, { target: { value: 'SpiderMan' } });
  userEvent.type(inputElement, '{enter}');
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
});`

****3. MovieList****

This test case checks if the MovieList component renders without crashing and displays the correct number of movies based on the `numbersOfMoviesToShow` prop.

`it('renders without crashing', () => {
  renderWithProviders(<MemoryRouter><MovieList movies={movies}/></MemoryRouter>);
});

it('renders the correct number of movies based on the numbersOfMoviesToShow prop', () => {
  renderWithProviders(<MemoryRouter><MovieList movies={movies} numbersOfMoviesToShow={2} /></MemoryRouter>);
  expect(screen.getAllByTestId('movie')).toHaveLength(2);
});`