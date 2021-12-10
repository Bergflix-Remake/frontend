import { Movie } from "../api_handler";

export interface Season {
	id: number;
	name: string;
	description: string;
	episodes: Movie[];
}