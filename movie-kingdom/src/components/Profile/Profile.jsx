import React, { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/authentication";
import { useGetMovieQuery, useGetCreditsQuery, useGetSimilarMovieQuery, useGetListQuery } from "../../services/TMDB";
import RatedMovies from "../RatedMovies/RatedMovies";

const Profile = () => {
	const user = useSelector(userSelector);
	const logOut = () => {
		localStorage.clear();
		window.location.href = "/";
	};
	const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: "favorite/movies", accountId: user.id, sessionId: localStorage.getItem("session_id"), page: 1 });
	const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({
		listName: "watchlist/movies",
		accountId: user.id,
		sessionId: localStorage.getItem("session_id"),
		page: 1,
	});

	useEffect(() => {
		refetchFavorites();
		refetchWatchlisted();
	}, []);

	return (
		<Box>
			<Box display="flex" justifyContent="space-between">
				<Typography variant="h4" gutterBottom>
					My Profile
				</Typography>
				<Button color="inherit" onClick={logOut}>
					Logout &nbsp; <ExitToApp />
				</Button>
			</Box>
			{!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
				<Typography variant="h5">Add Favorities or WatchList some Movies to see them here.</Typography>
			) : (
				<Box>
            
            <RatedMovies title={"Favorite Movies"} movies={favoriteMovies} />
            <RatedMovies title={"Watchlist"} movies={watchlistMovies} /> 
        </Box>
			)}
		</Box>
	);
};

export default Profile;
