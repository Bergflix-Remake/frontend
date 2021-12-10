import { Movie } from "./types/Movie";
import { Season } from "./types/Season";
import { Series } from "./types/Series";

export function error_movie(text: string): Movie {
	return {
		id: -1,
		title: "An error occured.",
		year: 0,
		description:
			"There was an error while getting the movie. Please check the backend connection and try again.",
		video_id: "",
		background_image:
			"https://dummyimage.com/1920x1080/000/fff.png&text=" +
			JSON.stringify(text),
		thumbnail:
			"https://dummyimage.com/1920x1080/000/fff.png&text=" +
			JSON.stringify(text),
		duration: "0h",
		rating: "0",
		age: "0",
		genre: "Action",
		original: true,
	};
}

export async function get_movie(id: number): Promise<Movie> {
	const response = await fetch(`http://localhost:3001/movies/${id}`);
	const data = await response.json();
	return data;
}

export async function get_series(id: number): Promise<Series> {
	const response = await fetch(`http://localhost:3001/series/${id}`);
	const data = await response.json();
	return data;
}

export async function get_movie_season(movie: Movie): Promise<Season> {
	const response = await fetch(
		`http://localhost:3001/series/${movie.series!.id}`
	);
	const data = await response.json();
	const season = data["seasons"].forEach((element: Season) => {
		if (movie.id in element.episodes) {
			return element;
		}
	});
	return season;
}

export async function get_all_movies(): Promise<Movie[]> {
	const response = await fetch(`http://localhost:3001/movies`);
	const data = await response.json();
	return data;
}

export async function get_all_series(): Promise<Series[]> {
	const response = await fetch(`http://localhost:3001/series`);
	const data = await response.json();
	return data;
}

export async function get_banner_movie(): Promise<Movie> {
	const response = await fetch(`http://localhost:3001/banner`);
	const data = await response.json();
	return data;
}

export async function get_github_version(): Promise<string | null> {
	const response = await fetch(
		`https://api.github.com/repos/Bergflix-remake/frontend/tags`
	).catch(() => {
		return null;
	});
	let data = await response?.json();
	data = data[0].name;
	return data;
}

export async function get_backend_status(): Promise<boolean> {
	const response = await fetch(`http://localhost:3001/status`)
		.then(() => {
			return true;
		})
		.catch((err) => {
			return false;
		});
	return response;
}

let backend_status = true;
backend_status = await get_backend_status();

import { useRouter } from "vue-router";
const router = useRouter();

// run the get_backend_status function every 5 seconds
setInterval(async () => {
	const old_status = backend_status;
	backend_status = await get_backend_status();
	if (!old_status && backend_status) {
		console.log("Back online! Refreshing content...");

		router.go(0);
	}
}, 5000);
