interface Movie {
	id: number;
  title: string;
	description: string;
  video_id: string;
  background_image: string;
	thumbnail: string;
  duration: string;
  age: string;
  original: boolean;
	year: number;
	genre: Genre
	rating: string;
	series: Series;
}

interface Series {
	id: number;
	title: string;
	title_image: string;
	description: string;
  age: string;
	year: number;
	genre: Genre;
	image: string;
	rating: string;
	videos: Movie[];
	seasons: Season[];
}

type Genre =
	| "Action"
	| "Adventure"
	| "Animation"
	| "Biography"
	| "Comedy"
	| "Crime"
	| "Documentary"
	| "Drama"
	| "Family"
	| "Fantasy"
	| "Film-Noir"
	| "History"
	| "Horror"
	| "Music"
	| "Musical"
	| "Mystery"
	| "Romance"
	| "Sci-Fi"
	| "Sport"
	| "Thriller"
	| "War"
	| "Western";

interface Season {
  id: number;
  name: string;
  description: string;
  episodes: Movie[];
}

async function get_movie(id: number): Promise<Movie> {
  const response = await fetch(`http://localhost:3001/movies/${id}`);
  const data = await response.json();
  return data;
}

async function get_series(id: number): Promise<Series> {
  const response = await fetch(`http://localhost:3001/series/${id}`);
  const data = await response.json();
  return data;
}

async function get_movie_season(movie: Movie): Promise<Season> {
	const response = await fetch(`http://localhost:3001/series/${movie.series.id}`);
	const data = await response.json();
	const season = data["seasons"].forEach((element: Season) => {
		if(movie.id in element.episodes) {
			return element;
		}
	});
	return season;
}

async function get_all_movies(): Promise<Movie[]> {
  const response = await fetch(`http://localhost:3001/movies`);
  const data = await response.json();
  return data;
}

async function get_all_series(): Promise<Series[]> {
  const response = await fetch(`http://localhost:3001/series`);
  const data = await response.json();
  return data;
}

async function get_banner_movie(): Promise<Movie> {
  const response = await fetch(`http://localhost:3001/banner`);
  const data = await response.json();
  return data;
}

export {
  Movie,
  Series,
  Genre,
  get_movie,
  get_series,
  get_all_movies,
  get_all_series,
	get_banner_movie,
	get_movie_season
};