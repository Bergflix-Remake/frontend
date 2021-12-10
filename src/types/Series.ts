import { Movie } from "./Movie";
import { Season } from "./Season";

export interface Series {
	id: number;
	title: string;
	title_image: string;
	description: string;
	age: string;
	year: number;
	genre: string;
	image: string;
	rating: string;
	videos: Movie[];
	seasons: Season[];
}