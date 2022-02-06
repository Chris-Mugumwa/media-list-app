import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPopularMovies = createAsyncThunk(
	'popularMovies/getPopularMovies',
	async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=69a8a5f5d8ff53eb47ca412ef26ae76f&language=en-US&page=1`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getLatestMovies = createAsyncThunk(
	'latestMovies/getLatestMovies',
	async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/latest?api_key=69a8a5f5d8ff53eb47ca412ef26ae76&language=en-US`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getTopRatedMovies = createAsyncThunk(
	'topRatedMovies/getTopRatedMovies',
	async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=69a8a5f5d8ff53eb47ca412ef26ae76f&language=en-US&page=1`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getUpcomingMovies = createAsyncThunk(
	'upcomingMovies/getUpcomingMovies',
	async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=69a8a5f5d8ff53eb47ca412ef26ae76&language=en-US&page=1`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getMovieSearch = createAsyncThunk(
	'movieSearch/getMovieSearch',
	async term => {
		const response = await fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=69a8a5f5d8ff53eb47ca412ef26ae76f&language=en-US&query=${term}&page=1&include_adult=false`)
      const formatResponse = await response.json()
		return formatResponse
	},
)  

   
export const movieSlice = createSlice({
	name: 'movie',
	initialState: {
		popularMovies: [],
		latestMovies: [],
		topRatedMovies: [],
		upcomingMovies: [],
      movieSearch: [],
		isLoading: false,
	},
	extraReducers: {
		[getPopularMovies.pending]: state => {
			state.isLoading = true
		},
		[getPopularMovies.fulfilled]: (state, action) => {
			state.popularMovies = action.payload
			state.isLoading = false
		},
		[getPopularMovies.rejected]: state => {
			state.isLoading = false
		},
		[getLatestMovies.pending]: state => {
			state.isLoading = true
		},
		[getLatestMovies.fulfilled]: (state, action) => {
			state.latestMovies = action.payload
			state.isLoading = false
		},
		[getLatestMovies.rejected]: state => {
			state.isLoading = false
		},
		[getTopRatedMovies.pending]: state => {
			state.isLoading = true
		},
		[getTopRatedMovies.fulfilled]: (state, action) => {
			state.topRatedMovies = action.payload
			state.isLoading = false
		},
		[getTopRatedMovies.rejected]: state => {
			state.isLoading = false
		},
		[getUpcomingMovies.pending]: state => {
			state.isLoading = true
		},
		[getUpcomingMovies.fulfilled]: (state, action) => {
			state.upcomingMovies = action.payload
			state.isLoading = false
		},
		[getUpcomingMovies.rejected]: state => {
			state.isLoading = false
      },
      [getMovieSearch.pending]: state => {
			state.loading = true
		},
		[getMovieSearch.fulfilled]: (state, action) => {
			state.movieSearch = action.payload
			state.loading = false
		},
		[getMovieSearch.rejected]: state => {
			state.loading = false
		},
	},
})

export default movieSlice.reducer